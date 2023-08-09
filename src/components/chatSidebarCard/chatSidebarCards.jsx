import { Box, Avatar, Text, Heading } from '@chakra-ui/react'

const ChatSidebarCards = ({text, number, flex, bg}) => {
  return (
    <Box rounded={'9px'} display={'flex'} alignItems={'center'} justifyContent={'space-between'} w={'372px'} h={'60px'} bg={bg} px={'10px'}>
          <Box display={'flex'} alignItems={'center'} gap={'7px'}>
            <Avatar w={'40px'} h={'40px'} />
            <Heading fontSize={'20px'}>{text}</Heading>
          </Box>
          <Box w={'43px'} h={'22px'} rounded={'20px'} display={flex} alignItems={'center'} justifyContent={'center'} color={'#fff'} bg={'#5D5FEF'}><Text>{number}</Text></Box>
          
        </Box>
  )
}

export default ChatSidebarCards
