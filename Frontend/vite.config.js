import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [tailwindcss()],
  server: {
    port: 5174,
    allowedHosts: [
      "4387a941e543.ngrok-free.app",
      "4387a941e543.ngrok-free.app",
      "fe917bf952e5.ngrok-free.app",
      "6d5602ff9a8a.ngrok-free.app",
      "93737aa07a54.ngrok-free.app",
      "fabe2760acf4.ngrok-free.app",
    ],
  },
});
