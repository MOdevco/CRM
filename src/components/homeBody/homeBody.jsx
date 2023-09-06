import { Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
// import HomeBodyEn from '../homeBodyEn/homeBodyEn'
// import HomeBodyKomp from '../homeBodyKop/homeBodyKomp'
import HomeBodyAll from '../homeBodyAll/homeBodyAll'
import axios from 'axios'
import { API } from '../../api/api'
import HomeBodyDasturlash from '../homeBodyDasturlsh/homeBodyDasturlash'
const HomeBody = () => {

    const [data , setData] = useState([])
    const [id , setId] = useState([])
    
    useEffect(() => {
        axios.get(`${API}api/org/ss/org-subjects` , {
            headers: {
                "ngrok-skip-browser-warning": true,
                "Access-Control-Allow-Origin": "*",
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }).then((res) => {
            setData(res.data)
            setId(res.data)
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
                    <HomeBodyAll  />
                </TabPanel>

                {id.map((item , i) => (
                    <TabPanel key={i}>
                        <HomeBodyDasturlash id={item.id}  />
                    </TabPanel>
                ))}
            </TabPanels>
        </Tabs>


    </Box>
  )
}

export default HomeBody