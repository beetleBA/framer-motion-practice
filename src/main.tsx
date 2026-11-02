import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { CustomCursor } from "./CustomCursor.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <CustomCursor />
  </StrictMode>,
);
