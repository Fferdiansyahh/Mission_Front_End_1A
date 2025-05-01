import { useContext } from "react";
import VideoBelajarLogo from "../../assets/Logo_Video_ Belajar.png";
import LogoProfile from "../../assets/u-3.png";

import "./Navbar.css";
import { AuthContext } from "../../data/authContext";

export default function Navbar1() {
  const { isLoggedIn, logout } = useContext(AuthContext);

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
          <div className="n-2-1">
            <a href="/kategori">
              <p className="text-kelima">Kategori</p>
            </a>
            {isLoggedIn ? (
              <>
                <img src={LogoProfile} alt="#" />
                <a
                  onClick={logout}
                  href="/login"
                  className="bg-pertama font-bold py-2 px-6 rounded-lg hover:bg-green-600 transition"
                >
                  <p className="text-white">Logout</p>
                </a>
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
        </div>
      </div>
    </nav>
  );
}
