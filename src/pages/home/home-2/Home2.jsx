// import { useImmer } from "use-immer";
import "../../login/Login.css";
import Home21 from "./Home21";
import Home22 from "./Home22";
import Home23 from "./Home23";
import CardImg1 from "../../../assets/card-1.jpeg";
import CardImg2 from "../../../assets/card-2.jpeg";
import CardImg3 from "../../../assets/card-3.jpeg";
import CardImg4 from "../../../assets/card-4.jpeg";
import CardImg5 from "../../../assets/card-5.jpeg";
import CardImg6 from "../../../assets/card-6.jpeg";
import CardImgU1 from "../../../assets/u-1.png";
import CardImgU2 from "../../../assets/u-2.png";
import CardImgU3 from "../../../assets/u-3.png";
import CardImgU4 from "../../../assets/u-4.png";
import CardImgU5 from "../../../assets/u-5.png";
import CardImgU6 from "../../../assets/u-6.png";

export default function Home2() {
  const data = [
    {
      id: 0,
      cardImg: CardImg1,
      CardImgU: CardImgU1,
    },
    {
      id: 1,
      cardImg: CardImg2,
      CardImgU: CardImgU2,
    },
    {
      id: 2,
      cardImg: CardImg3,
      CardImgU: CardImgU3,
    },
    {
      id: 3,
      cardImg: CardImg4,
      CardImgU: CardImgU4,
    },
    {
      id: 4,
      cardImg: CardImg5,
      CardImgU: CardImgU5,
    },
    {
      id: 5,
      cardImg: CardImg6,
      CardImgU: CardImgU6,
    },
  ];
  return (
    <div className="beranda-2">
      <Home21 />
      <Home22 />
      <div className="b-2-3">
        {data.map((item) => (
          <a
            href="/detail-product"
            key={item.id}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Home23 cardImg={item.cardImg} CardImgU={item.CardImgU} />
          </a>
        ))}
      </div>
    </div>
  );
}
