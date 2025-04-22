import "./DetailProductUp.css";

import Star1 from "../../../../assets/star_1.png";
import Star2 from "../../../../assets/star_2.png";
import Star3 from "../../../../assets/star_3.png";
import bg1 from "../../../../assets/bg-1.jpeg";

export default function DetailProductUp() {
  return (
    <>
      <div className="detail-up-1">
        <p>Beranda / Desain / </p>
        <h6>
          Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product
          Manager.
        </h6>
      </div>

      <div
        className="detail-1"
        style={
          {
            // backgroundImage: `url( ${bg1})`,
          }
        }
      >
        <div className="d-1-1">
          <h1 className="d-1-1-1">
            Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product
            Manager.
          </h1>
          <p className="d-1-1-2">
          Belajar bersama tutor profesional di Video Course. 
          Kapanpun, di manapun.
          </p>

          <div className="card-u-1-1-2-1">
            <h2>★</h2>
            <h2>★</h2>
            <h2>★</h2>
            <h3>★</h3>
            <h3>★</h3>
            <p>3.5(86)</p>
          </div>
        </div>
      </div>
    </>
  );
}
