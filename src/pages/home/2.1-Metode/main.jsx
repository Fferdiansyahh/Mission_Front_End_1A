import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Container from "../../navbar/Container.jsx";

import Metode from "./Metode.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <Metode />
    </Container>
  </StrictMode>
);
