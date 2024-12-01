import { Text, VStack } from "@chakra-ui/react";
const parser = require("../../script/parser");
const Card6 = ({ drawData }) => {
  return (
    <VStack
      spacing="2rem"
      align="center"
      justify="center"
      backgroundImage="/static/compress/tbg1.webp"
      bgBlendMode={"lighten"}
      bgRepeat="no-repeat"
      bgSize="cover"
      // backgroundPosition="center"
      // backgroundRepeat="no-repeat"
      // backgroundSize="120%"
      w="100%"
      h="78vh"
      bgColor="#f4e9e1"
      borderRadius="1rem"
      // pt="1rem"
      // pb="1rem"
      p="1rem"
    >
      <Text color="black" fontSize="4xl" align="center" fontWeight="bold">
        Let&apos;s {parser.get_random_element(["experience", "see", "go through"], drawData.members)} the chat story of {drawData.group ? "a group of" : "two"} {parser.get_random_element(["amazing", "coolest", ""], drawData.members)} people
      </Text>

      {/* <Text color="black" fontSize="3xl" align="center">
        ------------------&gt;
      </Text> */}
    </VStack>
  );
};

export default Card6;
