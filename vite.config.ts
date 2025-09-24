import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  root: "ui",          // Root folder for React UI
  base: "./",
  build: {
    outDir: "../dist",   // Compiled UI output
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(__dirname, "ui/index.html"),
      output: {
        entryFileNames: "assets/[name].js",
        chunkFileNames: "assets/[name].js",
        assetFileNames: "assets/[name].[ext]"
      }
    }
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "ui")
    }
  }
});
