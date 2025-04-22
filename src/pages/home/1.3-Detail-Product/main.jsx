import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Container from "../../navbar/Container.jsx";
import DetailProductDes from "./DetailProductDes/DetailProductDes.jsx";
import DetailProductUp from "./DetailProductUp/DetailProductUp.jsx";
import DetailProduct from "./Detailproduct.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
            <DetailProduct/>
      
  
    </Container>
  </StrictMode>
);
