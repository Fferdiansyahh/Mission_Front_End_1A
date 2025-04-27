import React from "react";
import Book from "/src/assets/book.svg";
import Bag from "/src/assets/bag.svg";
import Profile from "/src/assets/profile.svg";
import "./MenuPesanan.css";

export default function MenuPesanan(props) {
  const {
    title = "Daftar Pesanan",
    des = "Infomasi terperenci mengenai pembelian",
  } = props;

  const menu = [
    { image: Profile, tit: "Profil Saya" },
    { image: Book, tit: "Kelas Saya" },
    { image: Bag, tit: "Pesanan Saya" },
  ];
  return (
    <>
      <div className="menu">
        <div className="m-1">
          <h1>{title}</h1>
          <p>{des}</p>
        </div>
        <div className="m-2">
          {menu.map((item) => (
            <div className="menu-c">
              <img src={item.image} alt="book"></img>
              <p>{item.tit}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
