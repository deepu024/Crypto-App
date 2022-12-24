import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import bitCoin from "../assets/btc.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box w={"full"} h={"85vh"} bgColor={"blackAlpha.900"}>
      <motion.div
        style={{
          height: "80vh",
        }}
        animate={{
          translateY: "-10px",
        }}
        transition ={{
          duration: 1,
          repeat: Infinity,
          repeatType: 'reverse'
        }}
      >
        <Image
          w={"full"}
          h={"full"}
          objectFit={"contain"}
          src={bitCoin}
          filter={"grayscale(1)"}
        />
      </motion.div>
      <Text
        fontSize={"6xl"}
        textAlign={"center"}
        fontWeight={"thin"}
        color={"whiteAlpha.700"}
        mt={"-20"}
      >
        XCrypto
      </Text>
    </Box>
  );
};

export default Home;
