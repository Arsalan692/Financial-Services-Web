import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    // The contact forms post to a relative /api path so the same code
    // works in development and in production. In development that is
    // proxied to the FastAPI app; in production the two are served
    // under one origin (or ALLOWED_ORIGINS covers the split).
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8000",
        changeOrigin: true,
      },
    },
  },
});
