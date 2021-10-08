import { DefaultTheme } from "styled-components";

export const colors = {
  background: "#f6f6f6",
  textColor: "#0c0c0c",
  primary: {
    main: {
      color: "#335BA8",
      contrastColor: "#fff",
    },
  },
};

export const fonts = {
  title: "1.3rem",
  description: "0.9rem",
  inputText: "1.2rem",
};

const theme: DefaultTheme = {
  colors,
  fonts,
  borderRadius: "5px",
  fontFamily: "Roboto Condensed",
};

export default theme;
