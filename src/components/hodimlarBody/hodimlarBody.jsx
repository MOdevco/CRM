import { AddIcon } from '@chakra-ui/icons'
import { Box, Button } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import AllHodimlar from '../AllHodimlar/alHodimlar'
import HodimHelpTech from '../hodimHelpTech/hodimHelpTech'
import HodimlarAdmin from '../hodimlarAdmin/hodimlarAdmin'
import Ustozlar from '../hodimlarUstozlar/ustozlar'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { API } from '../../api/api'
const HodimlarBody = () => {
   


  

  return (
    <Box   position={'relative'} top={'-90px'} justifyContent={'space-between'}>
        <Box >
            <Tabs variant='soft-rounded'  zIndex={'1'}>
                <TabList display={'flex'} gap={'20px'} pl={'20px'} >
                    <Tab _selected={{ color: 'white', bg: '#7364FF'  }} border={'1px'} borderColor={'#E2E8F0'} bg={'white'} width={'140px'}>Barchasi <span style={{color: '#7364FF'}} _selected={{color: '#fff'}}> 8</span></Tab>
                    <Tab _selected={{ color: 'white', bg: '#7364FF' }} border={'1px'} borderColor={'#E2E8F0'} bg={'white'} width={'150px'}>O’qituvchilar 25</Tab>
                    <Tab _selected={{ color: 'white', bg: '#7364FF' }} border={'1px'} borderColor={'#E2E8F0'} bg={'white'} width={'230px'}>Yordamchi o’qituvchilar 15</Tab>
                    <Tab _selected={{ color: 'white', bg: '#7364FF' }} border={'1px'} borderColor={'#E2E8F0'} bg={'white'} width={'170px'}> Administratorlar 2</Tab>
                </TabList>
                <TabPanels mt={'5px'}>
                    <TabPanel >
                        <AllHodimlar />
                    </TabPanel>
                    <TabPanel>
                        <Ustozlar />
                    </TabPanel>
                    <TabPanel>
                        <HodimHelpTech />
                    </TabPanel>
                    <TabPanel>
                        <HodimlarAdmin />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>

        





    </Box>
  )
}

export default HodimlarBody