import { Avatar, Box, Button, Checkbox, Flex, Heading, Image, Spinner, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
} from '@chakra-ui/react'
import { hodimlar } from '../../test/text'
import { CiReceipt } from 'react-icons/ci'
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import axios from 'axios'
import { API } from '../../api/api'
import HodimImg from '../hodimImg/hodimImg'

const AllHodimlar = ({setCount}) => {
  const [total , setTotal] = useState([])
  const test = hodimlar
  const [data , setData] = useState([])
  const [dataImg , setDataImg] = useState('')
  const [loading , setLoading] = useState()

  useEffect(() => {
    axios.get(`${API}api/physical-stuff/all` , {      
      headers: {
        "ngrok-skip-browser-warning": true,
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    }).then((res) => {
      setData(res.data)
      setLoading(false)
      setCount(res.data.length)
    })
  } , [])
  

  


  return (
    <Box height={'63vh'} overflow={'auto'} >

      <Flex flexDirection={'column'}>
        <Box bg={'white'} p={'30px'} rounded={'10px'} display={'flex'} minHeight={'100vh'}   flexDirection={'column'} gap={'20px'}>
          
          <Box position={'sticky'} rounded={'10px'} flexDirection='column' zIndex={10} p={'10px'} top={0} bg={'white'} display={'flex'} justifyContent={'space-between'}>
            <Box display={'flex'} justifyContent={'space-between'}>
              <Text fontSize={'24px'} color={'#4D515A'}>Barchasi</Text>
              <Text fontSize={'24px'} color={'#4D515A'}>Ja’mi {data.length} ta</Text>
            </Box>
          </Box>
          
          <Box >
            {/* <TableContainer > */}
              <Table  variant='simple'>
                <Thead position={'sticky'} top={10} bg={'white'} variant='simple'>
                  <Tr>
                    <Th color={'gray.400'}>FIO</Th>
                    <Th color={'gray.400'}>Address</Th>
                    <Th color={'gray.400'}>Tug’ilgan sanasi</Th>
                    <Th color={'gray.400'}>Passport</Th>
                    <Th color={'gray.400'}>Telefon</Th>
                    <Th color={'gray.400'}>RASMI</Th>
                    <Th color={'gray.400'}>KOPROQ</Th>
                  </Tr>
                </Thead>
              {!loading && <Tbody overflow={'auto'}>
                  {data.map((hodim , i) => (
                      <Tr key={i} borderBottom={'1px'} borderColor={'#E2E8F0'}  >                    
                          <Th color={'gray.500'}>{hodim.physicalFace.firstName} {hodim.physicalFace.lastName} {hodim.physicalFace.middleName}</Th>
                          <Th fontSize={'15px'} color={'gray.500'}>{hodim.physicalFace.address}</Th>
                          <Th fontSize={'15px'} color={'gray.500'}>{hodim.physicalFace.birthday}</Th>
                          <Th fontSize={'15px'} color={'gray.500'}>{hodim.physicalFace.personalIdentification}</Th>
                          <Th fontSize={'15px'} color={'gray.500'}>{hodim.physicalFace.primaryPhone}</Th>
                          <Th color={'gray.500'}><HodimImg img={hodim.physicalFace.photo} /></Th>
                          <Th color={'gray.500'}><CiReceipt fontSize={'30px'} color={'#7364FF'} /></Th>

                      </Tr>
                  ))}
                  
                </Tbody>}

            
              </Table>
                {loading && <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} width={'100%'} minHeight={'30vh'}>
                  <Spinner width={'100px'} height={'100px'} />
                </Box>}
            {/* </TableContainer> */}
          </Box>



        </Box>

        <Box display={'flex'}  position={'fixed'} width={'80.6%'} bottom={-0} roundedBottom={'10px'}  bg={'white'}  p={'10px'} pl={'0'} alignItems={'center'} gap={'20px'}justifyContent={'flex-end'}>
            <Box display={'flex'} gap={'20px'}  alignItems={'center'}>
              <Text color={'gray.400'}>Sahifasiga ma’lumotlar soni: 20 1-10  87 ta dan</Text>
              <Text color={'gray.400'}>1-10  87 ta dan</Text>
            </Box>
            <Box display={'flex'} gap={'20px'}>
              <Button bg={'#F1F2F4'} _hover={{bg: ''}} _active={{bg: ''}} color={'gray'}>
                <ArrowBackIcon />
                Oldingisi
              </Button>
              <Button bg={'#F1F2F4'} _hover={{bg: ''}} _active={{bg: ''}} color={'#5D5FEF'}>
                Keyingisi
                <ArrowForwardIcon />
              </Button>
            </Box>
        </Box>
      </Flex>
    </Box>
  )
}

export default AllHodimlar