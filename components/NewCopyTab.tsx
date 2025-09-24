import React, { useState } from "react";
import { supabase } from "../supabaseClient";

export function NewCopyTab({ selectedCopy, setSelectedCopy, onGenerate }) {
  const [loading, setLoading] = useState(false);
  const [tone, setTone] = useState<"regular" | "casual" | "professional">("regular");
  const [length, setLength] = useState<"same" | "shorter" | "longer">("same");
  const [german, setGerman] = useState(false);

  async function generateCopy() {
    setLoading(true);
    const { data, error } = await fetch(
      "https://<your-supabase-ref>.functions.supabase.co/generate",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          input: selectedCopy,
          settings: { tone, length, german },
        }),
      }
    ).then((res) => res.json());

    setLoading(false);
    if (error) return console.error(error);
    onGenerate(data.suggestion);
  }

  return (
    <div className="flex flex-col gap-4 p-4">
      <textarea
        className="w-full h-28 border rounded-xl p-2"
        value={selectedCopy}
        placeholder="Type or select text from Figma..."
        onChange={(e) => setSelectedCopy(e.target.value)}
      />

      {/* Tone selection */}
      <div className="flex gap-2">
        {["casual", "regular", "professional"].map((t) => (
          <button
            key={t}
            className={`px-3 py-1 rounded-xl border ${tone === t ? "bg-purple-200" : ""}`}
            onClick={() => setTone(t as any)}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Length control */}
      <div className="flex gap-2">
        {["shorter", "same", "longer"].map((l) => (
          <button
            key={l}
            className={`px-3 py-1 rounded-xl border ${length === l ? "bg-purple-200" : ""}`}
            onClick={() => setLength(l as any)}
          >
            {l}
          </button>
        ))}
      </div>

      <label className="flex items-center gap-2">
        <input type="checkbox" checked={german} onChange={() => setGerman(!german)} />
        Generate in German
      </label>

      <button
        onClick={generateCopy}
        className="bg-purple-600 text-white rounded-xl p-2 disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "Generating..." : "Suggest Copy"}
      </button>
    </div>
  );
}
