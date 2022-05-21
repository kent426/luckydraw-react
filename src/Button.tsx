/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { colors } from "./styles/variables";
import { AwesomeButton } from "react-awesome-button";

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

export function Button({ onPress, text = "Grab" }) {
  return (
    <div css={cssBtnColor}>
      <AwesomeButton type="primary" onPress={onPress}>
        {text}
      </AwesomeButton>
    </div>
  );
}
