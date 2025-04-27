import "./Login.css";

import LogoGoogle from "../../assets/Logo_Google.png";
import LockIcon from "../../assets/eye-off.png";
import Navbar from "../navbar/Navbar";

export default function Login() {
  return (
    <>
      <Navbar />
      <div className="login-container">
        <div className="form-container">
          <h2>Masuk ke Akun</h2>
          <p>Yuk, lanjutin belajarmu di videobelajar.</p>
          <div className="form-group">
            <label htmlFor="email">E-Mail</label>
            <span style={{ color: "red" }}>*</span>
            <input type="text" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Kata Sandi</label>
            <span style={{ color: "red" }}>*</span>
            <div className="password-wrapper">
              <input type="password" id="password" />
              <span className="icon-input">
                <img src={LockIcon} alt="lock icon" />
              </span>
            </div>
            <a href="#" className="forgot-password">
              Lupa Password?
            </a>
          </div>
          <a href="/Home.html">
            <button className="login-button">Masuk</button>
          </a>
          <a href="/register.html">
            <button className="register-button">Daftar</button>
          </a>
          <li className="divider">atau</li>
          <button className="google-login">
            <img src={LogoGoogle} alt="Google Logo" className="google-logo" />
            Masuk dengan Google
          </button>
        </div>
      </div>
    </>
  );
}
