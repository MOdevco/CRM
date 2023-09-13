import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const FanTopLink = () => {
  return (
    <Box display={"flex"} gap={"10px"} mt={'10px'} >
      <NavLink>
        <Text
          display={"flex"}
          alignItems={"center"}
          gap={"8px"}
          _hover={{ color: "#5D5FEF" }}
        >
          Home
          <AiOutlineRight />
        </Text>
      </NavLink>
      <NavLink>
        <Text
          display={"flex"}
          alignItems={"center"}
          gap={"8px"}
          _hover={{ color: "#5D5FEF" }}
        >
          Ichki tiim
          <AiOutlineRight />
        </Text>
      </NavLink>

      <NavLink>
        <Text
          display={"flex"}
          alignItems={"center"}
          gap={"8px"}
          _hover={{ color: "#5D5FEF" }}
        >
          Hodimlar
          <AiOutlineRight />
        </Text>
      </NavLink>
    </Box>
  );
};

export default FanTopLink;
