import { Box } from "@chakra-ui/react";

const Story = (props) => {
  // const dummy_data = sample_data.sample;

  return (
    <>
      <div className="d-flex snap-child">
        <Box
          ml={{ base: "1rem", sm: "1rem", lg: "2.5rem" }}
          mr={{ base: "1rem", sm: "1rem", lg: "2.5rem" }}
          mt={{ base: "0.5rem", sm: "0.5rem", lg: "0.5rem" }}
          mb={{ base: "1rem", sm: "1rem", lg: "1rem" }}
          align={"center"}
          spacing={{ base: "1rem", sm: "1rem", lg: "1rem" }}
          h="100%"
          maxHeight="78vh"
          w="100%"
          minWidth={{ lg: "600" }}
          maxWidth="600"
        >
          <Box
            // bgColor="red"
            borderRadius="1rem"
            // p="1rem"
            w={{ base: "100%", sm: "100%", md: "60%", lg: "60%" }}
            h="78vh"
          >
            {/* <DummyIntro drawData={dummy_data} /> */}
            {props.component}
          </Box>
        </Box>
      </div>

      <style jsx>{`
        .snap-container {
          width: calc(100vw - (100vw - 100%));
          height: 90vh;
          text-align: center;
          scroll-snap-type: y mandatory;
          scroll-padding: 10px;
          overflow-y: scroll;
        }

        .d-flex {
          display: flex;
        }
        .snap-child {
          height: 80vh;
          scroll-snap-align: center;
          // display: flex;
          justify-content: center;
          align-items: center;
          background: #000;
          color: #fff;
        }
      `}</style>
    </>
  );
};

export default Story;
