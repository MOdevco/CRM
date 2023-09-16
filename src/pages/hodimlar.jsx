import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import HodimlarBody from "../components/hodimlarBody/hodimlarBody";
import HodimlarTitle from "../components/hodimlarTitle/hodimlarTitle";
import HodimlarTopLink from "../components/hodimlarTopLink/hodimlarTopLink";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { API } from "../api/api";
const Hodimlar = () => {

  return (
    <Box width={"100%"} minHeight={"100vh"}>
      <Box
        pt={"100px"}
        px={"20px"}
        display={"flex"}
        flexDirection={"column"}
        gap={"20px"}
        pl={{ base: "10", xl: "320px" }}
      >
        <HodimlarTopLink />

        <HodimlarTitle />

        <HodimlarBody />
      </Box>
    </Box>
  );
};

export default Hodimlar;
