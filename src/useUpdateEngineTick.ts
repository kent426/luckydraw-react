import Matter from "matter-js";
import { useCallback } from "react";

export function useUpdateEngineTick({ clawMovedUp }: any) {
  return useCallback(
    (entities: any) => {
      if (clawMovedUp) {
        return entities;
      }
      // const now = new Date().getTime();
      // const delta = now - entities.lastEngineUpdateTime;
      requestAnimationFrame(() => {
        Matter.Engine.update(
          entities.physics.engine
          // delta > 1000 / 30 ? 1000 / 30 : delta
        );
      });

      // entities.lastEngineUpdateTime = now;
      // console.log('entities', entities);
      return entities;
    },
    [clawMovedUp]
  );
}
