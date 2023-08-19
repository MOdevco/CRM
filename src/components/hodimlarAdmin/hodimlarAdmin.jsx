import { Avatar, Box, Button, Checkbox, Heading, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
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
import { admin, hodimlar } from '../../test/text'
import { CiReceipt } from 'react-icons/ci'
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'

const HodimlarAdmin = () => {
    const [total , setTotal] = useState(42)
    const test = admin
  return (
    <Box >



      <Box bg={'white'} p={'30px'} rounded={'10px'} display={'flex'} flexDirection={'column'} gap={'20px'}>
        
        <Box  display={'flex'} justifyContent={'space-between'}>
          <Text fontSize={'24px'} color={'#4D515A'}>Administratorlar</Text>
        </Box>

        <Box >
          <TableContainer >
            <Table  variant='simple'>
              <Thead  >
                <Tr>
                  <Th color={'gray.400'} >FIO</Th>
                  <Th color={'gray.400'} >Address</Th>
                  <Th color={'gray.400'} >Tug’ilgan sanasi</Th>
                  <Th color={'gray.400'} >Passport</Th>
                  <Th color={'gray.400'} >Telefon</Th>
                  <Th color={'gray.400'} >RASMI</Th>
                  <Th color={'gray.400'} >KOPROQ</Th>

                </Tr>
              </Thead>
              <Tbody >
                {test.map((hodim , i) => (
                  <Tr key={i} borderBottom={'1px'} borderColor={'#E2E8F0'}  >
                      <Th color={'gray.500'}>{hodim.name}</Th>
                      <Th color={'gray.500'}>{hodim.location}</Th>
                      <Th color={'gray.500'}>{hodim.dataB}</Th>
                      <Th color={'gray.500'}>{hodim.pass}</Th>
                      <Th color={'gray.500'}>{hodim.tel}</Th>
                      <Th color={'gray.500'}><Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' width={'30px'} height={'30px'} /></Th>
                      <Th color={'gray.500'}><CiReceipt fontSize={'30px'} color={'#7364FF'} /></Th>

                  </Tr>
                ))}
                
              </Tbody>
          
            </Table>
          </TableContainer>
        </Box>

        <Box display={'flex'} alignItems={'center'} gap={'20px'} justifyContent={'flex-end'}>
          <Box display={'flex'} gap={'20px'} alignItems={'center'}>
            <Text color={'gray.400'}>Sahifasiga ma’lumotlar soni: 20 1-10  87 ta dan</Text>
            <Text color={'gray.400'}>1-10  87 ta dan</Text>
          </Box>
          <Box display={'flex'} gap={'20px'}>
            <Button bg={'#F1F2F4'} _hover={{bg: ''}} _active={{bg: ''}} color={'#5D5FEF'}>
              <ArrowBackIcon />
              Oldingisi
            </Button>
            <Button bg={'#F1F2F4'} _hover={{bg: ''}} _active={{bg: ''}} color={'gray'}>
              Keyingisi
              <ArrowForwardIcon />
            </Button>
          </Box>
        </Box>


      </Box>
    </Box>
  )
}

export default HodimlarAdmin