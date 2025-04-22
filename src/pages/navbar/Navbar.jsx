import VideoBelajarLogo from "../../assets/Logo_Video_ Belajar.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="n">
        <div className="n-1">
          <img
            src={VideoBelajarLogo}
            alt="videobelajar logo"
            className="logo-image"
          />
        </div>
      </div>
    </nav>
  );
}
