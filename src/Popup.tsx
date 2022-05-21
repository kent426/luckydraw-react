/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { colors } from "./styles/variables";
import { Button } from "./Button";

export const Popup = () => (
  <div
    css={css`
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      bottom: 0;
      right: 0;
      z-index: 11000;
      display: flex;
      align-items: center;
      justify-content: center;
    `}
  >
    <div
      css={css`
        width: 70%;
        height: 40%;
        background-color: ${colors.blue6};
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
      `}
    >
      <div
        css={css`
          width: 50%;
          /* height: 40px; */
        `}
      >
        <Button text={"Retry"} onPress={() => {}} />
      </div>
    </div>
  </div>
);
