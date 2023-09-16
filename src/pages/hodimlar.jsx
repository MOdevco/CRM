import { Box, Flex } from '@chakra-ui/react'
import React, { useState } from 'react'
import HodimlarBody from '../components/hodimlarBody/hodimlarBody'
import HodimlarTitle from '../components/hodimlarTitle/hodimlarTitle'
import HodimlarTopLink from '../components/hodimlarTopLink/hodimlarTopLink'
const Hodimlar = () => {
  const [search,setSearch] = useState('')

  return (
    <Box width={"100%"} minHeight={"100vh"}>
      <Box
        pt={"100px"}
        px={"20px"}
        display={"flex"}
        flexDirection={"column"}
        gap={"20px"}
        pl={{ base: "10", xl: "320px" }}
      />
        

        <Box pt={'10px'} px={'20px'} display={'flex'} flexDirection={'column'} gap={'20px'} pl={{base: '10' , xl: '320px'}}>
            <HodimlarTopLink />

            <HodimlarTitle setSearch={setSearch} />

            <HodimlarBody search={search} />
        </Box>



        
    </Box>
  );
};

export default Hodimlar
