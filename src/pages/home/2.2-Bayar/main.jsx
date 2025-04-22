import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Container from "../../navbar/Container.jsx";


import Bayar from "./Bayar.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <Bayar />
    </Container>
  </StrictMode>
);
