import "../login/Login.css";
import LogoGoogle from "../../assets/Logo_Google.png";
import LockIcon from "../../assets/eye-off.png";
import FlagImg from "../../assets/indo.png";
import Navbar from "../navbar/Navbar";

export default function Register() {
  return (
    <>
      <Navbar />
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
            <label htmlFor="password">Kata Sandi</label>
            <span style={{ color: "red" }}>*</span>
            <div className="password-wrapper">
              <input type="password" id="password" />
              <span className="icon-input">
                <img src={LockIcon} alt="lock icon" />
              </span>
            </div>
            <div className="form-group">
              <label htmlFor="password">Konfirmasi Kata Sandi</label>
              <span style={{ color: "red" }}>*</span>
              <div className="password-wrapper">
                <input type="password" id="password" />
                <span className="icon-input">
                  <img src={LockIcon} alt="lock icon" />
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
              <img src={LogoGoogle} alt="Google Logo" className="google-logo" />
              Daftar dengan Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
