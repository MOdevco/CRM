import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { logo } from '../../assets'
import SidebarPages from '../sidebarPages/sidebarPages'
import SidebarResurslar from '../sidebarResurslar/sidebarResurslar'
import SidebarSetingis from '../sidebarSetings/sidebarSetingis'

const Sidebar = () => {
  return (
    <Box position={'fixed'} display={{base: 'none' , xl: 'block'}} zIndex={'111'} width={'300px'} px={'40px'} height={'100vh'} borderRight={'2px'} borderColor={'gray.300'} bg={'white'} >
        <Box display={'flex'} flexDirection={'column'} alignItems={'flex-start'} py={'30px'}>
            <Box  className='logo'_hover={{transform: 'rotate(5deg)' , transition: '0.5s'}}>
                <NavLink to={'/'}>
                    <Image width={'147px'}  src={logo}></Image>
                </NavLink>
            </Box>

            <Box width={'100%'} >
                <SidebarPages />
            </Box>
            <Box  width={'100%'}>
                <SidebarResurslar />
            </Box>
            <Box  width={'100%'}>
                <SidebarSetingis />
            </Box>
        </Box>   
        
    </Box>
  )
}

export default Sidebar