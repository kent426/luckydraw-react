/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { colors } from "./styles/variables";
import { SpinnerDotted } from "spinners-react";

export const SpinnerOverlay = () => (
  <div
    css={css`
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 11000;
      display: flex;
      align-items: center;
      justify-content: center;
    `}
  >
    <SpinnerDotted
      size={87}
      thickness={180}
      speed={180}
      color={colors.yellow_heavy}
      style={{
        transform: "translateY(150px)",
      }}
    />
  </div>
);
