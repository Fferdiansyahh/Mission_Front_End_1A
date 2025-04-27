import { ArrowLeftIcon, ChevronDownIcon } from "flowbite-react";

import LogoProfile from "../../assets/u-3.png";
import "../login/Login.css";
import "./NavbarKelas.css";
import { useState, useEffect, useRef } from "react";
import NotifModul from "./components/NotifModul";

export default function NavbarKelas() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar-kelas">
      <div className="navbar-left">
        <ArrowLeftIcon size={20} />
        <span className="navbar-title">
          Foundations of User Experience Design
        </span>
      </div>

      <div className="navbar-right">
        <div className="progress-bar">
          <div className="progress-fill" />
        </div>

        <div className="relative" ref={dropdownRef}>
          {open && 
          <NotifModul />
          
          }

          <div className="flex items-center" onClick={() => setOpen(!open)}>
            <span className="progress-text">10/12</span>
            <ChevronDownIcon className="dropdown-icon" />
          </div>
        </div>

        <div>
          <img className="user-avatar" src={LogoProfile} alt="User Avatar" />
        </div>
      </div>
    </nav>
  );
}
