import { Global, css } from "@emotion/react";

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        html,
        body {
          margin: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        body {
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        a {
          color: inherit;
          text-decoration: none;
        }
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          box-sizing: inherit;
          font: inherit;
        }
      `}
    />
  );
};

export { GlobalStyle };
