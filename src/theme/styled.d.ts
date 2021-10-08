// import original module declaration
import "styled-components";

// and extend it
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      textColor: string;
      primary: {
        main: {
          color: string;
          contrastColor: string;
        };
      };
    };
    fonts: {
      title: string;
      description: string;
      inputText: string;
    };
    fontFamily: string;
    borderRadius: string;
  }
}
