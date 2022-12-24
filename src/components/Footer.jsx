import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import profile from '../assets/profile.jpg'

const Footer = () => {
  return (
    <Box
      minH={"48"}
      px={"16"}
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            textAlign={["center", "left"]}
            letterSpacing={"widest"}
          >
            We are the best crypto trading app in India. We provide our guidance
            in a very reasonalble Price.
          </Text>
        </VStack>
        <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]} src={profile}/>
          <Text>Our Founder</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
