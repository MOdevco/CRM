import { SearchIcon } from '@chakra-ui/icons'
import { Avatar, Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import ChatSideBar from '../chatSideBar/chatSideBar'

const ChartHeader = () => {
  return (
    <Box position={'fixed'} width={'100%'}>


        <Box  width={'81%'} display={'flex' } alignItems={'center'} gap={'100px'}  p={'30px'} height={'10vh'} bg={'white'}
         roundedTopStart={'10px'} roundedTopEnd={'10px'} borderBottom={'1px'} borderColor={'#E2E8F0'}>
            <Box  width={'372px'}border={'1px'} display={'flex'} alignItems={'center'} gap={'10x'} rounded={'10px'} borderColor={'#E2E8F0'} p={'10px'}>
                <SearchIcon color={'gray.500'} fontSize={'20px'} />
                <input autoFocus style={{outline: 'none' , paddingLeft: '10px' , width: '372px'}} type="text" placeholder='Search by user name' />
            </Box>

            <Box display={'flex'}alignItems={'center'} gap={'20px'}>
                <Box>
                    <Avatar name='Kola Tioluwani'
                src='https://bit.ly/tioluwani-kolawole' />
                </Box>
                <Box>
                    <Heading fontSize={'20px'}>Nataly Chaplack</Heading>
                    <Text color={'#A9B0BA'}>Director of the Lviv Forum</Text>
                </Box>
            </Box>
        </Box>
        

        <Box display={'flex'}>
            <Box  borderRight={'2px'} borderColor={'#E2E8F0'}  width={'450px'} position={'fixed'} p={'30px'} height={'77vh'} bg={'white'} >
                <ChatSideBar />
            </Box>

        </Box>



    </Box>
  )
}

export default ChartHeader