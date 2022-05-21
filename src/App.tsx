/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css, jsx } from "@emotion/react";
import { MAX_HEIGHT, MAX_WIDTH, responsive } from "./styles/mixins";
import Matter from "matter-js";
import useDimensions from "use-element-dimensions";
import { useRef } from "react";
import { runAddThreeWalls } from "./runAddThreeWalls";
import { runAddBalls } from "./runAddBalls";
import { useEffect } from "react";
import { GameEngine } from "react-game-engine";
import { useUpdateEngineTick } from "./useUpdateEngineTick";
import { runAddClaw } from "./runAddClaw";
import { useGamehandlerCbs } from "./useGamehandlerCbs";
import { useControlClawTick } from "./useControlClawTick";
import { useClawMoveDownTick } from "./useClawMoveDownTick";
import { useStickRotateTick } from "./useStickRotateTick";
import { useStickMoveUp } from "./useStickMoveUp";
import { useDecideColorTick } from "./useDecideColorTick";
import { useSetCollideTick } from "./useSetCollideTick";
import { View, StyleSheet, Platform, Dimensions, Button } from "react-native";
import { colors } from "./styles/variables";
import GameHandler from "./GameHandler";
import { HandlerView } from "./HandlerView";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

Matter.Common.isElement = () => false;

export const styles = StyleSheet.create({
  coverUpClaw: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: responsive.vertical(102),
    backgroundColor: colors.blue3,
    zIndex: 2000,
    borderRadius: 10,
    // backgroundColor: 'black',
  },
  gameHandler: {
    position: "absolute",
    bottom: responsive.vertical(120),
    width: responsive.vertical(150),
    height: responsive.vertical(100),
    zIndex: 900,
    // backgroundColor: 'green',
  },
  garbBtn: {
    position: "absolute",
    bottom: responsive.vertical(75),
    alignSelf: "center",
    height: responsive.vertical(34),
    width: responsive.horizontal(117),
    display: "flex",
    flex: 1,
    zIndex: 900,
  },
});

const cssBtnColor = css`
            display: flex;
            flex: 1;
            .aws-btn--visible {
              flex: 1;
            }
            .aws-btn {
              --button-primary-color: ${colors.pink2};
              --button-primary-color-hover: ${colors.pink4};
              --button-primary-color-dark: : ${colors.pink3};
              --button-primary-color-active: ${colors.pink4};
            }
          `;

function initEntities() {
  const engine = Matter.Engine.create();
  const world = engine.world;
  world.gravity.y = 1;
  let entities = {
    lastEngineUpdateTime: new Date().getTime(),
    physics: { engine, world },
    bowlSize: {},
    balls: [],
    inited: false,
  };
  return entities;
}
let gameEntities = initEntities();

const cssbox = css`
  position: absolute;
  top: ${responsive.vertical(102)}px;
  width: 300px;
  height: 400px;
  background-color: #fff;
  border-radius: 28px;
  border-width: ${responsive.horizontal(12)}px;
  border-color: #ff799f;
`;

function App() {
  const gameEngineRef = useRef(null);
  const [bowlSize, onLayoutBowl] = useDimensions();
  useEffect(() => {
    if (bowlSize.x === 0) {
      return;
    }
    console.log("b", bowlSize);
    gameEntities.bowlSize = bowlSize;
    runAddThreeWalls({ bowlSize, gameEntities });
    runAddBalls({ bowlSize, gameEntities });
    runAddClaw({ bowlSize, gameEntities });
    // runAddClaw({ bowlSize, gameEntities });
    gameEntities.inited = true;

    return () => {
      Matter.World.clear(gameEntities.physics.engine.world, false);
      Matter.Engine.clear(gameEntities.physics.engine);
      gameEntities = initEntities();
    };
  }, [bowlSize]);
  const [buttonPressed, setButtonPressed] = useState(false);
  const [clawMovedDown, setClawMovedDown] = useState(false);
  const [clawMovedUp, setClawMovedUp] = useState();
  const [resultDecided, setresultDecided] = useState(false);

  const updateEngineTick = useUpdateEngineTick({ clawMovedUp });
  const [direction, gameHandlerHandlers] = useGamehandlerCbs();

  const controlClawTick = useControlClawTick(
    direction,
    bowlSize,
    buttonPressed
  );
  const setCollideTick = useSetCollideTick(buttonPressed);
  const onPressGrab = () => setButtonPressed(true);

  const clawMoveDownTick = useClawMoveDownTick(
    buttonPressed,
    clawMovedDown,
    setClawMovedDown
  );

  const stickRotateTick = useStickRotateTick(clawMovedDown);

  const stickMoveUp = useStickMoveUp({ clawMovedDown, setClawMovedUp });

  console.log("clawMovedDown", clawMovedDown);
  console.log("clawMovedUp", clawMovedUp);

  const decideColor = useDecideColorTick({
    clawMovedUp,
    resultDecided,
    setresultDecided,
    colorDecideCb: () => {},
    gameEngineRef,
  });

  return (
    <div
      css={css`
        width: 100%;
        max-width: ${MAX_WIDTH}px;
        max-height: ${MAX_HEIGHT}px;
        height: 100%;
        background-color: #8deff7;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        border-radius: 10px;
        /* border: 2px solid white; */
      `}
    >
      <div css={cssbox} ref={onLayoutBowl} />
      <GameEngine
        style={{
          width: MAX_WIDTH,
          height: MAX_HEIGHT,
        }}
        systems={[
          updateEngineTick,
          controlClawTick,
          setCollideTick,
          clawMoveDownTick,
          stickRotateTick,
          stickMoveUp,
          decideColor,
          // this.DecideResultAndColor,
          // this.MoveUp,
        ]}
        entities={gameEntities}
        ref={gameEngineRef}
      />
      <View style={styles.coverUpClaw} />

      <View style={styles.garbBtn}>
        <div css={cssBtnColor}>
          <AwesomeButton
            type="primary"
            onPress={onPressGrab}

            // borderRadius={responsive.vertical(20)}
            // backgroundColor={colors.pink2}
            // backgroundDarker={colors.pink3}
          >
            Grab
          </AwesomeButton>
        </div>
      </View>

      <GameHandler {...gameHandlerHandlers} style={styles.gameHandler}>
        <HandlerView direction={direction} />
      </GameHandler>
    </div>
  );
}

export default App;
