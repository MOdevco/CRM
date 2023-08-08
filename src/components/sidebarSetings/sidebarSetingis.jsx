import { Box, Button, Text } from '@chakra-ui/react'
import { AiOutlinePlus } from 'react-icons/ai'


import { AiFillSetting } from 'react-icons/ai'

const SidebarSetingis = () => {
  return (
    <Box pt={'50px'} >

        
        <Box >
            <Box display={'flex'} color={'#7B8190'} alignItems={'center'} justifyContent={'space-between'}>
                <Text fontWeight={'bold'}>SETTINGS</Text>
                <AiOutlinePlus />
            </Box>

            <Box >
                <Button fontSize={'18px'} fontWeight={'500'} display={'flex'} alignItems={'center'} bg={'transparent'}  gap={'15px'}  _hover={{bg: 'transparent'}}>
                    <AiFillSetting fontSize={'25px'}  />
                    My Profile
                </Button>
            </Box>

        </Box>


    </Box>
  )
}

export default SidebarSetingis