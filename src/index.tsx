/** @jsxImportSource @emotion/react */
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { css, jsx } from "@emotion/react";

ReactDOM.render(
  <React.StrictMode>
    <div
      css={css`
        /* display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
        position: relative; */
      `}
    >
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
