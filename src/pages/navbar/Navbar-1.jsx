import VideoBelajarLogo from "../../assets/Logo_Video_ Belajar.png";
import LogoProfile from "../../assets/u-3.png";
import "../login/Login.css";
import "./Navbar.css";

export default function Navbar1() {
  return (
    <nav className="navbar">
      <div className="n">
        <div className="n-1">
          <a href="/Home.html">
            <img
              src={VideoBelajarLogo}
              alt="videobelajar logo"
              className="logo-image"
            />
          </a>
        </div>
        <div className="n-2">
          <div className="n-2-1">
            <a href="/Kategori.html">
              <p>Kategori</p>
            </a>
            <img src={LogoProfile} alt="#" />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon" />
          </button>
          {/* <div
            className="offcanvas offcanvas-end"
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <img src={LogoProfile} alt="#" />
              <p>Kategori</p>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
          </div> */}
        </div>
      </div>
    </nav>
  );
}
