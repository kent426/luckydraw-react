import { colors } from "./styles/variables";
import { responsive } from "./styles/mixins";
import Matter from "matter-js";
import { BALL_COLORS, collisionCategory, BALL_RADIUS } from "./params";
import Ball from "./Ball";

export const runAddBalls = ({ bowlSize, gameEntities }: any) => {
  let i = 0;
  const addBalls = () => {
    if (i > 22) {
      return;
    }
    // requestAnimationFrame(() => {
    const ran =
      Math.floor(Math.random() * BALL_RADIUS * 5) * (i % 2 === 1 ? 1 : -1);
    const ballBody = Matter.Bodies.circle(
      bowlSize.x + bowlSize.width / 2 + ran,
      bowlSize.y + bowlSize.height / 2 - responsive.vertical(200),
      BALL_RADIUS,
      {
        restitution: 0.1,
        friction: 1,
        collisionFilter: {
          // group: 0,
          category: collisionCategory.BALL,
          mask:
            // eslint-disable-next-line no-bitwise
            collisionCategory.BALL |
            collisionCategory.SELECT |
            collisionCategory.DEFAULT,
        },
      }
    );
    Matter.World.add(gameEntities.physics.world, ballBody);
    const ballColor =
      BALL_COLORS[Math.floor(Math.random() * BALL_COLORS.length)];
    gameEntities[`balls${i}`] = {
      body: ballBody,
      radius: BALL_RADIUS,

      color: ballColor,
      renderer: Ball,
    };

    // @ts-ignore
    ballBody.color = ballColor;
    //
    // gameEntities[`matterBall${i}`].oodColorrr = ballColor;
    gameEntities.balls.push(ballBody);
    // console.log('i', i);
    // console.log('gameEntities', gameEntities);
    i++;
    setTimeout(() => {
      addBalls();
    }, 2000 / 22);
    // })
  };
  setTimeout(() => addBalls(), 100);
  // setTimeout(() => {
  //   console.log("remove");
  //   if (
  //     gameEntities &&
  //     gameEntities.physics &&
  //     gameEntities.physics.engine &&
  //     gameEntities.physics.world
  //   ) {
  //     gameEntities.balls.sort((a, b) => {
  //       return a.position.y - b.position.y;
  //     });
  //     gameEntities.balls.forEach((ball, index) => {
  //       if (index < 5) {
  //         Matter.World.remove(gameEntities.physics.world, ball);
  //       }
  //     });
  //   }
  // }, 15000);
};
