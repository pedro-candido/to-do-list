// import original module declaration
import "styled-components";

// and extend it
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      primary: {
        main: {
          color: string;
          contrastColor: string;
        };
      };
    };
    fontFamily: string;
    borderRadius: string;
  }
}
