import Home from "./pages/home/Home";
import Kategori from "./pages/home/1.2-All-Product/Kategori";
import Login from "./pages/login/Login";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Selesai from "./pages/home/2.4-Selesai/Selesai";
import DetailProduct from "./pages/home/1.3-Detail-Product/Detailproduct";
import Aturan from "./pages/kelas/4.2-Aturan/Aturan";
import Soal from "./pages/kelas/4.4-Soal/Soal";
import Bayar from "./pages/home/2.2-Bayar/Bayar";
import UbahMetode from "./pages/home/2.3-Ubah-Metode/UbahMetode";

export default function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Beranda</Link>
              </li>
              <li>
                <Link to="/Kategori">Kategori</Link>
              </li>
            </ul>
          </nav>
          <hr />
          <Routes>
            <Route path="/kategori" element={<Kategori />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/bayar" element={<Bayar />} />
            <Route path="/ubah-metode" element={<UbahMetode />} />
            <Route path="/detail-pembayaran" element={<Selesai />} />
            <Route path="/detail-product" element={<DetailProduct />} />
            <Route path="/aturan" element={<Aturan />} />
            <Route path="/soal" element={<Soal />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
