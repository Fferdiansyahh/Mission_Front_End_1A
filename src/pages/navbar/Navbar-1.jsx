import { useContext, useState } from "react";
import VideoBelajarLogo from "../../assets/Logo_Video_ Belajar.png";
import LogoProfile from "../../assets/u-3.png";

import "./Navbar.css";
import { AuthContext } from "../../data/authContext";
import { useLocation } from "react-router-dom";

import useActivePage from "../../data/useActivePage";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdLogout } from "react-icons/md";
import Stepper from "../home/1.2-All-Product/components/Stepper1";

export default function Navbar1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isLoggedIn, logout } = useContext(AuthContext);
  const location = useLocation();
  const hideLoginRegister =
    location.pathname === "/login" ||
    location.pathname === "/register" ||
    location.pathname === "/metode" ||
    location.pathname === "/ubah-metode" ||
    location.pathname === "/bayar" ||
    location.pathname === "/detail-pembayaran";

  const activePage = useActivePage();

  // Hanya tampilkan Stepper jika berada di salah satu halaman proses
  const showStepper = [
    "/metode",
    "/ubah-metode",
    "/bayar",
    "/detail-pembayaran",
  ].some((path) => location.pathname.includes(path));

  return (
    <nav className="navbar">
      <div className="n">
        <div className="n-1">
          <a href="/ ">
            <img
              src={VideoBelajarLogo}
              alt="videobelajar logo"
              className="logo-image"
            />
          </a>
        </div>
        <div className="n-2">
          {!hideLoginRegister && (
            <div className="n-2-1">
              <a href="/kategori">
                <p className="text-kelima">Kategori</p>
              </a>
              {isLoggedIn ? (
                <>
                  <img
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    src={LogoProfile}
                    alt="#"
                  />
                  {/* <a
                    onClick={logout}
                    href="/login"
                    className="bg-pertama font-bold py-2 px-6 rounded-lg hover:bg-green-600 transition"
                  >
                    <p className="text-white">Logout</p>
                  </a> */}
                </>
              ) : (
                <div className="flex gap-4">
                  <a
                    href="/login"
                    className="bg-pertama font-bold py-2 px-6 rounded-lg hover:bg-green-600 transition"
                  >
                    <p className="text-white">Login</p>
                  </a>
                  <a
                    href="/register"
                    className="border border-pertama text-pertama font-bold py-2 px-6 rounded-lg hover:bg-green-50 transition"
                  >
                    <p className="text-pertama">Register</p>
                  </a>
                </div>
              )}
            </div>
          )}

          {showStepper && activePage && (
            <div className="n-3 block max-sm:hidden">
              {/* Anda mungkin perlu styling untuk ini */}
              <Stepper activePage={activePage} />
            </div>
          )}

          {/* Hamburger Menu */}

          <div
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>

            <GiHamburgerMenu />
          </div>
        </div>
      </div>
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } fixed top-15 right-30  max-sm:right-0 max-sm:w-full w-max border border-kedua rounded-b-sm shadow `}
      >
        <ul className="flex flex-col h-max font-medium   border border-kedua  bg-white md:space-x-8 rtl:space-x-reverse  md:mt-0 md:border-0">
          <li className="!m-0">
            <a
              href="/kategori"
              className="hidden max-sm:block !text-kelima w-full py-4 px-3 hover:font-semibold border border-kedua pr-14 max-sm:pr-0 "
            >
              Kategori
            </a>
          </li>

          <li className="!m-0">
            <a
              href="#"
              className="block !text-kelima w-full py-4 px-3  border border-y-kedua border-x-0  pr-14 max-sm:pr-0 "
            >
              Profil Saya
            </a>
          </li>

          <li className="!m-0">
            <a
              href="/kategori"
              className="block !text-kelima w-full py-4 px-3 hover:font-semibold border border-y-kedua border-x-0 pr-14 max-sm:pr-0 "
            >
              Kelas Saya
            </a>
          </li>
          <li className="!m-0">
            <a
              href="/kategori"
              className="block !text-kelima w-full py-4 px-3 hover:font-semibold border border-y-kedua border-x-0  pr-14 max-sm:pr-0"
            >
              Pesanan Saya
            </a>
          </li>
          <li className="!m-0">
            <a
              onClick={logout}
              href="/login"
              className="flex gap-1.5 items-center !text-red-500 w-full py-4 px-3 hover:font-semibold border border-y-kedua border-x-0  pr-14 max-sm:pr-0"
            >
              Keluar
              <MdLogout
                className="text-red-500"
                style={{ width: "24px", height: "24px" }}
              />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
