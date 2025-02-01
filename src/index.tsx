import React, { FC } from "react";
import { createRoot } from "react-dom/client";
const A: FC = () => <h1>hello</h1>;
const root = document.querySelector("#root");
if (root != null) {
  createRoot(root).render(<A />);
}
