import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Container from "../../navbar/Container.jsx";
import Selesai from "./Selesai.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <Selesai />
    </Container>
  </StrictMode>
);
