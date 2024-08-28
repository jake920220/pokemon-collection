import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import GlobalStyle from "./styles/GloabalStyles.js";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store.js";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
