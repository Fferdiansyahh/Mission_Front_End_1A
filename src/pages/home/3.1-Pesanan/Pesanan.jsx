import "./Pesanan.css";
import React, { useState } from "react";

import Home23 from "../home-2/Home23";

import CardImg1 from "../../../assets/card-1.jpeg";
import CardImg2 from "../../../assets/card-2.jpeg";
import CardImg3 from "../../../assets/card-3.jpeg";
import CardImg4 from "../../../assets/card-4.jpeg";
import CardImg5 from "../../../assets/card-5.jpeg";
import CardImg6 from "../../../assets/card-6.jpeg";
import CardImgU1 from "../../../assets/u-1.png";
import CardImgU2 from "../../../assets/u-2.png";
import CardImgU3 from "../../../assets/u-3.png";
import CardImgU4 from "../../../assets/u-4.png";
import CardImgU5 from "../../../assets/u-5.png";
import CardImgU6 from "../../../assets/u-6.png";
import {
  FaChevronLeft,
  FaChevronRight,
  FaChevronUp,
  FaChevronDown,
} from "react-icons/fa";

import Dropdown from "../1.2-All-Product/components/Dropdown/Dropdown";

import DropdownItem from "../1.2-All-Product/components/DropdownItem/DropdownItem";
import Home21 from "../home-2/Home21";
import MenuPesanan from "./Menu/MenuPesanan";
import DetailPesanan from "./DetailPesanan/DetailPesanan";
import DetailKelas from "./DetailKelas/DetailKelas";

import DetailProfile from "./Profile/DetailProfile";
import Container from "../../navbar/Container";
import Home22 from "../home-2/Home22";
import Search from "./Search/Search";
export default function Pesanan() {
  const dat = [2, 3, 4, 5, 6];

  const itemPesanan = ["Semua Pesanan", "Menunggu", "Berhasil", "Gagal"];

  const item = [
    {
      id: 0,
      tit: "Daftar Pesanan",
      des: "Infomasi terperenci mengenai pembelian",
    },
  ];
  return (
    <>
      <Container>
        <div className="pes">
          <div className="pesanan">
            <MenuPesanan item={item} />

            <div className="pesanan-2">
              <div className="flex max-sm:flex-col gap-6">
                <Home22 categories={itemPesanan} wd="full" />
                <Search />
              </div>
              <div className="pesanan-2-2">
                <DetailPesanan />
                {/* <DetailKelas /> */}
              </div>
              {/* <DetailProfile /> */}
              <div className="pesanan-2-3">
                <a className="pesanan-2-3-1">
                  <FaChevronLeft className="icon-page" />
                </a>
                <a className="pesanan-2-3-2">
                  <p>1</p>
                </a>
                {dat.map((item) => (
                  <a className="pesanan-2-3-3">
                    <p>{item}</p>
                  </a>
                ))}
                <a className="pesanan-2-3-1">
                  <FaChevronRight className="icon-page" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
