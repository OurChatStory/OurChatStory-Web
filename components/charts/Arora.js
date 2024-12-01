import { Text, VStack, Box, Spacer, keyframes } from "@chakra-ui/react";
const parser = require("../../script/parser");

const ZoomAnimation = keyframes`
  0% {
    background-position: 0 0;
  }
  50%{
    background-position: 100% 0;
  }
  100% {
    background-position: 0 0;
  }
`;

const DummyIntro = ({ drawData }) => {
  const zoomAnimation = `${ZoomAnimation} 40s ease-in infinite alternate;`;

  return (
    

      <VStack
        align="center"
        // justify="center"
        spacing="1rem"
        bgImage="static/dark/v2bg6.webp"
        bgBlendMode={"multiply"}
        bgRepeat="no-repeat"
        bgSize="cover"
        w="100%"
        h="78vh"
        bgColor="#6f0cbb"
        borderRadius="1rem"
        pt="1rem"
        pb="1rem"
        // borderColor="#fcea2b"
        // errorBorderColor="red.300"
        border="2px solid #fcea2b"
        animation={zoomAnimation}
        style={{
          textShadow:
            "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
        }}
      >
        <Text
          fontSize="4xl"
          align="left"
          color="white"
          w={"100%"}
          fontWeight="600"
          textAlign="center"
        >
         MAGIC ARORA
        </Text>
        {/* Write css */}

        <Text fontSize="2xl" align="left" color="white" w={"100%"}>
          Arora: {parser.getArora(drawData)}
        </Text>

      </VStack>

    
  );
};

export default DummyIntro;
