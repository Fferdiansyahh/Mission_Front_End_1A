import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        index: "index.html",
        login: "login.html",
        register: "register.html",
        home: "home.html",
        kategori: "kategori.html",
        detail_product: "detail-product.html",
        metode: "metode.html",
        bayar: "bayar.html",
      },
    },
  },
});
