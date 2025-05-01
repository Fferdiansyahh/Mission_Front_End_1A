import Footer1 from "./Footer-1";
import Footer from "./Footer";
import NavbarKelas from "./NavbarKelas";
import Navbar1 from "./Navbar-1";
import Navbar from "./Navbar";
import "./Navbar.css";
import { AuthContext } from "../../data/authContext";
import { useContext } from "react";



export default function Container({ children }) {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div className="flex flex-col max-w-screen-xl w-screen max-sm:w-full ">
      {/* <NavbarKelas /> */}
      <Navbar1 isLoggedIn={isLoggedIn} />
      {children}
      {/* <Footer1 dis="hidden" disp="flex" /> */}
      <Footer dis="none" />
    </div>
  );
}
