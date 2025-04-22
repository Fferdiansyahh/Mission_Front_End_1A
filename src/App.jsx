import Home from "./pages/home/Home";
import Kategori from "./pages/home/1.2-All-Product/Kategori";
import Login from "./pages/login/Login";
import Bayar from "./pages/home/2.2-Bayar/main";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import UbahMetode from "./pages/home/2.3-Ubah-Metode/main";
import Selesai from "./pages/home/2.4-Selesai/Selesai";
import DetailProduct from "./pages/home/1.3-Detail-Product/Detailproduct";

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
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
