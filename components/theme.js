import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      color: mode("gray.800", "whiteAlpha.900")(props),
      bg: mode("black", "black")(props),
    },
  }),
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const schemeTheme = extendTheme(
  withDefaultColorScheme({
    colorScheme: "primary",
  }),
  withDefaultColorScheme({
    colorScheme: "dark",
    components: ["Button"],
  })
);

const theme = extendTheme({
  ...schemeTheme,
  colors: {
    primary: {
      100: "#daf570",
      200: "#cef23f",
      300: "#c3ef0e",
      400: "#c2ee11",
      500: "#9bbf0d",
      600: "#6f8e0a",
      700: "#748f0a",
      800: "#3a4805",
      900: "#3a4805",
    },
    secondary: {
      100: "#f7f7f7",
      200: "#f05028",
      300: "#d7370f",
      400: "#d7370f",
      500: "#d7370f",
      600: "#5f1807",
      700: "#5f1807",
      800: "#5f1807",
      900: "#000000",
    },
    dark: {
      100: "#262626",
      200: "#262626",
      300: "#262626",
      400: "#262626",
      500: "#262626",
      600: "#262626",
      700: "#262626",
      800: "#262626",
      900: "#262626",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles,
  config,
});

export default theme;
