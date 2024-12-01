import { Text, VStack } from "@chakra-ui/react";
const parser = require("../../script/parser");

const Card6 = ({ drawData }) => {
  return (
    <VStack
      align="center"
      justify="center"
      spacing="1rem"
      bgImage={parser.get_random_element(
        ["static/compress/v2bg0.webp", "static/dark/v2bg6.webp"],
        drawData.members
      )}
      bgBlendMode={"multiply"}
      bgRepeat="no-repeat"
      bgSize="cover"
      w="100%"
      h="78vh"
      bgColor="#6f0cbb"
      borderRadius="1rem"
      p="1rem"
      // borderColor="#fcea2b"
      // errorBorderColor="red.300"
      border="2px solid #fcea2b"
      // animation={zoomAnimation}
    >
      <Text
        color="white"
        fontSize="4xl"
        align="center"
        fontWeight={"600"}
        style={{
          textShadow:
            "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
        }}
      >
        The story of
      </Text>
      <br />
      <Text
        pl="1rem"
        pr="1rem"
        backgroundColor="LightSalmon"
        fontSize="4xl"
        align="center"
        fontWeight="bold"
        bgColor="#fcea2b"
        textAlign="center"
        color="#210934"
      >
        {/* {console.log("d", drawData)} */}
        {drawData.members[0]}
      </Text>
      <Text
        color="white"
        fontSize="4xl"
        align="center"
        fontWeight={"600"}
        style={{
          textShadow:
            "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
        }}
      >
        &{" "}
      </Text>
      <Text
        pl="1rem"
        pr="1rem"
        bgColor="#fcea2b"
        textAlign="center"
        color="#210934"
        fontSize="4xl"
        align="center"
        fontWeight="bold"
      >
        {drawData.members[1]}
      </Text>
      <br />
      <Text
        color="white"
        fontSize="4xl"
        align="center"
        fontWeight={"600"}
        style={{
          textShadow:
            "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
        }}
      >
        in 2022
      </Text>
    </VStack>
  );
};

export default Card6;
