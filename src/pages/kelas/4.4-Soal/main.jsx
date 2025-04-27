import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Container from "../../navbar/Container.jsx";

import Soal from "./Soal.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <Soal />
    </Container>
  </StrictMode>
);
