import { Avatar, Box, Button, Checkbox, Heading, Image, Spinner, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
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
    })
  } , [])
  

  


  return (
    <Box height={'65vh'} overflow={'auto'}>
      <Box bg={'white'} p={'30px'} rounded={'10px'} display={'flex'}   flexDirection={'column'} gap={'20px'}>
        
        <Box position={'sticky'} rounded={'10px'} zIndex={10} p={'10px'} top={0} bg={'white'} display={'flex'} justifyContent={'space-between'}>
          <Text fontSize={'24px'} color={'#4D515A'}>Barchasi</Text>
          <Text fontSize={'24px'} color={'#4D515A'}>Ja’mi {data.length} ta</Text>
        </Box>

        <Box >
          <TableContainer >
            <Table  variant='simple'>
              <Thead position={'sticky'} top={'0'} >
                <Tr >
                  <Th color={'gray.400'} >FIO</Th>
                  <Th color={'gray.400'} >Address</Th>
                  <Th color={'gray.400'} >Tug’ilgan sanasi</Th>
                  <Th color={'gray.400'} >Passport</Th>
                  <Th color={'gray.400'} >Telefon</Th>
                  <Th color={'gray.400'} >RASMI</Th>
                  <Th color={'gray.400'} >KOPROQ</Th>

                </Tr>
              </Thead>



             {!loading && <Tbody overflow={'auto'}>
                {data.map((hodim , i) => (
                    <Tr key={i} borderBottom={'1px'} borderColor={'#E2E8F0'}  >                    
                        <Th color={'gray.500'}>{hodim.physicalFace.firstName} {hodim.physicalFace.lastName} {hodim.physicalFace.middleName}</Th>
                        <Th color={'gray.500'}>{hodim.physicalFace.address}</Th>
                        <Th color={'gray.500'}>{hodim.physicalFace.birthday}</Th>
                        <Th color={'gray.500'}>{hodim.physicalFace.personalIdentification}</Th>
                        <Th color={'gray.500'}>{hodim.physicalFace.primaryPhone}</Th>
                        <Th color={'gray.500'}><HodimImg img={hodim.physicalFace.photo} /></Th>
                        <Th color={'gray.500'}><CiReceipt fontSize={'30px'} color={'#7364FF'} /></Th>

                    </Tr>
                ))}
                
              </Tbody>}

          
            </Table>
              {loading && <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} width={'100%'} minHeight={'30vh'}>
                <Spinner width={'100px'} height={'100px'} />
              </Box>}
          </TableContainer>
        </Box>

        <Box display={'flex'} position={'sticky'} top={''} alignItems={'center'} gap={'20px'} justifyContent={'flex-end'}>
          <Box display={'flex'} gap={'20px'} alignItems={'center'}>
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


      </Box>
    </Box>
  )
}

export default AllHodimlar