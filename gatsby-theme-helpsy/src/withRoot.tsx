import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { Global, css } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";
import CssBaseline from "@material-ui/core/CssBaseline";
import { StylesProvider } from "@material-ui/styles";
// @ts-ignore
import getPageContext from "./getPageContext";
import { COMBINED_THEME } from "./themes";

const styles = css`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background-color: #eee;
    font-family: "Lato", sans-serif;
    overflow-x: hidden;
    color: rgb(14, 28, 43);
  }

  a {
    outline: 0;
    text-decoration: none;
    transition: 0.7s;
    color: inherit;
  }
`;

function withRoot(Component: any) {
  class WithRoot extends React.Component {
    muiPageContext: any | undefined;

    constructor(props: any) {
      super(props);
      this.muiPageContext = getPageContext();
    }

    componentDidMount() {
      // Remove the server-side injected CSS.
      const jssStyles = document.querySelector("#jss-server-side");
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }

    render() {
      return (
        <StylesProvider
          generateClassName={this.muiPageContext.generateClassName}
        >
          {/* MuiThemeProvider makes the theme available down the React
              tree thanks to React context. */}
          <>
            <MuiThemeProvider theme={this.muiPageContext.theme}>
              {(() => {
                return (
                  // @ts-ignore
                  <>
                    <CssBaseline />
                    <ThemeProvider theme={COMBINED_THEME}>
                      <Component {...this.props} />
                    </ThemeProvider>
                  </>
                );
              })()}
            </MuiThemeProvider>
            <Global styles={styles} />
          </>
        </StylesProvider>
      );
    }
  }

  return WithRoot;
}

export default withRoot;
