import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import flowbiteReact from "flowbite-react/plugin/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), flowbiteReact()],
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
        kelas: "kelas.html",
        soal: "soal.html",
      },
    },
  },
});
