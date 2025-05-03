import Footer1 from "./Footer-1";
import Footer from "./Footer";
import NavbarKelas from "./NavbarKelas";
import Navbar1 from "./Navbar-1";
import Navbar from "./Navbar";
import "./Navbar.css";
import { AuthContext } from "../../data/authContext";
import { useContext } from "react";
import { useLocation } from "react-router-dom";

export default function Container({ children }) {
  const { isLoggedIn } = useContext(AuthContext);
  const location = useLocation();
  const shouldHideFooter =
    location.pathname === "/login" || location.pathname === "/register";
  return (
    <div className="flex flex-col max-w-screen-xl     ">
      {/* <NavbarKelas /> */}
      <Navbar1 isLoggedIn={isLoggedIn} />

      {/* <Navbar /> */}
      {children}
      {/* <Footer1 dis="hidden" disp="flex" /> */}
      {!shouldHideFooter && <Footer dis="block" />}
    </div>
  );
}
