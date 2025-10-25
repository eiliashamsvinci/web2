import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App//App.tsx";
import Cinema from "./components/Main/cinema/Cinema.tsx";
import ColorPlat from "./components/Main/ClickCounter/colorbox.tsx";
import Apps from "./components/Main/film/app.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App/>
  </StrictMode>
);
