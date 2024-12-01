import {
  Heading,
  Text,
  Grid,
  GridItem,
  VStack,
  Spacer,
  HStack,
} from "@chakra-ui/react";
const parser = require("../../script/parser");

const GridStats = ({ drawData }) => {
  return (
    <VStack
      spacing="0.5rem"
      align="center"
      justify="center"
      bgImage={parser.get_random_element(["static/dark/v2bg2.webp", "/static/dark/v2bg16.webp"], drawData.members)}
      bgRepeat="no-repeat"
      bgSize="cover"
      // backgroundSize="120%"
      // p="2rem"
      // height="100vh"
      // w="100vw"
      w="100%"
      h="78vh"
      bgColor="primary.800"
      borderRadius="1rem"
      border="2px solid #f78901"
      pt="1rem"
      pb="2rem"
      style={{
        textShadow:
          "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
      }}
    >
      <Heading size="xl" color="white" textAlign="center"
        pl="1rem"
        pr="1rem"
      >
        Few Cool Numbers
      </Heading>

      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap="1rem"
        height={"80%"}
        p="1rem"
      >
        <GridItem
          colSpan={2}
          border="1px solid #ffffff80"
          p="1rem"
          borderRadius={"6px"}
        >
          <VStack spacing={"0rem"} align="center" height="100%">
            <Spacer />
            <HStack align="baseline" spacing={"0.25rem"}>
              <Text
                fontSize={["4xl", "4xl", "5xl"]}
                fontWeight="800"
                textAlign={"center"}
              >
                {parser.no_of_days_talked(drawData.no_talk_string)}
              </Text>
              <Text>d</Text>
            </HStack>
            <Text
              fontSize={["md", "md", "lg"]}
              fontWeight="700"
              textAlign={"center"}
            >
              interacted
              <br />
              in total
            </Text>
            {parser.no_of_days_talked(drawData.no_talk_string) > 330 ? (
              <>
                <Spacer />
                <Text
                  fontSize={["sm", "sm", "3xs", ""]}
                  fontWeight="300"
                  textAlign={"center"}
                  textColor="purple.100"
                >
                  WOW! Start dating maybe? 👀
                </Text>
              </>
            ) : (
              ""
            )}

            <Spacer />
          </VStack>
        </GridItem>
        <GridItem
          colSpan={2}
          border="1px solid #ffffff80"
          p="1rem"
          borderRadius={"6px"}
        >
          <VStack spacing={"0rem"} align="center" height="100%">
            <Spacer />

            <HStack align="baseline" spacing={"0.25rem"}>
              <Text
                fontSize={["4xl", "4xl", "5xl"]}
                fontWeight="800"
                textAlign={"center"}
              >
                {drawData.total_no_of_minutes > 60
                  ? parseInt(drawData.total_no_of_minutes / 60)
                  : drawData.total_no_of_minutes}
              </Text>
              <Text>{drawData.total_no_of_minutes > 60 ? "h" : "m"}</Text>
            </HStack>
            <Text
              fontSize={["md", "md", "md"]}
              fontWeight="700"
              textAlign={"center"}
            >
              spent talking <br></br>together
            </Text>

            <Spacer />
          </VStack>
        </GridItem>
        <GridItem
          colSpan={2}
          border="1px solid #ffffff80"
          p="1rem"
          borderRadius={"6px"}
        >
          <VStack spacing={"0rem"} align="center" height="100%">
            <Spacer />

            <HStack align="baseline" spacing={"0.25rem"}>
              <Text
                fontSize={["4xl", "4xl", "5xl"]}
                fontWeight="800"
                textAlign={"center"}
              >
                {
                drawData.longest_session.streak_duration > 120
                ? parseInt(drawData.longest_session.streak_duration / 60)
                : drawData.longest_session.streak_duration}
              </Text>
              <Text>{drawData.longest_session.streak_duration > 120 ? "h" : "m"}</Text>
            </HStack>
            <Text
              fontSize={["md", "md", "lg"]}
              fontWeight="700"
              textAlign={"center"}
            >
              longest <br /> at a stretch
            </Text>
            {drawData.longest_session.streak_duration > 200 ? (
              <>
                <Spacer />
                <Text
                  fontSize={["sm", "sm", "3xs", ""]}
                  fontWeight="300"
                  textAlign={"center"}
                  textColor="purple.100"
                >
                  Thats a WORLD RECORD!! ☠️
                </Text>
              </>
            ) : (
              ""
            )}
            <Spacer />
          </VStack>
        </GridItem>
        <GridItem
          colSpan={2}
          border="1px solid #ffffff80"
          p="1rem"
          borderRadius={"6px"}
        >
          <VStack spacing={"0rem"} align="center" height="100%">
            <Spacer />

            <HStack align="baseline" spacing={"0.25rem"}>
              <Text
                fontSize={["4xl", "4xl", "5xl"]}
                fontWeight="800"
                textAlign={"center"}
              >
                {Math.round(drawData.longest_session.average_reply_time * 10) /
                  10}
              </Text>
              <Text>s</Text>
            </HStack>

            <Text
              fontSize={["sm", "sm", "sm"]}
              fontWeight="700"
              textAlign={"center"}
            >
              reply time when<br></br> properly talking
            </Text>
            {Math.round(drawData.longest_session.average_reply_time * 10) /
              10 < 5 ? (
              <>
                {/* <Spacer /> */}
                <Text
                  fontSize={["3xs", "3xs", "3xs", ""]}
                  fontWeight="300"
                  textAlign={"center"}
                  textColor="purple.100"
                >
                  Thats the top <br></br>1% of all users globally! 🤯
                </Text>
              </>
            ) : (
              ""
            )}
            <Spacer />
          </VStack>
        </GridItem>
      </Grid>
      {/* <Heading size="md" color="black" textAlign="center" p="1rem">
          So these are our most used Emojis
        </Heading> */}
    </VStack>
  );
};

export default GridStats;
