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
  FaSearch,
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
export default function Pesanan() {
  const items = [
    { id: 0, des: "Harga Rendah" },
    { id: 1, des: "Harga Tinggi" },
    { id: 2, des: "A to Z" },
    { id: 3, des: "Z to A" },
    { id: 4, des: "Rating Tertinggi" },
    { id: 5, des: "Rating Terendah" },
  ];
  const dat = [2, 3, 4, 5, 6];

  const itemPesanan = ["Semua Pesanan", "Menunggu", "Berhasil", "Gagal"];
  const itemKelas = ["Semua Kelas", "Sedang Berjalan", "Selesai"];

  const data = [
    {
      id: 0,
      cardImg: CardImg1,
      CardImgU: CardImgU1,
    },
    {
      id: 1,
      cardImg: CardImg2,
      CardImgU: CardImgU2,
    },
    {
      id: 2,
      cardImg: CardImg3,
      CardImgU: CardImgU3,
    },
    {
      id: 3,
      cardImg: CardImg4,
      CardImgU: CardImgU4,
    },
    {
      id: 4,
      cardImg: CardImg5,
      CardImgU: CardImgU5,
    },
    {
      id: 5,
      cardImg: CardImg6,
      CardImgU: CardImgU6,
    },
  ];

  return (
    <div className="pes">
      <div className="pesanan">
        <MenuPesanan />

        <div className="pesanan-2">
          <div className="pesanan-2-u">
            <div className="pesanan-2-u-1">
              {/* {itemKelas.map((item) => ( */}
              {itemPesanan.map((item) => (
                <div className="p-2-u">
                  <p>{item}</p>
                </div>
              ))}
            </div>
            <div className="pesanan-2-1">
              <div className="input-wrapper">
                <input placeholder="Cari Kelas"></input>
                <FaSearch id="search-icon" />
              </div>
              <Dropdown
                buttonText="Urutkan"
                content={
                  <>
                    {items.map((item) => (
                      <DropdownItem key={item.id}>{item.des}</DropdownItem>
                    ))}
                  </>
                }
              />
            </div>
          </div>
          <div className="pesanan-2-2">
            {/* <DetailPesanan /> */}
            {/* <DetailKelas /> */}
            <DetailProfile />
          </div>
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
  );
}
