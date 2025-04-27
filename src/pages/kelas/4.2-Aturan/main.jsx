import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Container from "../../navbar/Container.jsx";

import Aturan from "./Aturan.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <Aturan />
    </Container>
  </StrictMode>
);
