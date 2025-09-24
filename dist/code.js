"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/// <reference types="@figma/plugin-typings" />
figma.showUI(__html__, { width: 400, height: 600 });
figma.ui.onmessage = (msg) => __awaiter(void 0, void 0, void 0, function* () {
    if (msg.type === "get-selected-text") {
        const selection = figma.currentPage.selection;
        const textNode = selection.find((node) => node.type === "TEXT");
        const text = (textNode === null || textNode === void 0 ? void 0 : textNode.characters) || "";
        figma.ui.postMessage({ type: "selected-text", text });
    }
    if (msg.type === "apply-new-text") {
        const selection = figma.currentPage.selection;
        const textNode = selection.find((node) => node.type === "TEXT");
        if (textNode && typeof textNode.fontName !== "symbol") {
            const font = textNode.fontName;
            yield figma.loadFontAsync({ family: font.family, style: font.style });
            textNode.characters = msg.text;
        }
        figma.closePlugin();
    }
});
