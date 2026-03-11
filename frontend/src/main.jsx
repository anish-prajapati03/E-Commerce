import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// IMPORTANT: this path must match folder + filename exactly
import { CartProvider } from "./context/CardContext.jsx";
// You can remove .jsx — Vite auto-detects extensions.

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>
);
