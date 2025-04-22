import Footer from "./footer";

import Navbar1 from "./Navbar-1";

export default function Container({ children }) {
  return (
    <div>
      <Navbar1 />
      {children}
      <Footer />
    </div>
  );
}
