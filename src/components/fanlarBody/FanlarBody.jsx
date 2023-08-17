import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { fan } from "../../assets";
import FanWeb from "../fanWeb/FanWeb";
import FanUstoz from "../fanUstoz/FanUstoz";

function FanlarBody() {
  return (
    <Box bg={"#fff"} w={"1498px"} h={"888px"} display={'flex'} alignItems={'flex-start'} justifyContent={'flex-start'} gap={'80px'}>
      <FanWeb />
      <FanUstoz />
    </Box>
  );
}

export default FanlarBody;
