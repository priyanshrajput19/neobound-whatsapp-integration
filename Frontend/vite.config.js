import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [tailwindcss()],
  server: {
    port: 5174,
    allowedHosts: ["46c3839f30dd.ngrok-free.app", "7a5d146a946e.ngrok-free.app"],
  },
});
