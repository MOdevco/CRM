import { AddIcon } from '@chakra-ui/icons'
import { Box, Button } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import AllHodimlar from '../AllHodimlar/alHodimlar'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { API } from '../../api/api'
import Direktor from '../direktor/direktor'
const HodimlarBody = ({search}) => {
   const [data , setData] = useState([])
   const [count , setCount] = useState([])
   
   const [id , setId] = useState([])

  useEffect(() => {
    axios
      .get(`${API}api/physical-stuff/categories`, {
        headers: {
          "ngrok-skip-browser-warning": true,
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setData(res.data);
        setId(res.data);
      });
  }, []);

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
                        <AllHodimlar search={search} setCount={setCount} />
                    </TabPanel>
                    {id.map((item , i) => (
                        <TabPanel key={i}>
                            <Direktor search={search} id={item.category.id} name={item.category.name}/>
                        </TabPanel>
                    ))}
                </TabPanels>
            </Tabs>
        </Box>

        





    </Box>
  );
};

export default HodimlarBody;
