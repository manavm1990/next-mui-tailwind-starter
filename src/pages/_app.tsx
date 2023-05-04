import "@/styles/globals.css";
import { ThemeProvider } from "@emotion/react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import CssBaseline from "@mui/material/CssBaseline";
import { StyledEngineProvider, createTheme } from "@mui/material/styles";
import type { AppProps } from "next/app";
import { useMemo } from "react";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const theme = useMemo(() => {
    // Create theme only once during initial render
    if (typeof window !== "undefined") {
      const rootElement = document.getElementById("__next");

      return createTheme({
        components: {
          MuiPopover: {
            defaultProps: {
              container: rootElement,
            },
          },
          MuiPopper: {
            defaultProps: {
              container: rootElement,
            },
          },
        },
      });
    }
    return createTheme();
  }, []);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
