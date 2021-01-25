import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
  ThemeProviderProps,
  NoSsr,
  CssBaseline,
} from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#35C393",
    },
    secondary: {
      main: "#927BBF",
    },
    text: {
      primary: "#DFE7FF",
    },
    background: {
      default: "#2F3D62",
    },
  },
  typography: {
    fontFamily: '"Lato", "Helvetica", "Arial", sans-serif',
    h4: {
      fontSize: "2rem",
    },
  },
  spacing: 4,
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          height: "100%",
          background:
            "radial-gradient(114.28% 114.28% at 50% 10.88%, #324376 0%, #1E222D 100%)",
            backgroundColor: "transparent"
        },
        html: {
          height: "100%",
        },
        "#root": {
          height: "100%",
        },
      },
    },
  },
});

const ThemeProvider = ({ children }: Omit<ThemeProviderProps, "theme">) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline>
      <NoSsr>{children}</NoSsr>
    </CssBaseline>
  </MuiThemeProvider>
);

export default ThemeProvider;
