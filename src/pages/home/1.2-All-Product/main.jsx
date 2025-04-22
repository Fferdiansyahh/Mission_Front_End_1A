import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Container from "../../navbar/Container.jsx";
import Kategori from "./Kategori.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
     <Kategori/>
    </Container>
  </StrictMode>
);
