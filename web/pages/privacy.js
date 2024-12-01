import Link from "next/link";
import { IconButton } from "@chakra-ui/react";
import { IoClose } from "react-icons/io5";

export default function Privacy() {
  return (
    <>
      <div
        style={{
          margin: "0",
          padding: "16px",
          color: "white",
          backgroundColor: "black",
          height: "100vh",
          fontFamily: "sans-serif",
          overflowY: "auto",
        }}
      >
        <Link href="/">
          <IconButton
            aria-label="Close"
            icon={<IoClose size="1.5em" opacity={0.8} color="#fff" />}
            variant="none"
            bgColor="black"
            colorScheme="transparent"
            position="absolute"
            top="4vh"
            right="2vw"
            border={"0px"}
            zIndex={102}
            cursor="pointer"
          />
        </Link>

        <h1>Thank you for considering our WhatsApp message analysis tool!</h1>
        <p>
          Your privacy is of the utmost importance to us, and we want to assure
          you that we take every precaution to protect it.
        </p>

        <h2>Our tool is open-source</h2>
        <p>
          Our tool is an open-source project, which means that the code is
          available for anyone to view and verify. This ensures that our
          processing is transparent and secure, and that you can trust that your
          data is handled in accordance with our strict privacy policy.
        </p>

        <h2>WE DONT OWN A DATABASE</h2>
        <p>
          OurChatStory servers does not connect to a database and hence we have
          a ZERO-DATA-SRORAGE-POLICY. When you use our tool, our server get your
          WhatsApp messages in order to perform the analysis. However, we do not
          store any of your personal data or messages on our servers, and all
          messages are processed and the insights are sent immediately after the
          analysis is complete. This means that your messages remain private and
          confidential at all times. Some parts of the generated meta-data
          numbers are recorded after the analysis for product improvements, but
          this data is not linked to your messages in any way. The wordcloud is
          not recorded.
        </p>

        <h2>We use secure encryption methods</h2>
        <p>
          We use secure encryption methods to protect your data while it is
          being transmitted to our servers, and we do not share your data with
          any third parties.
        </p>

        <h2>We use Google Analytics</h2>
        <p>
          We use Google Analytics to monitor usage of our tool. This helps us
          understand how our users are interacting with the tool, so we can
          improve the user experience and make sure the tool is meeting their
          needs. However, we do not share any personal information with Google
          Analytics or any other third parties.
        </p>

        <h2>Contact us</h2>
        <p>
          If you have any questions or concerns about our privacy policy, please
          do not hesitate to contact us. Thank you for using our tool.
        </p>
      </div>
      <style jsx>{`
        h1 {
          font-size: 24px;
          margin: 20px 0;
        }
        h2 {
          font-size: 18px;
          margin: 20px 0;
        }
        p {
          margin: 10px 0;
        }
      `}</style>
    </>
  );
}
