import App from "next/app";
import React from "react";

import ThemeContext from "@riipen-ui/styles/ThemeContext";
import defaultTheme from "@riipen-ui/themes/default";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeContext.Provider value={defaultTheme}>
        <Component {...pageProps} />
      </ThemeContext.Provider>
    );
  }
}

export default MyApp;
