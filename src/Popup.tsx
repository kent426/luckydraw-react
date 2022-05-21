/** @jsxImportSource @emotion/react */
import React from "react";
import { css, keyframes } from "@emotion/react";
import { colors } from "./styles/variables";
import { Button } from "./Button";

export const Popup = ({
  onPress,
  selectedColorCode,
}: {
  onPress: () => void;
  selectedColorCode?: string;
}) => (
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
        position: relative;
      `}
    >
      <div
        css={css`
          width: 50%;
          /* height: 40px; */
        `}
      >
        <Button text={"Retry"} onPress={onPress} />
      </div>
      <span
        css={css`
          position: absolute;
          /* width: 100%; */
          left: 0;
          right: 0;
          bottom: 0;
          margin: 0 auto;
          margin-bottom: 30px;

          display: block;

          font-size: 25px;
          text-align: center;
          color: white;
          ${!selectedColorCode &&
          css`
            margin-bottom: 50px;
            animation: ${moving} 4s alternate infinite ease-in-out;
          `}/* bottom: 0; */
        `}
      >
        {!!selectedColorCode ? "✅ ✅ ✅ ✅ ✅ " : "❌ ❌ ❌ ❌ ❌"}
      </span>
      <div
        css={css`
          position: absolute;
          /* top: 0; */
          left: 0;
          right: 0;
          bottom: 0;
          margin: 0 auto;
          margin-bottom: 60px;

          width: 50px;
          height: 50px;

          border: ${!!selectedColorCode ? "white 3px solid" : null};
          border-radius: 50%;
          background-color: ${selectedColorCode || "transparent"};
          animation: ${moving} 4s alternate infinite ease-in-out;
        `}
      ></div>
    </div>
  </div>
);

const moving = keyframes`
      0%    { transform: translateX(-30px) }
      100%  { transform: translateX(30px)  }

`;
