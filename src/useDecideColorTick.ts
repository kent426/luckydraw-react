import { useCallback } from "react";
import { responsive } from "./styles/mixins";
import { priceCatFUN } from "./params";

export const useDecideColorTick = ({
  clawMovedUp,
  setresultDecided,
  resultDecided,
  colorDecideCb,
  gameEngineRef,
}: any) => {
  return useCallback(
    (entities) => {
      // console.log('entities', entities);
      if (clawMovedUp && !resultDecided) {
        setTimeout(() => {
          const selectedArr = entities.balls.filter(
            (ball: { oodIsSelect: any }) => ball.oodIsSelect
          );
          console.log("selectedArr", selectedArr);
          if (selectedArr.length === 0) {
            console.log("no ball");
            colorDecideCb(null);
          } else {
            const selectedBall = selectedArr[0];
            const isPicked =
              Math.abs(
                selectedBall.position.y - entities.clawLeftStick.body.position.y
              ) < responsive.vertical(60);
            console.log(
              "price dis",
              selectedBall.position.y - entities.clawLeftStick.body.position.y
            );
            const { color } = selectedBall;
            const priceCat = priceCatFUN(color);
            if (isPicked) {
              colorDecideCb(priceCat);
            } else {
              colorDecideCb(null);
            }

            // console.log('isPicked', isPicked);
            // console.log('priceCat', priceCat);
          }
          gameEngineRef.current.stop();

          setresultDecided(true);
        });
        return entities;
      }
      return entities;
    },
    [clawMovedUp, colorDecideCb, gameEngineRef, resultDecided, setresultDecided]
  );
};
