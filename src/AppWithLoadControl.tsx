/** @jsxImportSource @emotion/react */
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { css, jsx } from "@emotion/react";
import { MAX_HEIGHT, MAX_WIDTH } from "./styles/mixins";
import { SpinnerOverlay } from "./SpinnerOverlay";
import App from "./App";
import { useDebounce } from "use-hooks";
import { priceCatToColorFun } from "./params";

export const AppWithLoadControl = () => {
  const [reloading, setReloading] = useState(false);
  const [priceCat, setPriceCat] = useState(null);

  const colorDecideCb = useCallback((priceCat) => {
    setPriceCat(priceCat);
  }, []);

  const reloadCallBack = useCallback(() => {
    setReloading(true);
  }, []);

  const selectedColorCode = useMemo(
    () => priceCatToColorFun(priceCat),
    [priceCat]
  );

  console.log("priceCat");

  useEffect(() => {
    if (reloading) {
      const tr = setTimeout(() => setReloading(false), 300);

      return () => clearTimeout(tr);
    }
  }, [reloading]);

  if (reloading) {
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
        `}
      >
        <SpinnerOverlay />
      </div>
    );
  }

  return (
    <App
      reloadCallBack={reloadCallBack}
      colorDecideCb={colorDecideCb}
      selectedColorCode={selectedColorCode}
    />
  );
};
