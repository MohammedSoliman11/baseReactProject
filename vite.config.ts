import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  root: ".", // Set project root (where index.html is located)
  plugins: [react()],
  build: {
    outDir: "dist", // Output directory for production build
    rollupOptions: {
      input: "./index.html", // Path to index.html
    },
  },
});
