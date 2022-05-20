/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

export const Ball = (props: any) => {
  if (!props.radius) {
    return null;
  }

  const radius = props.radius;
  const lenBall = 2 * radius;
  const x = props.body.position.x - radius;
  const y = props.body.position.y - radius;
  const id = props.body.id;
  const isSelect = props.body.oodIsSelect;
  // const x = 0
  // const y = 0
  // if (isSelect) {
  //   console.log(
  //     'JSON.stringify',
  //     JSON.stringify(props.body.collisionFilter),
  //   );
  // }

  // console.log("props", props);
  return (
    <div
      css={css`
        position: absolute;
        left: ${x}px;
        top: ${y}px;
        width: ${lenBall * 0.9}px;
        height: ${lenBall * 0.9}px;
        border-radius: ${radius}px;
        background-color: ${props.color};
      `}
    ></div>
  );
};

//  position: "absolute",
//         left: x,
//         top: y,
//         // width: lenBall,
//         // height: lenBall,
//         width: lenBall * 0.9,
//         height: lenBall * 0.9,
//         borderRadius: radius,
//         backgroundColor: props.color
