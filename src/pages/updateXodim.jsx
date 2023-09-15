import React from 'react'
import UpDateXodimBody from '../components/upDateXodimBody/UpDateXodimBody';
import UpDateXodimLink from '../components/upDateXodimLInk/UpDateXodimLink';
import UpDateXodimTitle from '../components/upDateXodimTitle/upDateXodimTitle';
import { Box } from '@chakra-ui/react';

function UpdateXodim() {
  return (
    <Box width={"100%"} overflow={"auto"} minHeight={"100vh"}>
      <Box
        pt={"100px"}
        width={"100%"}
        px={"20px"}
        display={"flex"}
        flexDirection={"column"}
        gap={"15px"}
        pl={{ base: "10", xl: "320px" }}
      >
        <UpDateXodimLink />

        <UpDateXodimTitle />

        <UpDateXodimBody />

      </Box>
    </Box>
  );
}

export default UpdateXodim