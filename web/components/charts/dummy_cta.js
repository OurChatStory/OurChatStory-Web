import {
  Text,
  VStack,
  HStack,
  Box,
  Spacer,
  Button,
  Link,
  IconButton,
  Image
} from "@chakra-ui/react";
import React from "react";
import Marquee from "react-fast-marquee";
import { FaInstagram, FaTwitter, FaRegCopy } from "react-icons/fa";
import CountUp from "react-countup";
import { useEffect, useState } from "react";


const DummyCTA = ({ drawData, setShowUploader }) => {
  const UPI_ID = "ourchatstory@ybl";
  const [copiedTextTrue, setCoppiedTextTrue] = useState(false);

  useEffect(() => {
    if (copiedTextTrue) {
      setTimeout(() => {
        document.getElementById("copy").setAttribute("tooltip", "Copy");
        setCoppiedTextTrue(false);
      }, 1000);
    }
  }, [copiedTextTrue]);
  return (
    <VStack
      align="center"
      // justify="center"
      spacing="2rem"
      bgBlendMode={"multiply"}
      bgRepeat="no-repeat"
      bgSize="cover"
      // backgroundRepeat="no-repeat"
      // backgroundSize="120%"
      // p="1rem"
      w="100%"
      h="78vh"
      bgColor="#6f0cbb00"
      borderRadius="1rem"
      mt="2rem"
      // pb="1rem"
      p="1rem"
      // borderColor="#fcea2b"
      // errorBorderColor="red.300"
      border="0px solid #fcea2b"
    >
      <Spacer />
      <Text
        fontSize="3xl"
        align="left"
        color="white"
        w={"100%"}
        fontWeight="600"
        textAlign="center"
      >
        Now to the best part!
      </Text>
      <Text
        fontSize="2xl"
        align="left"
        color="white"
        w={"100%"}
        fontWeight="500"
        textAlign="center"
        pl={"1rem"}
        pr={"1rem"}
      >
        You can know your WhatsApp Chat Story with your friends!
      </Text>
      {/* <Text color="#F5F5F5" fontSize="2xl" align="center">
        These many people have already tried out their #WhatsAppWrapped
      </Text> */}
      {/* <Box
        border="2px solid #ffffff80"
        p="4px 1rem"
        borderRadius={"4px"}
        // bgColor="#ffa500"
      >
        <Text color="#F5F5F5" fontSize="3xl" align="center" as="b">
          <CountUp
            // className="account-balance"
            start={1234}
            end={1240}
            duration={2.75}
            useEasing={true}
            useGrouping={true}
            separator=" "
            decimals={4}
            decimal=","
            // prefix="EUR "
            // suffix=" left"
            // onComplete={onComplete}
            // onStart={onStart}
          />
        </Text>
      </Box> */}
      {/* <Spacer /> */}
      <Button
        colorScheme="primary"
        p={{
          base: ["2rem", "1.5rem"],
          sm: ["2rem", "1.5rem"],
          lg: ["2rem", "1.5rem"],
        }}
        borderRadius={50}
        onClick={() => {
          setShowUploader(true);
          // Disable scroll
          document.body.style.overflow = "hidden";
        }}
      >
        {/* <label for="hid" cursor="pointer">
                      </label> */}
        <Text fontSize={{ base: "sm", sm: "sm", lg: "md" }} color="dark">
          Click to make your WhatsApp Wrapped
        </Text>
        {/* <input
                        id="hid"
                        type="file"
                        name="file"
                        title=""
                        hidden
                        className="custom-file-input"
                        size="100"
                        onChange={uploadFile}
                    /> */}
      </Button>
      {/* <Spacer /> */}
      <HStack>
        {/* <Box>
          <a
            href="https://twitter.com/ourchatstory"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter />
          </a>
        </Box>
        <Box>
          <a
            href="https://www.instagram.com/ourchatstory.co/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
        </Box> */}
        <IconButton
          as="a"
          href="https://twitter.com/ourchatstory"
          target="_blank"
          rel="noreferrer"
          aria-label="Close"
          icon={<FaTwitter size="1.5em" opacity={0.8} color="white" />}
          variant="none"
          colorScheme="transparent"
        />
        <IconButton
          as="a"
          href="https://www.instagram.com/ourchatstory.co/"
          target="_blank"
          rel="noreferrer"
          aria-label="Close"
          icon={<FaInstagram size="1.5em" opacity={0.8} color="white" />}
          variant="none"
          colorScheme="transparent"
        />
        {/* <Button color={"white"} leftIcon={<FaFacebook />}></Button>
        <Button colorScheme="twitter" leftIcon={<FaTwitter />}></Button> */}
      </HStack>
      {/* <Link href="/privacy">
        <Text fontSize={"1x1"}>Privacy</Text>
      </Link> */}
      <Text color="#F5F5F5" fontSize="s" align="center" pb={1}>
        Sponsor this project using UPI:
      </Text>
      <Box style={{ margin: "0px" }}>
        <div
          className="shareLink"
          onClick={() => {
            // e.preventDefault();
            navigator.clipboard.writeText(UPI_ID);
            document.getElementById("copy").setAttribute("tooltip", "Copied!");
            setCoppiedTextTrue(true);
            // alert("UPI copied to clipboard");
          }}>
          <div className="permalink">
            <input
              className="textLink"
              id="text"
              type="text"
              name="shortlink"
              value={UPI_ID}
              readonly=""
            />
            <span className="copyLink" id="copy" tooltip="Copy to clipboard">
              <FaRegCopy />
            </span>
          </div>
        </div>
      </Box>
      <Box minHeight={6} style={{margin: "0px"}}>
        {copiedTextTrue && (
          <Text
            color="#F5F5F5"
            fontSize="xs"
            align="center"
            style={{ margin: "0px" }}>
            Copied!
          </Text>
        )}
      </Box>
      <Text style={{margin: "0px"}}>or</Text>
      <a
        href="https://www.buymeacoffee.com/whatsappwrapped"
        target="_blank"
        rel="noreferrer"
        style={{ zIndex: "99" }}>
        <Image
          h={10}
          src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
          alt="Buy Me A Coffee"
        />
      </a>
      {/* <Spacer /> */}
      {/* scroll to top to #marquee */}
      {/* <Text
        fontSize="2xl"
        align="left"
        color="white"
        w={"100%"}
        fontWeight="500"
        textAlign="center"
        pl={"1rem"}
        pr={"1rem"}
        as="a"
        cursor={"pointer"}
        onClick={() => {
          console.log("scrolling to top");
          document.getPageTop().scrollIntoView();
          // window.scrollTo(0, 0)
        }}
      >
        See what others have made
      </Text> */}
      {/* <Spacer /> */}
      {/* <Spacer /> */}
      <Text
        fontSize={{ base: "smaller", sm: "sm", lg: "smaller" }}
        color="grey"
        pb="2rem"
      >
        Read our{" "}
        <Link style={{ textDecoration: "underline" }} href="/privacy">
          privacy policy
        </Link>{" "}
        or check out our{" "}
        <Link style={{ textDecoration: "underline" }} href="/blogs">
          blogs.
        </Link>
        <br />
        <strong style={{ textTransform: "uppercase" }}>
          no one reads or stores your chats
        </strong>
        <br />
        You can be confident by checking our {" "}
        <Link style={{ textDecoration: "underline" }} href="https://github.com/OurChatStory/OurChatStory">
          code.
        </Link>
      </Text>
      {/* <Spacer/>
      <Box pb="2rem">
        <Text color="#F5F5F5" fontSize="sm" align="center">
          Made with ❤️ by
        </Text>
        <Text color="#F5F5F5" fontSize="sm" align="center">
          <Link
            textDecoration="underline"
            cursor="pointer"
            zIndex={10000}
            href="https://twitter.com/anshulagx"
            target="_blank"
          >
            @anshulagx
          </Link>{" "}
          &{" "}
          <Link
            zIndex={10000}
            textDecoration="underline"
            href="https://twitter.com/iamyajat"
            target="_blank"
          >
            @iamyajat
          </Link>
        </Text>
      </Box> */}
      <style jsx>{`
        .shareLink {
          z-index: 10000;
          display: flex;
        }

        .shareLink {
          .permalink {
            cursor: pointer;
            z-index: 20;
            position: relative;
            border-radius: 30px;
            .textLink {
              opacity: 0.5;
              text-align: center;
              padding: 12px 40px 12px 10px;
              height: 36px;
              width: 400px;
              font-size: 12px;
              letter-spacing: 0.3px;
              color: #494949;
              border-radius: 25px;
              border: 1px solid #f2f2f2;
              background-color: #f2f2f2;
              outline: 0;
              appearance: none;
              transition: all 0.3s ease;
              // @media (max-width: 767px) {
              //   width: 100%;
              // }
              width: 100%;
              &:focus {
                border-color: #d8d8d8;
              }
              &::selection {
                color: #fff;
                background-color: #ff0a4b;
              }
            }
            .copyLink {
              position: absolute;
              top: 50%;
              right: 15px;
              cursor: pointer;
              transform: translateY(-50%);
              &:hover {
                &:after {
                  opacity: 1;
                  transform: translateY(0) translateX(-50%);
                }
              }
              &:after {
                content: attr(tooltip);
                width: 140px;
                bottom: -40px;
                left: 50%;
                padding: 5px;
                border-radius: 4px;
                font-size: 0.8rem;
                opacity: 0;
                pointer-events: none;
                // position: absolute;
                background-color: #000000;
                color: #ffffff;
                transform: translateY(-10px) translateX(-50%);
                transition: all 300ms ease;
                text-align: center;
              }
              i {
                font-size: 20px;
                color: #ff0a4b;
              }
            }
          }
        }
      `}</style>
    </VStack>
  );
};

export default DummyCTA;
