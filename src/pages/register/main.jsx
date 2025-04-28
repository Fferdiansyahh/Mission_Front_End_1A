import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Register from "./Register.jsx";
import Navbar from "../navbar/Navbar.jsx";
import Navbar1 from "../navbar/Navbar-1.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <Register />
  </StrictMode>
);
