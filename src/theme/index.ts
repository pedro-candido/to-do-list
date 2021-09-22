import { DefaultTheme } from "styled-components";

export const colors = {
  background: "#f6f6f6",
  primary: {
    main: {
      color: "#335BA8",
      contrastColor: "#fff",
    },
  },
};

const theme: DefaultTheme = {
  colors,
  borderRadius: "5px",
  fontFamily: "'Roboto Condensed'",
};

export default theme;
