import { BALL_RADIUS, collisionCategory } from "./params";
import Matter from "matter-js";
import { useCallback, useState } from "react";

export function useSetCollideTick(grabbed: any) {
  const [selected, setselected] = useState(false);
  return useCallback(
    (entities: any) => {
      if (selected) {
        return entities;
      }
      if (!grabbed || entities.balls.length === 0) {
        return entities;
      } else {
        const selectedBalls = entities.balls.filter(
          (ball: any) =>
            ball.position.x - BALL_RADIUS * 1.5 >
              entities.clawLeftStick.body.position.x &&
            ball.position.x + BALL_RADIUS * 1.5 <
              entities.clawRightStick.body.position.x
        );

        // console.log('selectedBalls', selectedBalls);
        if (selectedBalls.length === 0) {
          return entities;
        }
        const selectedBall = selectedBalls.reduce((prev: any, current: any) => {
          return prev.position.y < current.position.y ? prev : current;
        });
        // const ballBody = Matter.Bodies.circle(
        //   selectedBall.position.x,
        //   selectedBall.position.y,
        //   BALL_RADIUS,
        //   {
        //     restitution: 0.1,
        //     friction: 1,
        //     collisionFilter: {
        //       // group: 0,
        //       category: collisionCategory.SELECT,
        //       mask:
        //         // eslint-disable-next-line no-bitwise
        //         collisionCategory.CLAW |
        //         collisionCategory.BALL |
        //         collisionCategory.SELECT |
        //         collisionCategory.DEFAULT,
        //     },
        //   },
        // );
        // Matter.World.add(entities.physics.world, ballBody);
        selectedBall.collisionFilter = {
          category: collisionCategory.SELECT,
          mask:
            collisionCategory.CLAW |
            collisionCategory.BALL |
            // collisionCategory.SELECT |
            collisionCategory.DEFAULT,
          // group: 0,
        };
        selectedBall.oodIsSelect = true;
        setselected(true);
        // console.log('selectedBall', selectedBall);
        return entities;
      }
    },
    [grabbed, selected]
  );
}
