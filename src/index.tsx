import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
const root = document.querySelector("#root");
if (root != null) {
  createRoot(root).render(<App />);
}
