import { Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
// import HomeBodyEn from '../homeBodyEn/homeBodyEn'
// import HomeBodyKomp from '../homeBodyKop/homeBodyKomp'
import HomeBodyAll from '../homeBodyAll/homeBodyAll'
import axios from 'axios'
import { API } from '../../api/api'
import HomeBodyDasturlash from '../homeBodyDasturlsh/homeBodyDasturlash'
import HomeBodyGrafik from '../homeBodyGrafik/homeBodyGrafik'
import HomeBodyOnaTili from '../onaTili/onaTili'
import HomeBodyAdab from '../homeBodyAdab/homeBodyAdab'
import HomeBodyFizika from '../homeBodyFizika/homeBodyFizika'
import HomeBodyEng from '../homeBodyEn/homeBodyEn'
import HomeBodyRus from '../homeBodyRus/homrBodyRus'
import HomeBodyTarix from '../homeBodyTarix/homeBodyTarix'
import HomeBodyGeog from '../homeBodyGeog/homeBodyGeog'
import HomeBodyBialog from '../homeBodyBialog/homeBodyBialog'
import HomeBodyMuzik from '../homeBodyMuzik/homeBodyMuzik'
import HomeBodyTasvir from '../homeBodyTasvir/homeBodyTasvir'
import HomeBodyTex from '../homeBodyTex/homeBodyTex'
import HomeBodyMatem from '../homeBodyMatem/homeBodyMatem'
const HomeBody = () => {

    const [data , setData] = useState([])

    useEffect(() => {
        axios.get(`${API}api/org/ss/org-subjects` , {
            headers: {
                "ngrok-skip-browser-warning": true,
                "Access-Control-Allow-Origin": "*",
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
                    <Box key={i}>
                        <Tab>{dars.name}</Tab>
                    </Box>
                ))}
            </TabList>


            

            <TabPanels mt={'15px'}>
                <TabPanel>
                    <HomeBodyAll />
                </TabPanel>
                <TabPanel>
                    <HomeBodyDasturlash />
                </TabPanel>
                <TabPanel>
                    <HomeBodyGrafik />
                </TabPanel>
                <TabPanel>
                    <HomeBodyMatem />
                </TabPanel>
                <TabPanel>
                    <HomeBodyOnaTili />
                </TabPanel>
                <TabPanel>
                    <HomeBodyAdab />
                </TabPanel>
                <TabPanel>
                    <HomeBodyFizika />
                </TabPanel>
                <TabPanel>
                    <HomeBodyEng />
                </TabPanel>
                <TabPanel>
                    <HomeBodyRus />
                </TabPanel>
                <TabPanel>
                    <HomeBodyTarix />
                </TabPanel>
                <TabPanel>
                    <HomeBodyGeog />
                </TabPanel>
                <TabPanel>
                    <HomeBodyBialog />
                </TabPanel>
                <TabPanel>
                    <HomeBodyMuzik />
                </TabPanel>
                <TabPanel>
                    <HomeBodyTasvir />
                </TabPanel>
                <TabPanel>
                    <HomeBodyTex />
                </TabPanel>
                
            </TabPanels>
        </Tabs>


    </Box>
  )
}

export default HomeBody