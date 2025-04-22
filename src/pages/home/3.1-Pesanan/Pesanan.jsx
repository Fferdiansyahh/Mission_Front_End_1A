import "./Pesanan.css";
import React, { useState } from "react";

import Home23 from "../home-2/Home23";
import Book from "../../../assets/book.png";

import Clock from "../../../assets/clock.png";
import Shop from "../../../assets/shop.png";

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
  const filter1 = [
    "Pemasaran",
    "Digital & Teknologi",
    "Pengembangan Diri",
    "Bisnis Managemen",
  ];
  const filter2 = ["Kurang dari 4 Jam", "4- Jam", "Lebih dari 8 Jam"];

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

  const [isBidangOpen, setIsBidangOpen] = useState(true);
  const [isHargaOpen, setIsHargaOpen] = useState(true);
  const [isDurasiOpen, setIsDurasiOpen] = useState(true);

  const handleBidangClick = () => {
    setIsBidangOpen(!isBidangOpen);
  };
  const handleHargaClick = () => {
    setIsHargaOpen(!isHargaOpen);
  };
  const handleDurasiClick = () => {
    setIsDurasiOpen(!isDurasiOpen);
  };

  return (
    <div className="pes">
      <Home21 />
      <div className="pesanan">
        <MenuPesanan />

        <div className="pesanan-2">
          <div className="pesanan-2-1">
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
            <div className="input-wrapper">
              <input placeholder="Cari Kelas"></input>
              <FaSearch id="search-icon" />
            </div>
          </div>
          <div className="pesanan-2-2">
            {data.map((item) => (
              <Home23 {...item} />
            ))}
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
