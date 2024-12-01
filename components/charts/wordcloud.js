import {
  Heading,
  Image,
  VStack,
} from "@chakra-ui/react";

const Card3 = ({ drawData }) => {
  return (
    <VStack
      spacing="2rem"
      align="center"
      justify="center"
      p="1rem"
      // height="100vh" w="100vw" bg="black"
      w="100%"
      h="78vh"
      // bgColor="#448D76"
      bgColor="#000"
      borderRadius="1rem"
      pt="1rem"
      pb="1rem"
      border="2px"
    >
      <Heading pt="3rem"
      fontSize={["xl", "xl", "2xl", "2xl"]}
      
      textAlign="center" color="white">
        What do you talk about?
        </Heading>
      <Image
        src={"data:image/png;base64, " + drawData.word_cloud_base64}
        alt="Word Cloud"
        pb="4rem"
      />
    </VStack>
  );
};

export default Card3;
