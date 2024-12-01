import { Text, VStack, Box, Image as CImage, keyframes } from "@chakra-ui/react";

import CountUp from "react-countup";

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
  const zoomAnimation = `${ZoomAnimation} 40s ease-in infinite alternate;`;

  // var end = 0;
  // const temp = drawData.monthly_chat_count.map(({ month, count }) => {
  //   end += count;
  // });
  return (
    <VStack
      spacing="1.5rem"
      align="center"
      justify="center"
      bgImage={parser.get_random_element(["/static/dark/v2bg14.webp", "/static/dark/v2bg3.webp"], drawData.members)}
      // bgBlendMode="overlay"
      // add blur to the background image
      // filter="blur(10px)"
      // backdropFilter="blur(70px) hue-rotate(90deg)"
      // bgRepeat="no-repeat"
      bgSize="cover"
      w="100%"
      h="78vh"
      bgColor="gray"
      borderRadius="1rem"
      p="1.5rem"
      pb="2rem"
      border="2px solid #3f9383"
      animation={zoomAnimation}

      style={{
        textShadow:
          "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
      }}
    >
      <Text align="center" as="b" fontSize="4xl">
        Y&apos;all sent a<br /> total of{" "}
      </Text>
      <Text
        fontSize="5xl"
        color="white"
        align="center"
        bgColor="#3f9383"
        fontWeight="bold"
        pl="1rem"
        pr="1rem"
        as="b"
        style={{
          textShadow:
            "none",
        }}
      >
        <CountUp
          end={drawData.total_no_of_chats}
          onEnd={({ countUpRef }) => {
            countUpRef = "a";
          }}
          duration={2}
        />
      </Text>
      <Text fontSize="3xl" align="center" fontWeight={600}>
        {" "}
        messages to each<br />other this year!!
      </Text>
      <Text fontSize="xl" align="center">
        That puts you into top{" "}
        <b style={{ textDecoration: "underline" }}>
          {parseFloat(drawData.top_percent * 100).toFixed(drawData.top_percent < 0.001 ? 4 : 2)}%
        </b><br />
        of texters in the world
      </Text>
    </VStack>
  );
};

export default Card1;
