import Matter from "matter-js";
import { PINK_BORDER_WID } from "./params";

export const runAddThreeWalls = ({ bowlSize, gameEntities }: any) => {
  const bottomWall = Matter.Bodies.rectangle(
    bowlSize.x + bowlSize.width / 2,
    bowlSize.y + bowlSize.height + 100 / 2 - 5 - PINK_BORDER_WID,
    bowlSize.width,
    100,
    {
      isStatic: true,
      friction: 1,
    }
  );

  const leftWall = Matter.Bodies.rectangle(
    bowlSize.x + PINK_BORDER_WID / 2,
    bowlSize.y + bowlSize.height / 2,
    PINK_BORDER_WID + 7,
    bowlSize.height,
    {
      isStatic: true,
      friction: 1,
    }
  );
  const rightWall = Matter.Bodies.rectangle(
    bowlSize.x + bowlSize.width - PINK_BORDER_WID / 2,
    bowlSize.y + bowlSize.height / 2,
    PINK_BORDER_WID,
    bowlSize.height,
    {
      isStatic: true,
      friction: 1,
    }
  );
  Matter.World.add(gameEntities.physics.world, [
    bottomWall,
    leftWall,
    rightWall,
  ]);

  // gameEntities.leftWall = {
  //   body: leftWall,
  //   size: [PINK_BORDER_WID + 7, bowlSize.height],
  //   renderer: Stick,
  // };
  // gameEntities.rightWall = {
  //   body: rightWall,
  //   size: [PINK_BORDER_WID, bowlSize.height],
  //   renderer: Stick,
  // };
  // gameEntities.bottomWall = {
  //   body: bottomWall,
  //   size: [bowlSize.width, 100],
  //   renderer: Stick,
  // };
};
