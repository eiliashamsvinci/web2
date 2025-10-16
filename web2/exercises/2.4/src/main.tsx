import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App/App.tsx";
import Main from "./components/Main/index.tsx";
import Cinema from "./components/Main/Cinema.tsx";

 createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Cinema />
  </StrictMode>
);


