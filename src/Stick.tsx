/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
// import React from "react";

export const Stick = ({ size, body, zIndex, color }: any) => {
  const width = size[0];
  const height = size[1];
  const x = body.position.x - width / 2;
  const y = body.position.y - height / 2;
  const rot = body.angle;

  return (
    <div
      css={css`
        position: absolute;
        left: ${x}px;
        top: ${y}px;
        width: ${width}px;
        height: ${height}px;
        transform: translateX(0) rotate(${rot}deg);
        background-color: ${color || "pink"};
        z-index: ${zIndex};
      `}
    />
  );
};

/* transform: [{ translateX: 0 }, { rotate: `${rot} rad` }]; */
