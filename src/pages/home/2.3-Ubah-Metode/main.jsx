import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Container from "../../navbar/Container.jsx";
import UbahMetode from "./UbahMetode.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <UbahMetode />
    </Container>
  </StrictMode>
);
