import { Text, VStack, Box, Spacer, keyframes } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";

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
    <>
      {/* <div id="overlay"></div> */}
      <VStack
        align="center"
        justify="center"
        spacing="1rem"
        bgImage="static/compress/v2bg0.webp"
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
        {/* <Marquee
        gradient={true}
        speed={40}
        gradientColor={[155, 31, 232]}
        gradientWidth={30}
        pauseOnHover={true}
      >
        {[...Array(10)].map((i) => (
          <Box w="1rem" h="1rem" borderRadius="50%" bgColor="yellow"></Box>
        ))}
      </Marquee>
      <Spacer/> */}
        <Text
          fontSize="4xl"
          align="left"
          color="white"
          w={"100%"}
          fontWeight="600"
          textAlign="center"
        >
          Let&apos;s talk about
        </Text>
        <Text
          fontSize="4xl"
          align="left"
          // w={"100%"}
          pl="1rem"
          pr="1rem"
          fontWeight="800"
          bgColor="#fcea2b"
          textAlign="center"
          color="#210934"
          style={{
            textShadow: "none",
          }}
        >
          {drawData.members[0]}
        </Text>
        <Text
          fontSize="4xl"
          align="left"
          w={"100%"}
          fontWeight="800"
          color={"white"}
          textAlign="center"
        >
          &
        </Text>
        <Text
          fontSize="4xl"
          align="left"
          // w={"100%"}
          fontWeight="800"
          textAlign="center"
          bgColor="#fcea2b"
          color="#210934"
          pl="1rem"
          pr="1rem"
          style={{
            textShadow: "none",
          }}
        >
          {drawData.members[1]}
        </Text>
        <Text
          fontSize="4xl"
          align="left"
          color="white"
          w={"100%"}
          fontWeight="600"
          textAlign="center"
        >
          for example{" "}
        </Text>{" "}
      </VStack>
      {/* <style jsx>{`
        #overlay {
          position: absolute;
          width: 100%;
          height: 78vh;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 0;
        }
      `}</style> */}
    </>
  );
};

export default DummyIntro;
