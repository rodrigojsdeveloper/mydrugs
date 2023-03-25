import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/global";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import React from "react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
