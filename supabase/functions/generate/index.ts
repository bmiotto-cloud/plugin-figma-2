// supabase/functions/generate/index.ts
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";

const OPENAI_KEY = Deno.env.get("OPENAI_API_KEY")!;

// Load guidelines once at function cold start
// This keeps them fast to access but still allows redeployment to update them.
const guidelines = await Deno.readTextFile("./copy-guidelines.md");

interface Settings {
  tone: "casual" | "regular" | "professional";
  length: "shorter" | "same" | "longer";
  cust?: "B2B" | "B2C" | null;
  german?: boolean;
}

/**
 * Builds a high-quality, context-aware prompt for GPT.
 * Includes:
 * - Brand copywriting guidelines
 * - User-selected tone & length preferences
 * - Optional customer targeting
 * - Placeholder preservation
 * - Iterative change requests
 */
function buildPrompt(
  input: string,
  settings: Settings,
  placeholder?: string,
  changeRequest?: string
): string {
  const tone = settings.tone ?? "regular";
  const length = settings.length ?? "same";

  let prompt = `
You are **Instaffo Copywriter**, a professional UX writing assistant.

### 📋 Copywriting Guidelines
${guidelines}

### ✍️ Task
Rewrite or improve the following copy so that it fully aligns with the guidelines above.

### 🧩 Parameters
- **Tone:** ${tone}
- **Preferred Length:** ${length}
${settings.cust ? `- **Target Audience:** ${settings.cust}` : ""}
${settings.german ? "- **Language:** Output must be in German." : ""}
${placeholder ? `- **Preserve Placeholder:** ${placeholder}` : ""}

### 📝 Input Copy
${input}

${changeRequest ? `### 🔄 Change Request\n${changeRequest}\n` : ""}

### 🎯 Output Instructions
- Return **only** the improved copy (no explanations or notes).
- Keep the message clear, scannable, and action-oriented.
- If placeholders are included, keep them exactly as provided.
`.trim();

  return prompt;
}

// Edge Function Entry Point
serve(async (req) => {
  try {
    const { input, settings, placeholder, changeRequest } = await req.json();

    if (!input) {
      return new Response(JSON.stringify({ error: "Missing input text" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const prompt = buildPrompt(input, settings, placeholder, changeRequest);

    // Call OpenAI Responses API
    const aiResponse = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        input: prompt,
        max_output_tokens: 400,
      }),
    });

    if (!aiResponse.ok) {
      console.error("OpenAI error:", await aiResponse.text());
      return new Response(JSON.stringify({ error: "AI request failed" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    const json = await aiResponse.json();
    let suggestion = "";

    if (json.output?.[0]?.content) {
      const contentItem =
        json.output[0].content.find((c: any) => c.type === "output_text") ||
        json.output[0].content[0];
      suggestion = contentItem?.text || "";
    } else if (json.choices?.[0]) {
      suggestion =
        json.choices[0].message?.content || json.choices[0].text || "";
    }

    return new Response(JSON.stringify({ suggestion: suggestion.trim() }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Function error:", err);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
});
