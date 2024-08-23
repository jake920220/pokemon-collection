import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import GlobalStyle from "./styles/GloabalStyles.js";

createRoot(document.getElementById("root")).render(
  <>
    <GlobalStyle />
    <App />
  </>
);
