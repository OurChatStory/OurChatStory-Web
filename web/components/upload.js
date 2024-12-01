import React, { useState } from "react";
import {
  Box,
  Center,
  Spinner,
  Text,
  Stack,
  Heading,
  Button,
  VStack,
  HStack,
  IconButton,
  ListItem,
  OrderedList,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  Spacer,
  Divider,
  AspectRatio,
} from "@chakra-ui/react";
import { FileUploader } from "react-drag-drop-files";
import { BiDownload } from "react-icons/bi";

import axios from "axios";
import { API_URL } from "../constants";
import { IoClose } from "react-icons/io5";
import ReactGA from "react-ga";

const eventTracker = (
  category = "wrap",
  action = "make wrap",
  label = "successful"
) => {
  ReactGA.event({ category, action, label });
};

const sample_data = require("../data/sample-response");

const Upload = ({
  setShowRes,
  setData,
  setIsDemo,
  setShowUploader,
  showLoader,
  setShowLoader,
  deferredPrompt,
  isSuccessfulPWAInstall,
  setIsSuccessfulPWAInstall,
}) => {
  const [isUploading, setIsUploading] = useState(false);
  let isAndroid = /android/i.test(
    navigator.userAgent || navigator.vendor || window.opera
  );
  const isiOS =
    [
      "iPad Simulator",
      "iPhone Simulator",
      "iPod Simulator",
      "iPad",
      "iPhone",
      "iPod",
    ].includes(navigator.platform) ||
    // iPad on iOS 13 detection
    (navigator.userAgent.includes("Mac") && "ontouchend" in document);

  const handlePWAInstall = () => {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        setIsSuccessfulPWAInstall(true);
        console.log("User accepted the A2HS prompt");
      } else {
        setIsSuccessfulPWAInstall(false);
        console.log("User dismissed the A2HS prompt");
      }
      setDeferredPrompt(null);
    });
  };

  const [tabIndex, setTabIndex] = useState(isAndroid ? 0 : isiOS ? 1 : 2); // initial -> 0: Android, 1: iOS, 2: PC
  const handleFileUpload = (file) => {
    // console.log("zz", file);
    // console.log(file.name);
    // console.log(file.name.substring(file.name.length - 3));
    if (
      file.name.substring(file.name.length - 3) === "txt" ||
      file.name.substring(file.name.length - 3) === "zip"
    ) {
      const data = new FormData();
      data.append("file", file);
      // console.log("dd", data);
      setIsUploading(true);
      setShowLoader(true);
      axios
        .post(API_URL + "wrap", data, {
          // receive two parameter endpoint url ,form data
        })
        .then((res) => {
          setData(res.data);
          setIsDemo(false);
          setShowRes(true);
          eventTracker();
        })
        .catch((error) => {
          setIsUploading(false);
          setShowLoader(false);
          eventTracker("wrap", "make wrap", "failed");
          try {
            alert(
              typeof error.response.data.detail === "string"
                ? error.response.data.detail
                : "Connection failed. Try again! If it's still not working, please contact us via Twitter @ourchatstory."
            );
          } catch (error) {
            alert(
              "Connection failed. Try again! If it's still not working, please contact us via Twitter @ourchatstory."
            );
          }
        });
    } else {
      alert(
        "Please upload .txt or .zip files only. If it's still not working, please contact us via Twitter @ourchatstory."
      );
    }
  };
  return (
    <>
      <Box
        w="100vw"
        h="100vh"
        position="fixed"
        zIndex={100}
        bgColor="#00000080"
        onClick={() => {
          setShowUploader(false);
          // Enable Scroll
          document.body.style.overflow = "auto";
        }}
      />

      <VStack
        w="100vw"
        h="100vh"
        position="fixed"
        zIndex={101}
        onClick={() => {
          setShowUploader(false);
          // Enable Scroll
          document.body.style.overflow = "auto";
        }}
      >
        <Box
          bgColor="dark.500"
          m={{ base: "0.5rem", sm: "0.5rem", lg: "1rem" }}
          borderRadius="1rem"
          w={{ base: "90vw", sm: "90vw", lg: "50vw" }}
          top="5"
          pt="2rem"
          pr={["0.3rem", "0.6rem", "1rem"]}
          pb="0rem"
          pl={["0.3rem", "0.6rem", "1rem"]}
          position="fixed"
          onClick={(e) => e.stopPropagation()}
          zIndex={101}
        >
          <IconButton
            aria-label="Close"
            icon={<IoClose size="1.5em" opacity={0.8} color="#555555" />}
            variant="none"
            colorScheme="transparent"
            onClick={() => {
              setShowUploader(false);
              // Enable Scroll
              document.body.style.overflow = "auto";
            }}
            position="absolute"
            top="1.5vh"
            right="1vw"
            zIndex={102}
          />
          <Heading
            // p="1rem"
            lineHeight={1.1}
            fontWeight={700}
            fontSize={{ base: "3xl", sm: "4xl", lg: "4xl" }}
            textAlign="center"
          >
            <Text fontSize={{ base: "2xl", sm: "1xl", lg: "4xl" }}>
              Get your
              <Text as={"span"} color={"primary.400"}>
                {" "}
                #WhatsAppWrapped
              </Text>
            </Text>

            {/* <Text as={"span"} color={"green.400"}>
          WhatsApp!
        </Text> */}
          </Heading>

          <Stack spacing={1} m={["1rem", "1rem"]}>
            <Tabs
              index={tabIndex}
              onChange={(index) => setTabIndex(index)}
              variant="solid-rounded"
              colorScheme="primary"
            >
              <Divider />

              <Center>
                <TabList>
                  <Tab>Android</Tab>
                  <Tab>iPhone</Tab>
                  <Tab>Desktop</Tab>
                </TabList>
              </Center>
              <Divider />

              {/* <Heading
              pt={"2rem"}
              fontSize={{ base: "1xl", sm: "xl", lg: "2xl" }}
              fontWeight={600}
              textAlign="center"
              width={{ base: "100%", sm: "100%", lg: "100%" }}
            >
              Instructions
            </Heading> */}
              <TabPanels>
                <TabPanel>
                  <div
                    // style={
                    //   window.innerWidth < 600
                    //     ? { height: "350px", overflowY: "auto" }
                    //     : {}
                    // }
                    style={{ height: "350px", overflowY: "auto" }}
                  >
                    <Text fontSize={["x1", "2xl"]}>
                      <OrderedList
                        spacing={3}
                        fontSize={["md", "md"]}
                        fontWeight={500}
                        mr="16px"
                      >
                        <Box w="100%" >
                          <AspectRatio ratio={1.8}>
                            <iframe
                              title="Instructions"
                              src="https://www.youtube.com/embed/6bnrIGoYuE8?autoplay=1"
                              allowFullScreen
                            />
                          </AspectRatio>
                        </Box>
                        {/* <ListItem>
                        <strong>Android</strong> users can install the WebApp
                        and share chat directly to the app.
                      </ListItem> */}

                        {deferredPrompt || isSuccessfulPWAInstall ? (
                          <>
                            <ListItem>
                              <strong>Install the WebApp</strong> by clicking
                              below.
                            </ListItem>
                            <Button
                              onClick={handlePWAInstall}
                              colorScheme="primary"
                              variant="outline"
                              size="sm"
                              w="100%"
                              disabled={isSuccessfulPWAInstall}
                            >
                              {isSuccessfulPWAInstall
                                ? "Installed"
                                : "Install the WebApp"}
                            </Button>
                          </>
                        ) : (
                          <ListItem>
                            <strong>To install the WebApp</strong>: Click on the
                            three dots of Chrome browser. You will find the
                            &quot;Install App&quot; option.
                          </ListItem>
                        )}
                        <ListItem>
                          Then open the chat whose wrap you want to generate.
                        </ListItem>
                        <ListItem>
                          Click on the three dots on the top right corner.
                        </ListItem>
                        <ListItem>
                          Click on &quot;More&quot; &gt; &quot;Export chat&quot;
                          &gt; &quot;Without media&quot;.
                        </ListItem>
                        <ListItem>Share it to OurChatStory app.</ListItem>
                      </OrderedList>
                    </Text>
                  </div>
                </TabPanel>
                <TabPanel>
                  <Text fontSize={["x1", "2xl"]}>
                    <OrderedList
                      spacing={3}
                      pt="1rem"
                      fontSize={["md", "md"]}
                      fontWeight={500}
                    >
                      <ListItem>
                        On the chat you would like to export. Tap on the name of
                        the chat.
                      </ListItem>
                      <ListItem>
                        In chat info, scroll all the way to the bottom and Tap
                        on Export Chat. Choose Without Media.
                      </ListItem>
                      <ListItem>
                        Tap on Save to Files to save it on your iPhone.
                      </ListItem>
                      <ListItem>
                        Finally select <strong>On my iPhone</strong> and save to
                        save it locally. At last you can select your exported
                        .zip to be analyzed.{" "}
                      </ListItem>
                    </OrderedList>
                  </Text>
                </TabPanel>
                <TabPanel>
                  <Text fontSize={["x1", "2xl"]}>
                    <OrderedList
                      spacing={3}
                      pt="1rem"
                      fontSize={["md", "md"]}
                      fontWeight={500}
                    >
                      <ListItem>
                        Open the chat or group whose wrap you want to generate.
                      </ListItem>
                      <ListItem>
                        Click on the three dots on the top right corner.
                      </ListItem>
                      <ListItem>
                        Click on &quot;More&quot; &gt; &quot;Export chat&quot;
                        &gt; &quot;Without media&quot;.
                      </ListItem>
                      <ListItem>
                        Click on &quot;Email yourself&quot; &gt;
                        &quot;Send&quot;.
                      </ListItem>
                      <ListItem>
                        Download the file from your email and upload it here.
                      </ListItem>
                    </OrderedList>
                  </Text>
                  <Box mt="1rem">
                    <FileUploader
                      multiple={false}
                      handleChange={handleFileUpload}
                      name="file"
                      types={["TXT", "ZIP"]}
                      label="Upload or drop your chat here"
                      disabled={isUploading}
                      // max size of file in mb
                      maxSize={200}
                      // hoverTitle="Upload your chat file"
                    >
                      <HStack
                        w="100%"
                        h="100%"
                        justifyContent="center"
                        align="center"
                        border="1px dashed #cef23f"
                        pr="1rem"
                        pl="1rem"
                        pt="0.5rem"
                        pb="0.5rem"
                        cursor={isUploading ? "not-allowed" : "pointer"}
                        borderRadius="0.5rem"
                        transition={"0.4s"}
                        _hover={{
                          bgColor: "#cef23f10",
                        }}
                      >
                        <IconButton
                          aria-label="Upload"
                          icon={<BiDownload size="1.5em" />}
                          variant="none"
                          colorScheme="transparent"
                          color={"#cef23f"}
                          isDisabled={isUploading}
                          isActive={!isUploading}
                        />

                        <Text fontSize="md" fontWeight="300" color="#cef23f">
                          <u>{isUploading ? "" : "upload"}</u>
                          {isUploading
                            ? "uploading..."
                            : " or drop your chat here"}
                        </Text>
                        <Spacer />
                        <Text
                          fontSize="sm"
                          color="#cef23f"
                          opacity={0.8}
                          fontWeight="500"
                          textAlign="center"
                        >
                          TXT, ZIP
                        </Text>
                      </HStack>
                    </FileUploader>
                  </Box>
                </TabPanel>
              </TabPanels>
            </Tabs>

            <Center ml="2rem" mr="2rem" mt="1rem" mb="2rem">
              <VStack
                mt={["0.5rem", "1rem", "2rem"]}
                mb="2rem"
                spacing="0.5rem"
                align="center"
              >
                {isUploading || showLoader ? (
                  <>
                    <Spinner />
                    <Text textAlign="center">
                      Brewing your story...
                      <br />
                      Usually takes less than 10 seconds.
                    </Text>
                  </>
                ) : (
                  <>
                    <Button
                      // variant="outline"
                      colorScheme="primary"
                      size="lg"
                      onClick={() => {
                        document.getElementById("hid").click();
                      }}
                    >
                      {/* <label for="hid" cursor="pointer">
                  </label> */}
                      Upload
                      <input
                        id="hid"
                        type="file"
                        accept=".txt, .zip"
                        name="file"
                        title=""
                        hidden
                        className="custom-file-input"
                        size="100"
                        onChange={(event) => {
                          const file = event.target.files[0];
                          handleFileUpload(file);
                        }}
                      />
                    </Button>
                    <Button
                      variant="link"
                      // size="sm"
                      colorScheme="primary"
                      onClick={() => {
                        // console.log(sample_data);
                        setData(sample_data.sample);
                        setIsDemo(true);
                        setShowRes(true);
                      }}
                    >
                      See a demo
                    </Button>
                  </>
                )}
              </VStack>
            </Center>
          </Stack>
        </Box>
      </VStack>
    </>
  );
};

export default Upload;
