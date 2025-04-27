import Footer from "./footer";
import Footer1 from "./Footer-1";

import Navbar1 from "./Navbar-1";
import NavbarKelas from "./NavbarKelas";

export default function Container({ children }) {
  return (
    <div className="flex flex-col">
      <NavbarKelas />
      {children}
      {/* <Footer /> */}
      <Footer1  dis="hidden" disp="flex"/>
    </div>
  );
}
