import React from "react";

import { Box, Flex } from "@chakra-ui/react";
import FanTopLink from "../components/fanTopLink/fanTopLink";
import FanlarTitle from "../components/fanlarTitle/fanlarTitle";
import FanlarBody from "../components/fanlarBody/FanlarBody"
const Fanlar = () => {
  return (
    <div>
      <Box width={"100%"} height={'100%'}>
        <Flex>
          <Box
            pt={"100px"}
            width={"100%"}
            px={"20px"}
            display={"flex"}
            flexDirection={"column"}
            gap={"15px"}
            pl={{ base: "10", xl: "320px" }}
          >
            <FanTopLink />
            <FanlarTitle />
            <FanlarBody />
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default Fanlar;
