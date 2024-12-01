import { ChakraProvider } from "@chakra-ui/react";
import App from "../components/app";
import theme from "../components/theme";
import ReactGA from 'react-ga';
ReactGA.initialize('G-8GG4ESYN0D');

export default function Home() {
  return (
    <div>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </div>
  );
}
