import { Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
// import HomeBodyEn from '../homeBodyEn/homeBodyEn'
// import HomeBodyKomp from '../homeBodyKop/homeBodyKomp'
import HomeBodyAll from '../homeBodyAll/homeBodyAll'
import axios from 'axios'
import { API } from '../../api/api'
import HomeBodyTarix from '../homeBodyTarix/homeBodyTarix'
import HomeBodyGeog from '../homeBodyGeog/homeBodyGeog'
const HomeBody = () => {

    const [data , setData] = useState([])

    useEffect(() => {
        axios.get(`${API}api/org/ss/org-subjects` , {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }).then((res) => {
            setData(res.data)
        })
    } ,[])


  return (
    <Box width={'100%'} >

        <Tabs overflow={'auto   '} width={'100%'}>
            <TabList  border={'none'}>
                <Tab>Barchasi</Tab>
                {data.map((dars , i) => (
                    <Box>
                        <Tab>{dars.name}</Tab>
                    </Box>
                ))}
            </TabList>

            <TabPanels mt={'15px'}>
                <TabPanel>
                    <HomeBodyAll />
                </TabPanel>
                <TabPanel>
                    <HomeBodyTarix />
                </TabPanel>
                <TabPanel>
                    <HomeBodyGeog />
                </TabPanel>
                <TabPanel>
                    {/* <HomeBodyEn /> */}
                </TabPanel>
                <TabPanel>
                    {/* <HomeBodyKomp /> */}
                </TabPanel>
            </TabPanels>
        </Tabs>


    </Box>
  )
}

export default HomeBody