/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { VscGithub } from "react-icons/vsc";

export const GitHubIcon = () => (
  <a
    href="https://github.com/kent426/luckydraw-react"
    target={"_blank"}
    css={css`
      position: fixed;
      top: 7px;
      right: 7px;
      background-color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      z-index: 20000;
    `}
    rel="noreferrer"
  >
    <VscGithub size={50}></VscGithub>
  </a>
);
