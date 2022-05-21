/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

export function BlurBgView() {
  return (
    <div
      css={css`
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.3);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(10px);
        filter: blur(5px);
        z-index: 10000;
      `}
    />
  );
}
