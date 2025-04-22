import React from "react";
import Book from "/src/assets/book.svg";

export default function MenuPesanan(props) {
  const {
    title = "Daftar Pesanan",
    des = "Infomasi terperenci mengenai pembelian",
  } = props;

  const menu = ["Profil Saya", "Kelas Saya", ""];
  return (
    <>
      <div className="menu">
        <div className="m-1">
          <h1>{title}</h1>
          <p>{des}</p>
        </div>
        <div className="m-2">
          <div>
          <svg viewBox="0 0 24 24" fill="red" stroke="blue" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M4 19.5 A 2.5 2.5 0 0 1 6.5 17 h 11 A 2.5 2.5 0 0 1 20 19.5 v 3 A 2.5 2.5 0 0 1 17.5 25 h -11 A 2.5 2.5 0 0 1 4 22.5 v -3 z" />
  <path d="M2 9 h 20 v 10 h -20 z" />
  <line x1="10" y1="13" x2="14" y2="13" />
  <line x1="10" y1="16" x2="14" y2="16" />
</svg>
            <p>{menu}</p>
          </div>
        </div>
      </div>
    </>
  );
}
