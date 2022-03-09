import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  base: "/fitness",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
