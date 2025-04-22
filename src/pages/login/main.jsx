import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Login from "./Login.jsx";
import Navbar from "../navbar/Navbar.jsx";
import Navbar1 from "../navbar/Navbar-1.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <Login />
  </StrictMode>
);
