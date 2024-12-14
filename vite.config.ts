import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Optional: Resolve aliases for better imports
      "@fortawesome/fontawesome-free":
        "/node_modules/@fortawesome/fontawesome-free",
    },
  },
  build: {
    rollupOptions: {
      external: [
        "@fortawesome/fontawesome-free/css/all.min.css", // Add this to externalize the FontAwesome CSS
      ],
    },
  },
});
