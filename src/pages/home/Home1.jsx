import "../login/Login.css";
import CardImg1 from "../../assets/card-1.jpeg";
import CardImg2 from "../../assets/card-2.jpeg";
import CardImgU1 from "../../assets/u-1.png";
import CardImgU2 from "../../assets/u-2.png";
import Star1 from "../../assets/star_1.png";
import Star2 from "../../assets/star_2.png";
import Star3 from "../../assets/star_3.png";
import ImgBg1 from "/src/Assets/bg-1.jpeg";

export default function Home1() {
  return (
    <div className="beranda-1">
     
        <div className="b-1-1">
          <h1 className="b-1-1-1">
            Revolusi Pembelajaran: Temukan Ilmu Baru melalui Pratfrom Video
            Interaktif!
          </h1>
          <p className="b-1-1-2">
            Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
            pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat
            berpartisipasi dalam latihan interaktif yang akan meningkatkan
            pemahaman Anda.
          </p>
        </div>
        <button className="b-1-2">
          Temukan Video Course untuk Dipelajari!
        </button>
     
    </div>
  );
}
