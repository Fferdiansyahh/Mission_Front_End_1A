import "../login/Login.css";
import Home2 from "./home-2/Home2";
import Home1 from "./Home1";
import Home3 from "./Home3";

export default function Home() {
  return (
    <div className="home-container">
      <div className="beranda-container">
        <Home1 />
        <Home2 />
        <Home3 />
      </div>
    </div>
  );
}
