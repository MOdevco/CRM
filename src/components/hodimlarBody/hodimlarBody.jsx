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
import Direktor from '../direktor/direktor'
import DOrinbosar from '../dOrincosar/dOrinbosar'
import HodimQorovul from '../hodimQorovul/hodimQorovul'
import HodimFarosh from '../hodimFarosh/hodimFarosh'
const HodimlarBody = () => {
   const [data , setData] = useState([])
   const [count , setCount] = useState([])

  

   useEffect(() => {
    axios.get(`${API}api/physical-stuff/categories` , {
        headers : {
            "ngrok-skip-browser-warning": true,
            "Access-Control-Allow-Origin": "*",
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }).then((res) => {
        setData(res.data)
    })
   } , [])

   

  

  return (
    <Box    justifyContent={'space-between'}>
        <Box >
            <Tabs variant='soft-rounded'  zIndex={'1'}>
                <TabList display={'flex'}  gap={'20px'} pl={'20px'} >

                    <Tab _selected={{ color: 'white', bg: '#7364FF'  }} border={'1px'} borderColor={'#E2E8F0'} bg={'white'} width={'140px'}>Barchasi {count ? count : ''}</Tab>
                    {data.map((item , i) => (
                        <Box>
                            <Tab key={i} _selected={{ color: 'white', bg: '#7364FF' }} border={'1px'} borderColor={'#E2E8F0'} bg={'white'} >{item.category.name} {item.countFaces
                            }</Tab>
                        </Box>
                    ))}
              
                </TabList>
                <TabPanels mt={'5px'}>  
                    <TabPanel >
                        <AllHodimlar  setCount={setCount} />
                    </TabPanel>
                    <TabPanel>
                        <Direktor/>
                    </TabPanel>
                    <TabPanel>
                        <DOrinbosar />
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
                    <TabPanel>
                        <HodimQorovul />
                    </TabPanel>
                    <TabPanel>
                        <HodimFarosh />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>

        





    </Box>
  )
}

export default HodimlarBody