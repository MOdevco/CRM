import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import ChartHeader from '../components/chatHeader/chartHeader'


const Chat = () => {
  return (
    <Box width={'100%'} minHeight={'100vh'}>
        <Flex>
            <Box pt={'100px'} width={'100%'} px={'20px'} display={'flex'} flexDirection={'column'} gap={'15px'} pl={{base: '10' , xl: '320px'}}>
                <ChartHeader />

            </Box>
        </Flex>
    </Box>
  )
}

export default Chat