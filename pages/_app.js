// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";

// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "hsl(228, 45%, 44%)"
  },
    darkBlue: "#262E38",
lightGrey: "#969FAD",
mediumGray: "#7C8798",
orange: "#FC7614",
pureWhite: "#FFFFFF",
veryDarkBlue: "#131518",
  
};

const theme = extendTheme({ colors });

// 3. Pass the `theme` prop to the `ChakraProvider`
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
