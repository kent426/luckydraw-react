import { useCallback } from "react";
import { responsive } from "./styles/mixins";
import Matter from "matter-js";

// const CLAW_VELOCITY_HORIZONTAL = Platform.OS === 'ios' ? 2 : 3;
// const CLAW_VELOCITY_VERTICAL = Platform.OS === 'ios' ? 2 : 3;
const CLAW_VELOCITY_HORIZONTAL = 2;
const CLAW_VELOCITY_VERTICAL = 2;

export function useControlClawTick(
  direction: any,
  bowlSize: any,
  buttonPressed: any
) {
  return useCallback(
    (entities) => {
      if (buttonPressed) {
        return entities;
      }
      if (entities.inited && entities.clawLeftStick) {
        if (
          direction === "left" &&
          entities.clawLeftStick.body.position.x >
            bowlSize.x + responsive.horizontal(20)
        ) {
          Matter.Body.translate(entities.clawBox.body, {
            x: -CLAW_VELOCITY_HORIZONTAL,
            y: 0,
          });
          Matter.Body.translate(entities.clawLeftStick.body, {
            x: -CLAW_VELOCITY_HORIZONTAL,
            y: 0,
          });
          Matter.Body.translate(entities.clawRightStick.body, {
            x: -CLAW_VELOCITY_HORIZONTAL,
            y: 0,
          });
          Matter.Body.translate(entities.clawMiddleStick.body, {
            x: -CLAW_VELOCITY_HORIZONTAL,
            y: 0,
          });
        }
        if (
          direction === "right" &&
          entities.clawRightStick.body.position.x <
            bowlSize.x + bowlSize.width - responsive.horizontal(20)
        ) {
          Matter.Body.translate(entities.clawBox.body, {
            x: +CLAW_VELOCITY_HORIZONTAL,
            y: 0,
          });
          Matter.Body.translate(entities.clawLeftStick.body, {
            x: +CLAW_VELOCITY_HORIZONTAL,
            y: 0,
          });
          Matter.Body.translate(entities.clawRightStick.body, {
            x: +CLAW_VELOCITY_HORIZONTAL,
            y: 0,
          });
          Matter.Body.translate(entities.clawMiddleStick.body, {
            x: +CLAW_VELOCITY_HORIZONTAL,
            y: 0,
          });
        }
        return entities;
      }
      return entities;
    },
    [bowlSize.width, bowlSize.x, buttonPressed, direction]
  );
}
