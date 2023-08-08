import { Box, Divider, Flex } from "@chakra-ui/react";
import React from "react";
import HomeBody from "../components/homeBody/homeBody";
import HomeLinkKategori from "../components/homeLinkKategori/homeLinkKategori";
import HomeTitle from "../components/homeTitle/homeTitle";
import HomeTopLink from "../components/homeTopLink/homeTopLink";
import Navbar from "../components/navbar/navbar";
import Sidebar from "../components/sidebar/sidebar";

const Home = () => {
  return (
    <Box width={'100%'} minHeight={'100vh'}>
        
        <Flex>
            


            


            <Box pt={'100px'} width={'100%'} px={'20px'} display={'flex'} flexDirection={'column'} gap={'15px'} pl={{base: '10' , xl: '320px'}}>
                <HomeTopLink />

                <HomeTitle />

                {/* <HomeLinkKategori /> */}
                {/* <Divider height={'1px'} bg={'#EDEDED'} /> */}

                <HomeBody />
            </Box>
        </Flex>



        
    </Box>
  );
};

export default Home;
