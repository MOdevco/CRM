import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineRight } from 'react-icons/ai'

const HomeTopLink = () => {
  return (
    <Box display={'flex'} gap={'20px'}>
        <NavLink>
            <Text display={'flex'} alignItems={'center'} gap={'10px'} _hover={{color: '#5D5FEF'}}>
                Home
                <AiOutlineRight />
            </Text>
        </NavLink>
        <NavLink to={"/Fanlar"}>
            <Text display={'flex'} alignItems={'center'} gap={'10px'} _hover={{color: '#5D5FEF'}}>
                Fan va yo’nalishlar
                <AiOutlineRight />
            </Text>
        </NavLink>
    </Box>
  )
}

export default HomeTopLink