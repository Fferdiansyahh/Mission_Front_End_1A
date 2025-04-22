import "./Metode.css";
import React, { useState, useEffect } from "react";
import ImgBuy from "../../../assets/card-1.jpeg";
import DetailProductBuy from "../1.3-Detail-Product/DetailProductBuy/DetailProductBuy";
import MetodeBayar from "./MetodeBayar/MetodeBayar";
import Rincian from "./Rincian/Rincian";

export default function Metode() {
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
      <div className="metode-des">
        <div className="metode">
          <MetodeBayar metodee="Metode Pembayaran" display="none" />
          <Rincian display="none" link="/bayar" />
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
