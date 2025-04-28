import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Kategori from "./pages/home/1.2-All-Product/Kategori";
import Login from "./pages/login/Login";
import Selesai from "./pages/home/2.4-Selesai/Selesai";
import DetailProduct from "./pages/home/1.3-Detail-Product/Detailproduct";
import Aturan from "./pages/kelas/4.2-Aturan/Aturan";
import Soal from "./pages/kelas/4.4-Soal/Soal";
import Bayar from "./pages/home/2.2-Bayar/Bayar";
import Pesanan from "./pages/home/3.1-Pesanan/Pesanan";
import UbahMetode from "./pages/home/2.3-Ubah-Metode/UbahMetode";
import Metode from "./pages/home/2.1-Metode/Metode";
import Register from "./pages/register/Register";
import Kelas from "./pages/kelas/4.1-Kelas/Kelas";
import Congrats from "./pages/kelas/4.7-Congrats/Congrats";
import Rangkuman from "./pages/kelas/4.10-Rangkuman/Rangkuman";
import Try from "./pages/kelas/4.7-Congrats/Try";
import Sertifikat from "./pages/kelas/4.12-Sertifikat/Sertifikat";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/kategori" element={<Kategori />} />
          <Route path="/bayar" element={<Bayar />} />
          <Route path="/metode" element={<Metode />} />
          <Route path="/pesanan" element={<Pesanan />} />
          <Route path="/ubah-metode" element={<UbahMetode />} />
          <Route path="/detail-pembayaran" element={<Selesai />} />
          <Route path="/detail-product" element={<DetailProduct />} />
          <Route path="/aturan" element={<Aturan />} />
          <Route path="/soal" element={<Soal />} />
          <Route path="/kelas" element={<Kelas />} />
          <Route path="/congrats" element={<Congrats />} />
          <Route path="/try" element={<Try />} />
          <Route path="/rangkuman" element={<Rangkuman />} />
          <Route path="/sertifikat" element={<Sertifikat />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
