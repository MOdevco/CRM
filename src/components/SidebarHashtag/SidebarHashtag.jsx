import { Box, Avatar, Text, Heading } from '@chakra-ui/react'

const SidebarHashtag = ({text}) => {
  return (
    <Box w={'372px'} h={'42px'}>
      <Heading fontSize={'20px'} color={'#1E293B'}>{text}</Heading>
    </Box>
  )
}

export default SidebarHashtag
