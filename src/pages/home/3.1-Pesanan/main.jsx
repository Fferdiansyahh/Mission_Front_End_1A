import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Container from "../../navbar/Container.jsx";
import Pesanan from "./Pesanan.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <Pesanan />
    </Container>
  </StrictMode>
);
