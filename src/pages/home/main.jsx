import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Navbar from "../navbar/Navbar.jsx";

import Navbar1 from "../navbar/Navbar-1.jsx";
import Home from "./Home.jsx";
import Container from "../navbar/Container.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <Home />
    </Container>
  </StrictMode>
);
