import React, { useCallback, useRef, useState } from "react";
import {
  Box,
  Button,
  Text,
  HStack,
  Image,
  IconButton,
  Spinner,
  Center,
} from "@chakra-ui/react";
import { HiShare } from "react-icons/hi";
import { IoClose, IoCaretForward, IoCaretBack } from "react-icons/io5";

import Stories from "react-insta-stories";

import MonthlyGraph from "./charts/monthly";
import Card0 from "./charts/Welcome2";
import GCard0 from "./charts/g-Welcome2";
import Card1 from "./charts/TotalChat";
import WordCloud from "./charts/wordcloud";
import CountPie from "./charts/CountPie";
import Card5 from "./charts/emoji";
import HourlyGraph from "./charts/time";
import NoTalk from "./charts/cold";
import Card9 from "./charts/MostActive";

import ThankYou from "./charts/ThankCard";
import Welcome from "./charts/Welcome";

import * as htmlToImage from "html-to-image";
import GridStats from "./charts/GridStats";

const Dashboard = ({ drawData, isDemo }) => {
  const [isShared, setIsShared] = useState(false);
  const [storyIndex, setStoryIndex] = useState(0);

  const ref = useRef();
  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return;
    }
    setIsShared(true);
    htmlToImage
      .toBlob(document.body)
      .then((dataUrl) => {
        const file = new File([dataUrl], "share.png", { type: dataUrl.type });
        // console.log("file", file);
        // const link = document.createElement("a");
        // link.download = "my-image-name.png";
        // link.href = dataUrl;
        // link.click();
        if (navigator.canShare && navigator.canShare({ files: [file] })) {
          navigator
            .share({
              title: "OurChatStory",
              text: "Look at our #WhatsAppWrapped. I made it using OurChatStory.co!",
              files: [file],
            })
            .then(() =>
              console.log("Share was successful.")
            )
            .catch((error) => console.log(error));
          setIsShared(false);
        } else console.log("no share support");
      })
      .catch((err) => {
        console.log(err);
        setIsShared(false);
      });
  }, [ref]);
  <></>
  const pStories = [
    {
      content: (props) => <Welcome drawData={drawData} />,
    },
    {
      content: (props) => <Card0 drawData={drawData} />,
    },
    {
      content: (props) => <Card1 drawData={drawData} />,
    },
    {
      content: (props) => <GridStats drawData={drawData} />,
    },
    {
      content: (props) => <Card9 drawData={drawData} />,
    },
    {
      content: (props) => (
        <MonthlyGraph drawData={drawData} isShared={isShared} />
      ),
    },
    {
      content: (props) => (
        <HourlyGraph drawData={drawData} isShared={isShared} />
      ),
    },
    {
      content: (props) => <NoTalk drawData={drawData} />,
    },
    {
      content: (props) => <WordCloud drawData={drawData} />,
    },
    {
      content: (props) => <CountPie drawData={drawData} />,
    },
    {
      content: (props) => <Card5 drawData={drawData} />,
    },
    {
      content: (props) => <ThankYou drawData={drawData} />,
    },
  ];
  const gStories = [
    {
      content: (props) => <Welcome drawData={drawData} />,
    },
    // {
    //   content: (props) => <GCard0 drawData={drawData} />,
    // },
    {
      content: (props) => <Card1 drawData={drawData} />,
    },
    {
      content: (props) => <GridStats drawData={drawData} />,
    },
    {
      content: (props) => <Card9 drawData={drawData} />,
    },
    {
      content: (props) => <MonthlyGraph drawData={drawData} />,
    },

    {
      content: (props) => <HourlyGraph drawData={drawData} />,
    },
    {
      content: (props) => <NoTalk drawData={drawData} />,
    },
    {
      content: (props) => <WordCloud drawData={drawData} />,
    },
    {
      content: (props) => <CountPie drawData={drawData} />,
    },
    {
      content: (props) => <Card5 drawData={drawData} />,
    },
    {
      content: (props) => <ThankYou drawData={drawData} />,
    },
  ];

  const stories = drawData.group ? gStories : pStories;
  return (
    <Box>
      <Box>

        <Box
          bgColor="#111111">
          <Center>

            {window.innerWidth > 500 ? (
              <Stories
                currentIndex={storyIndex}
                stories={stories}
                defaultInterval={20000}
                height="95vh"
                onAllStoriesEnd={() => {
                  console.log("PAYYYYY USSSSSS");
                }}
                // on story change
                onStoryChange={(s, st) => {
                  console.log("story change", s, st);
                  setStoryIndex(s);
                }}
                preventDefault={false}
                keyboardNavigation={true}
              />)
              : (
                <Stories
                  currentIndex={storyIndex}
                  stories={stories}
                  defaultInterval={20000}
                  height="95vh"
                  width="97vw"
                  onAllStoriesEnd={() => {
                    console.log("PAYYYYY USSSSSS");
                  }}
                  preventDefault={false}
                  keyboardNavigation={true}
                />
              )}

          </Center>

          <Center>

            <HStack
              h="5vh"
              position="absolute"
              spacing="0.5rem"
              p="1rem"
              align="center"
              bottom="15vh"
            >
              <Image
                boxSize="3vh"
                src="static/compress/logo2.webp"
                alt="OurChatStory"
                style={{ imageRendering: "crisp-edges" }}
              />
              <Text
                align="center"
                color="white"
                fontSize="xs"
                style={{
                  textShadow:
                    "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
                }}
              >
                Made using OurChatStory.co
              </Text>
            </HStack>
          </Center>
        </Box>
        <IconButton
          aria-label="Close"
          icon={<IoClose size="1.5em" opacity={0.8} color="#555555" />}
          variant="none"
          colorScheme="transparent"
          onClick={() => {
            window.location.reload(false);
          }}
          position="absolute"
          top="2vh"
          right="1vw"
          zIndex={10003}
        />
        {storyIndex !== stories.length - 1 ? (
          <>
            <IconButton
              aria-label="Next"
              icon={<IoCaretForward size="1.5em" color="#cccccc" />}
              variant="none"
              colorScheme="transparent"
              onClick={() => {
                setStoryIndex(storyIndex + 1);
              }}
              position="absolute"
              bottom="50vh"
              right="0.5vw"
              zIndex={10000}
              opacity={0.3}
            />
            <Box
              position="absolute"
              top="0"
              right="0"
              zIndex={10001}
              height="100vh"
              width="50vw"
              bgColor="transparent"
              onClick={() => {
                setStoryIndex(storyIndex + 1);
              }}
            />
          </>
        ) : (
          ""
        )}
        {storyIndex !== 0 ? (
          <>
            <IconButton
              aria-label="Prev"
              icon={<IoCaretBack size="1.5em" color="#cccccc" />}
              variant="none"
              colorScheme="transparent"
              onClick={() => {
                setStoryIndex(storyIndex - 1);
              }}
              position="absolute"
              bottom="50vh"
              left="0.5vw"
              zIndex={10000}
              opacity={0.3}
            />
            <Box
              position="absolute"
              top="0"
              left="0"
              zIndex={10001}
              height="100vh"
              width="50vw"
              bgColor="transparent"
              onClick={() => {
                setStoryIndex(storyIndex - 1);
              }}
            />
          </>
        ) : (
          ""
        )}

      </Box>
      <Box
        // pl="0.5rem"
        // pr="0.5rem"
        bgColor={"black"}
      >

        {isDemo ? (
          <Button
            w="100%"
            h="5vh"
            onClick={() => {
              window.location.reload(false);
            }}
            position="sticky"
            bottom="0vh"
            zIndex={10003}
            colorScheme="primary"
            borderRadius={"0"}
          >
            Click here to make your own wrap
          </Button>
        ) : navigator.canShare ? (
          <Button
            rightIcon={isShared ? <Spinner color="black" /> : <HiShare />}
            w="100%"
            h="5vh"
            onClick={onButtonClick}
            position="sticky"
            bottom="0vh"
            zIndex={10003}
            borderRadius={"0"}
            bgColor="white"
            _hover={{ bgColor: "white" }}
            _active={{ bgColor: "white" }}
          >
            Share
          </Button>
        ) : (
          ""
        )}
      </Box>
    </Box>
  );
};

export default Dashboard;
