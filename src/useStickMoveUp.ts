import { responsive } from "./styles/mixins";
import Matter from "matter-js";
import { useRef, useEffect } from "react";

let LEN = responsive.vertical(150);
export function useStickMoveUp({ clawMovedDown, setClawMovedUp }: any) {
  const distanceRef = useRef(0);
  useEffect(() => {
    distanceRef.current = 0;
    return () => {
      distanceRef.current = 0;
    };
  }, []);

  return (entities: any, { time }: any) => {
    const distance = distanceRef.current;
    if (clawMovedDown && distance >= LEN) {
      setTimeout(() => {
        setClawMovedUp(true);
      }, 500);
      return entities;
    }
    // console.log('distance', distance);
    const vertialDelta = (LEN * time.delta) / 5000;
    if (clawMovedDown) {
      Matter.Body.translate(entities.clawBox.body, {
        x: 0,
        y: -vertialDelta,
      });
      Matter.Body.translate(entities.clawLeftStick.body, {
        x: 0,
        y: -vertialDelta,
      });
      Matter.Body.translate(entities.clawRightStick.body, {
        x: 0,
        y: -vertialDelta,
      });
      Matter.Body.translate(entities.clawMiddleStick.body, {
        x: 0,
        y: -vertialDelta,
      });
      distanceRef.current = distanceRef.current + vertialDelta;
    }
    return entities;
  };
}
