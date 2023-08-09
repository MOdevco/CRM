import { Box, Avatar, Text, Heading } from '@chakra-ui/react'
import React from 'react'
import ChatSidebarCards from '../chatSidebarCard/chatSidebarCards'
import SidebarHashtag from '../SidebarHashtag/SidebarHashtag'

const ChatSideBar = () => {
  return (
    <Box>
      <Heading fontSize={'16px'} fontWeight={'600'} color=
      {'#4E5564'}>DIRECT MASSAGES</Heading>
      <Box mt={'20px'}>
        <ChatSidebarCards text={'Nataly Chaplack'} bg={'#E0E7FF80'} flex={'flex'} number={'+10'} />
        <ChatSidebarCards text={'Shchastislav Yurchuk'} bg={'transparent'} flex={'flex'} number={'+2'} />
        <ChatSidebarCards text={'Apanovych Lubomudr'} bg={'transparent'} flex={'none'} />
        <ChatSidebarCards text={'Mary Croostina'} bg={'transparent'} flex={'flex'} number={'+4'}/>
        <ChatSidebarCards text={'Yulian Yalovenko'} bg={'transparent'} flex={'none'}  />
        <ChatSidebarCards text={'Diana Berigan'} bg={'transparent'} flex={'none'} />
      </Box>

      <Heading mt={'35px'} fontSize={'16px'} color={'#4E5564'}>CHANELS</Heading>
      <Box mt={'25px'}>
        <SidebarHashtag text={'#  Daily_report'} />
        <SidebarHashtag text={'#  Salesrang'} />
        <SidebarHashtag text={'#  Forum_team_saleer'} />
        <SidebarHashtag text={'#  Managers_flud'} />
      </Box>
    </Box>
  )
}

export default ChatSideBar