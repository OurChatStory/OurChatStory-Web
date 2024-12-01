import { Text, VStack, keyframes } from "@chakra-ui/react";

const parser = require("../../script/parser");

const ZoomAnimation = keyframes`
    0% {
    background-size: 100% 100%;
  }
  50%{
    background-size: 150% 150%;
  }
  100% {
    background-size: 100% 100%;
  }
`;

const Card1 = ({ drawData }) => {
  const zoomAnimation = `${ZoomAnimation} 20s ease-in infinite alternate;`;

  return (
    <VStack
      spacing="2rem"
      align="center"
      justify="center"
      // p="1rem"
      // w="100vw"
      // h="100vh"
      // backgroundPosition="center"
      backgroundRepeat="no-repeat"
      bgBlendMode="multiply"
      bgImage={parser.get_random_element(["/static/dark/v2bg5.webp", "/static/dark/v2bg14.webp"], drawData.members)}
      w="100%"
      h="78vh"
      bgColor="pink"
      borderRadius="1rem"
      p="1.5rem"
      animation={zoomAnimation}
      border="2px solid #779132"
      style={{
        textShadow:
          "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
      }}
    >
      <Text mb="1rem" fontSize="4xl" align="center" fontWeight={"600"}>
        Let us tell you
      </Text>
      <Text fontSize="3xl" align="center" fontWeight={"600"}>
        Most of the <br />time it&apos;s
      </Text>
      <Text
        pl="1rem"
        pr="1rem"
        fontSize="4xl"
        align="center"
        fontWeight="800"
        backgroundColor="#779132"
        style={{
          textShadow:
            "none",
        }}
      >
        {" "}
        {drawData.who_texts_first}
      </Text>
      <Text mb="2rem" fontSize="4xl" align="center" fontWeight={"600"}>
        {" "}
        who texts first
      </Text>
    </VStack>
  );
};

export default Card1;
