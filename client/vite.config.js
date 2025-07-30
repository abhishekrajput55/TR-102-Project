// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { webcrypto } from "crypto"; // ✅ add this

globalThis.crypto = webcrypto; // ✅ patch for Netlify

export default defineConfig({
  plugins: [react()],
  base: "./",
});
