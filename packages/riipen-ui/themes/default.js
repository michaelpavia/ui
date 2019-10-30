export default {
  breakpoints: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920
  },
  palette: {
    background: {
      default: "#fafafa"
    },
    common: {
      black: "#000",
      white: "#fff"
    },
    divider: "#ddd",
    negative: {
      main: "#e95353"
    },
    positive: {
      main: "#4cc88d"
    },
    primary: {
      main: "#3f51b5"
    },
    secondary: {
      main: "#f58632"
    },
    tertiary: {
      main: "#3caabb"
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)"
    }
  },
  shape: {
    borderRadius: {
      sm: "3px",
      md: "4px",
      lg: "6px",
      xl: "8px"
    }
  },
  spacing: factor => 5 * factor,
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375
    },
    easing: {
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
    }
  },
  typography: {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontWeight: {
      bold: 700,
      light: 300,
      medium: 500,
      regular: 400
    },
    h1: {
      fontFamily: "Roboto, Helvetica, Arial, sans-serif",
      fontWeight: 300,
      fontSize: "40px",
      lineHeight: 1,
      letterSpacing: "-0.01562em"
    },
    h2: {
      fontFamily: "Roboto, Helvetica, Arial, sans-serif",
      fontWeight: 300,
      fontSize: "25px",
      lineHeight: 1,
      letterSpacing: "-0.00833em"
    },
    h3: {
      fontFamily: "Roboto, Helvetica, Arial, sans-serif",
      fontWeight: 300,
      fontSize: "20px",
      lineHeight: 1.04,
      letterSpacing: "0em"
    },
    h4: {
      fontFamily: "Roboto, Helvetica, Arial, sans-serif",
      fontWeight: 300,
      fontSize: "14px",
      lineHeight: 1.17,
      letterSpacing: "-0.00735em"
    },
    h5: {
      fontFamily: "Roboto, Helvetica, Arial, sans-serif",
      fontWeight: 300,
      fontSize: "10px",
      lineHeight: 1.33,
      letterSpacing: "0rem"
    }
  }
};
