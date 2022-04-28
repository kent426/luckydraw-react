import { useState, useCallback } from "react";
export const useGamehandlerCbs = () => {
  const [direction, setDirection] = useState("middle");
  const setLeft = useCallback(() => {
    setDirection("left");
  }, []);
  const setRight = useCallback(() => {
    setDirection("right");
  }, []);
  const setMiddle = useCallback(() => {
    setDirection("middle");
  }, []);
  return [direction, { setLeft, setRight, setMiddle }];
};
