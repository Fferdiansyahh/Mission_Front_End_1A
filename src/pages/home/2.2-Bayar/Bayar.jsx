import "./Bayar.css";
import React, { useState, useEffect } from "react";

import ImgBuy from "../../../assets/card-1.jpeg";
import DetailProductBuy from "../1.3-Detail-Product/DetailProductBuy/DetailProductBuy";
import MetodeBayar from "../2.1-Metode/MetodeBayar/MetodeBayar";
import Rincian from "../2.1-Metode/Rincian/Rincian";
import Time from "../2.1-Metode/Time";

export default function Bayar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <Time />
      <div className="metode-des">
        <div className="metode">
          <Rincian display="flex" tit="Bayar Sekarang" link="/detail-pembayaran" to="/ubah-metode" />
          <MetodeBayar metodee="Tata Cara Pembayaran" display="none" />
        </div>

        <div className="metode-des-2">
          {isMobile ? (
            <DetailProductBuy image={ImgBuy} display="none" dis="none" />
          ) : (
            <DetailProductBuy image={ImgBuy} display="block" dis="none" />
          )}
        </div>
      </div>
    </>
  );
}
