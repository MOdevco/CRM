import { Box } from '@chakra-ui/react'
import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import HomeBodyDev from '../homeBodyDev/homeBodyDev'
import HomeBodyEn from '../homeBodyEn/homeBodyEn'
import HomeBodyKomp from '../homeBodyKop/homeBodyKomp'
import HomeBodyMath from '../homeBodyMath/homeBodyMath'
import HomeBodyAll from '../homeBodyAll/homeBodyAll'
const HomeBody = () => {
  return (
    <Box width={'100%'} >

        <Tabs overflow={'auto   '} width={'100%'}>
            <TabList border={'none'}>
                <Tab>Barchasi</Tab>
                <Tab>Dasturlash</Tab>
                <Tab>Matematika</Tab>
                <Tab>Ingliz tili</Tab>
                <Tab>Kompyuter savodxonligi</Tab>
            </TabList>

            <TabPanels mt={'15px'}>
                <TabPanel>
                    <HomeBodyAll />
                </TabPanel>
                <TabPanel>
                    <HomeBodyDev />
                </TabPanel>
                <TabPanel>
                    <HomeBodyMath />
                </TabPanel>
                <TabPanel>
                    <HomeBodyEn />
                </TabPanel>
                <TabPanel>
                    <HomeBodyKomp />
                </TabPanel>
            </TabPanels>
        </Tabs>


    </Box>
  )
}

export default HomeBody