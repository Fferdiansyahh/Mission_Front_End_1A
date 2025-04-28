import Footer1 from "./Footer-1";
import Footer from "./Footer";
import NavbarKelas from "./NavbarKelas";

export default function Container({ children }) {
  return (
    <div className="flex flex-col box-border w-full ">
      <NavbarKelas />
      {children}
      <Footer1 dis="hidden" disp="flex" />
      {/* <Footer /> */}
    </div>
  );
}
