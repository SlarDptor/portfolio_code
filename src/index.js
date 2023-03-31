import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

import { createComposedStore } from "@state/index";

import App from "./App";
import DevApp from "./DevApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ReduxProvider store={createComposedStore()}>
      <BrowserRouter>
        {/* DEVELOPMENT MODE. REPLACE `DevApp` WITH 'App' WHEN USING THIS TEMPLATE */}
        <DevApp />
      </BrowserRouter>
    </ReduxProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);

// function reportWebVitals(onPerfEntry) {
//   if (onPerfEntry && onPerfEntry instanceof Function) {
//     import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
//       getCLS(onPerfEntry);
//       getFID(onPerfEntry);
//       getFCP(onPerfEntry);
//       getLCP(onPerfEntry);
//       getTTFB(onPerfEntry);
//     });
//   }
// }