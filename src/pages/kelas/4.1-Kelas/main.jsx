import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Container from "../../navbar/Container.jsx";

import Kelas from "./Kelas.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <Kelas />
    </Container>
  </StrictMode>
);
