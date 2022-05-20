import { colors } from "./styles/variables";
import { responsive, OFFSET_FOR_CENTERING } from "./styles/mixins";
import Matter from "matter-js";
import {
  BALL_COLORS,
  collisionCategory,
  CLAWTOP_OFFSET,
  CLAWBOX_WID,
  CLAWBOX_HEI,
  STICK_WID,
  STICK_HEIGHT,
} from "./params";
// import TopClaw from './TopClaw';
import Stick from "./Stick";
import TopClaw from "./TopClaw";

export const runAddClaw = ({ bowlSize, gameEntities }: any) => {
  makeClawBox({ bowlSize, gameEntities });
  const leftClawBody = makeLeftClaw({ bowlSize, gameEntities });

  makeMiddleClaw({ bowlSize, gameEntities });
  const rightClawBody = makeRightClaw({ bowlSize, gameEntities });
  Matter.World.add(gameEntities.physics.world, [leftClawBody, rightClawBody]);
};

const makeClawBox = ({ bowlSize, gameEntities }: any) => {
  const clawBoxBody = Matter.Bodies.rectangle(
    bowlSize.x + bowlSize.width / 2 - OFFSET_FOR_CENTERING,
    bowlSize.y + CLAWTOP_OFFSET + CLAWBOX_HEI / 2,
    CLAWBOX_WID,
    CLAWBOX_HEI
  );

  gameEntities.clawBox = {
    body: clawBoxBody,
    size: [CLAWBOX_WID, CLAWBOX_HEI],
    color: "transparent",
    renderer: TopClaw,
  };
};

const makeMiddleClaw = ({ bowlSize, gameEntities }: any) => {
  const clawMiddleStickBody = Matter.Bodies.rectangle(
    bowlSize.x +
      bowlSize.width / 2 -
      STICK_WID / 2 +
      responsive.horizontal(2) -
      OFFSET_FOR_CENTERING,
    bowlSize.y + CLAWBOX_HEI + CLAWTOP_OFFSET + STICK_HEIGHT / 2 - 200,
    STICK_WID,
    STICK_HEIGHT + 100 + 200
  );

  gameEntities.clawMiddleStick = {
    body: clawMiddleStickBody,
    size: [STICK_WID, STICK_HEIGHT + responsive.vertical(20) + 400],
    zIndex: 1400,
    color: "#515151",
    renderer: Stick,
    direction: 0,
  };

  return clawMiddleStickBody;
};

const makeRightClaw = ({ bowlSize, gameEntities }: any) => {
  const clawRightStickBody = Matter.Bodies.rectangle(
    bowlSize.x +
      bowlSize.width / 2 +
      CLAWBOX_WID / 2 -
      STICK_WID / 2 -
      responsive.horizontal(5) -
      OFFSET_FOR_CENTERING,
    bowlSize.y + CLAWBOX_HEI + CLAWTOP_OFFSET + STICK_HEIGHT / 2,
    STICK_WID,
    STICK_HEIGHT,
    {
      isStatic: true,
      friction: 1,
      collisionFilter: {
        // group: collisionCategory.CLAW,
        category: collisionCategory.CLAW,
        // eslint-disable-next-line no-bitwise
        mask: collisionCategory.CLAW | collisionCategory.SELECT,
      },
    }
  );
  // makeRightClaw.collisionCategory = {
  //   category: collisionCategory.CLAW,
  //   // eslint-disable-next-line no-bitwise
  //   mask: collisionCategory.CLAW | collisionCategory.SELECT,
  // };

  clawRightStickBody.angle = Math.PI * 0.09;

  gameEntities.clawRightStick = {
    body: clawRightStickBody,
    size: [STICK_WID, STICK_HEIGHT],
    color: "#515151",
    renderer: Stick,
    direction: 1,
  };

  return clawRightStickBody;
};

const makeLeftClaw = ({ bowlSize, gameEntities }: any) => {
  const clawLeftStickBody = Matter.Bodies.rectangle(
    bowlSize.x +
      bowlSize.width / 2 -
      CLAWBOX_WID / 2 +
      STICK_WID / 2 +
      responsive.horizontal(5) -
      OFFSET_FOR_CENTERING,
    bowlSize.y + CLAWBOX_HEI + CLAWTOP_OFFSET + STICK_HEIGHT / 2,
    STICK_WID,
    STICK_HEIGHT,
    {
      isStatic: true,
      friction: 1,
      collisionFilter: {
        category: collisionCategory.CLAW,
        // eslint-disable-next-line no-bitwise
        mask: collisionCategory.CLAW | collisionCategory.SELECT,
      },
    }
  );
  // clawLeftStickBody.collisionCategory = {
  //   category: collisionCategory.CLAW,
  //   // eslint-disable-next-line no-bitwise
  //   mask: collisionCategory.CLAW | collisionCategory.SELECT,
  // };
  clawLeftStickBody.angle = -Math.PI * 0.09;

  gameEntities.clawLeftStick = {
    body: clawLeftStickBody,
    size: [STICK_WID, STICK_HEIGHT],
    color: "#515151",
    renderer: Stick,
    direction: -1,
  };

  return clawLeftStickBody;
};
