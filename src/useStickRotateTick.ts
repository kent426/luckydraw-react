import { useState, useRef, useEffect } from "react";
import Matter from "matter-js";
import { STICK_HEIGHT, STICK_WID } from "./params";

const initPos = {
  lx: 0,
  ly: 0,
  rx: 0,
  ry: 0,
};

export function useStickRotateTick(clawMovedDown: any) {
  const clawRef = useRef({ ...initPos });
  useEffect(() => {
    clawRef.current = { ...initPos };
    return () => {
      clawRef.current = { ...initPos };
    };
  }, []);

  return (entities: any) => {
    const clawPos = clawRef.current;
    if (
      clawMovedDown &&
      entities.clawLeftStick.body &&
      entities.clawRightStick.body &&
      entities.clawRightStick.body.angle < Math.PI / 4
    ) {
      if (clawPos.lx === 0) {
        clawPos.lx = entities.clawLeftStick.body.position.x;
        clawPos.ly = entities.clawLeftStick.body.position.y;
        clawPos.rx = entities.clawRightStick.body.position.x;
        clawPos.ry = entities.clawRightStick.body.position.y;
      }
      Matter.Body.rotate(
        entities.clawLeftStick.body,
        -0.05
        // , {
        // x: clawPos.lx - STICK_WID / 5,
        // y: clawPos.ly - STICK_HEIGHT / 2,
        // }
      );
      Matter.Body.rotate(
        entities.clawRightStick.body,
        0.05
        // , {
        // x: clawPos.rx + STICK_WID / 5,
        // y: clawPos.ry - STICK_HEIGHT / 2,
        // }
      );
      Matter.Body.translate(entities.clawMiddleStick.body, { x: 0, y: -1.4 });
    }
    return entities;
  };
}
