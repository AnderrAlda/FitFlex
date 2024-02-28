import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { DataContextProvider } from "./context/cartContext.tsx";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DataContextProvider>
      <App />
    </DataContextProvider>
  </React.StrictMode>
);
