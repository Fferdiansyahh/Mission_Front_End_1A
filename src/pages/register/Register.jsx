import React, { useState } from "react";
import "../login/Login.css";
import LogoGoogle from "../../assets/Logo_Google.png";
import LockIcon from "../../assets/eye-off.png";
import FlagImg from "../../assets/indo.png";
import Navbar from "../navbar/Navbar";
import ShowPass from "/src/assets/hide-pass.svg";
import HidePass from "/src/assets/show-pass.svg";
import Container from "../navbar/Container";

export default function Register() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <>
      <Container>
        <div className="login-container">
          <div className="form-container">
            <h2>Pendaftaran Akun</h2>
            <p>Yuk, daftarkan akunmu sekarang juga.</p>
            <div className="form-group">
              <label htmlfor="name">Nama Lengkap</label>
              <span style={{ color: "red" }}>*</span>
              <input type="text" id="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-Mail</label>
              <span style={{ color: "red" }}>*</span>
              <input type="text" id="email" />
            </div>
            <div className="form-group">
              <label htmlFor="email">No Hp</label>
              <span style={{ color: "red" }}>*</span>
              <div className="flag">
                <img className="flag-img" src={FlagImg} />
              </div>
              <div className="no-hp">
                <select id="cars" name="cars">
                  <option value="indo">+62</option>
                </select>
                <input type="text" id="email" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="floating_pass">Kata Sandi</label>
              <span style={{ color: "red" }}>*</span>
              <div className="relative ">
                <input
                  type={passwordVisible ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="floating_pass"
                  className=""
                  placeholder=" "
                />
                <span
                  onClick={togglePasswordVisibility}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                >
                  <img
                    src={passwordVisible ? HidePass : ShowPass}
                    alt={
                      passwordVisible
                        ? "Sembunyikan password"
                        : "Tampilkan password"
                    }
                    className="w-5 h-5"
                  />
                </span>
              </div>
              <div className="form-group">
                <label htmlFor="floating_conpass">Konfirmasi Kata Sandi</label>
                <span style={{ color: "red" }}>*</span>
                <div className="relative ">
                  <input
                    type={confirmPasswordVisible ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    id="floating_conpass"
                    className=""
                    placeholder=" "
                  />
                  <span
                    onClick={togglePasswordVisibility}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  >
                    <img
                      src={passwordVisible ? HidePass : ShowPass}
                      alt={
                        passwordVisible
                          ? "Sembunyikan password"
                          : "Tampilkan password"
                      }
                      className="w-5 h-5"
                    />
                  </span>
                </div>
              </div>
              <a href="#" className="forgot-password">
                Lupa Password?
              </a>
              <button className="login-button">Daftar</button>
              <a href="/login">
                <button className="register-button">Masuk</button>
              </a>
              <li className="divider">atau</li>
              <button className="google-login">
                <img
                  src={LogoGoogle}
                  alt="Google Logo"
                  className="google-logo"
                />
                Daftar dengan Google
              </button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
