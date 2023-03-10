import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/OMDB_API_59_2";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
