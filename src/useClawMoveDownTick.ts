import Matter from "matter-js";
import { STICK_HEIGHT, CLAW_VELOCITY_VERTICAL } from "./params";

export function useClawMoveDownTick(
  buttonPressed: any,
  clawMovedDown: any,
  setClawMovedDown: any
) {
  return (entities: any) => {
    const { bowlSize } = entities;
    if (
      buttonPressed &&
      !clawMovedDown &&
      entities.clawLeftStick &&
      entities.clawRightStick
    ) {
      if (
        entities.clawLeftStick.body.position.y + STICK_HEIGHT * 1.6 <
        bowlSize.y + bowlSize.height
      ) {
        Matter.Body.translate(entities.clawBox.body, {
          x: 0,
          y: CLAW_VELOCITY_VERTICAL,
        });
        Matter.Body.translate(entities.clawLeftStick.body, {
          x: 0,
          y: CLAW_VELOCITY_VERTICAL,
        });
        Matter.Body.translate(entities.clawRightStick.body, {
          x: 0,
          y: CLAW_VELOCITY_VERTICAL,
        });
        Matter.Body.translate(entities.clawMiddleStick.body, {
          x: 0,
          y: CLAW_VELOCITY_VERTICAL,
        });
      } else {
        setClawMovedDown(true);
      }
    }
    return entities;
  };
}
