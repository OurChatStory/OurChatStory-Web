import Link from "next/link";
import { Box, Heading, Text } from "@chakra-ui/react";
import { IoClose } from "react-icons/io5";

export default function Blogs() {
  
  
  const pages = [
    "Initiating WhatsApp Chats: Relationship Dynamics Uncovered by OurChatStory",
    "Longest WhatsApp Conversations: Analyzing Chat Endurance with OurChatStory",
    "Peak Chat Times: Are You a Morning or Night WhatsApp User. Discover with OurChatStory",
    "Understanding Relationship Gaps: WhatsApp Silent Days Analysis by OurChatStory",
    "Understanding Relationship Gaps: WhatsApp Silent Days Analysis",
    "WhatsApp Chat Analysis Revealed: Discover Your Unique Chat Persona with OurChatStory",
    "WhatsApp Ranking: See Your Global Chat Position on OurChatStory",
    "WhatsApp Reply Time: Are You Quick or Slow. Insights from OurChatStory",
    "Your Most Active WhatsApp Day: Insights and Fun Facts from OurChatStory",
    "Track Your Year in Messages",
  ];
  return (
    <><Box p={"3rem"}>
    <Heading fontSize={"6xl"}>Learn what you can do with OurChatStory.co</Heading>
      {pages.map((page) => (
        
          <Text key={page} fontSize={"3xl"}>
            <Link href={`/learn/${page}.html`}>{page}</Link>
          </Text>

      ))}
      </Box>
    </>
  );
}
