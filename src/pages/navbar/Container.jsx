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
  const shouldHideFooter = ["/login", "/register"].includes(location.pathname);

  const hideNavbarKelas = [
    "/kelas",
    "/soal",
    "/aturan",
    "/congrats",
    "/try",
    "/rangkuman",
  ].includes(location.pathname);

  const hideFooterKelas = [
    "/kelas",
    "/soal",
    "/aturan",
    "/congrats",
    "/try",
    "/rangkuman",
  ].includes(location.pathname);

  return (
    <main className="    ">
      {hideNavbarKelas && <NavbarKelas />}
      {!hideNavbarKelas && <Navbar1 isLoggedIn={isLoggedIn} />}

      {/* <Navbar /> */}
      {children}
      {hideFooterKelas && <Footer1 dis="hidden" disp="flex" />}
      {hideFooterKelas || (!shouldHideFooter && <Footer dis="block" />)}
    </main>
  );
}
