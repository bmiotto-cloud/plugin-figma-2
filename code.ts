/// <reference types="@figma/plugin-typings" />

figma.showUI(__html__, { width: 400, height: 600 });

figma.ui.onmessage = async (msg) => {
  if (msg.type === "get-selected-text") {
    const selection = figma.currentPage.selection;
    const textNode = selection.find((node) => node.type === "TEXT") as TextNode | undefined;
    const text = textNode?.characters || "";
    figma.ui.postMessage({ type: "selected-text", text });
  }

  if (msg.type === "apply-new-text") {
    const selection = figma.currentPage.selection;
    const textNode = selection.find((node) => node.type === "TEXT") as TextNode | undefined;
    if (textNode && typeof textNode.fontName !== "symbol") {
      const font = textNode.fontName as FontName;
      await figma.loadFontAsync({ family: font.family, style: font.style });
      textNode.characters = msg.text;
    }
    figma.closePlugin();
  }
};
