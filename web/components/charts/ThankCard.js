import {
  VStack,
  Text,
  Image,
  Link,
  Box,
  Center,
  keyframes,
  Spacer,
  Button,
} from "@chakra-ui/react";
import { FaRegCopy } from "react-icons/fa";
import { useEffect, useState } from "react";

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

const Card6 = ({ drawData }) => {
  const zoomAnimation = `${ZoomAnimation} 40s ease-in infinite alternate;`;

  const UPI_ID = "ourchatstory@ybl";

  const [copiedTextTrue, setCoppiedTextTrue] = useState(false);

  useEffect(() => {
    fetch("https://extreme-ip-lookup.com/json/")
      .then((res) => res.json())
      .then((response) => {
        console.log("Country is : ", response);
      })
      .catch((data, status) => {
        console.log("Request failed:", data);
      });
  }, []);

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
      // bg="#30475E"
      // p="1rem"
      // w="100vw"
      // h="100vh"
      align="center"
      justify="center"
      spacing="1rem"
      backgroundImage="static/dark/v2bg6.webp"
      bgSize="cover"
      // backgroundPosition="center"
      // backgroundRepeat="no-repeat"
      // backgroundSize="120%"
      w="100%"
      h="78vh"
      border="2px solid white"
      // bg="#30475E"
      borderRadius="1rem"
      p="1rem"
      animation={zoomAnimation}
      style={{
        textShadow:
          "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
      }}>
      <Text color="#F5F5F5" fontSize="3xl" align="center">
        This was
      </Text>
      {/* <Image h="80px" src="static/compress/logo2.webp" alt="OurChatStory" /> */}
      <Text
        color="#F5F5F5"
        fontSize="4xl"
        align="center"
        pb="1rem"
        style={{ marginTop: "0px" }}>
        <b>OurChatStory</b>
      </Text>
      <Text color="#F5F5F5" fontSize="s" align="center">
        Your chats tell a story.
      </Text>
      <Text color="#F5F5F5" fontSize="s" align="center">
        Help us keep the story going. A small donation keeps our servers running
        and your memories flowing!
      </Text>
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
        style={{ zIndex: "10000" }}>
        <Image
          h={10}
          src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
          alt="Buy Me A Coffee"
        />
      </a>
      {/* <Box zIndex={10000}>
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
      {/* <Spacer /> */}
      <style jsx>{`
        .shareLink {
          z-index: 10000;
          position: block !important;
          display: flex;
        }

        .shareLink {
          .permalink {
            cursor: pointer;
            z-index: 10000;
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
                position: absolute;
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

export default Card6;
