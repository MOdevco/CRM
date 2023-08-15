import { Box, Divider, Heading, Image, Text, WrapItem } from '@chakra-ui/react'
import { EditIcon } from '@chakra-ui/icons'
import React, { useEffect, useState } from 'react'
import { MdOutlineMoreHoriz } from 'react-icons/md'
import { lapto } from '../../assets'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import { AiOutlineClockCircle , AiOutlineEye , AiOutlineLike , AiFillDelete } from 'react-icons/ai'
import { BiMessageRounded } from 'react-icons/bi'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button
  } from '@chakra-ui/react'
import axios from 'axios'
import { API } from '../../api/api'
const DevCard = ({title , paragraph , img , theme1 , theme2 , date , viwe , mess , likes , handleDelete , delItem}) => {

    const [dataImg , setDataImg] = useState('')

    useEffect(() => {
        axios.get(`${API}api/image/get?id=${img}` , {
          headers: {
            "ngrok-skip-browser-warning": true,
            "Access-Control-Allow-Origin": "*",
          }
        }).then((res) => {
          setDataImg(res.data)
        })
      } , [])
    
  return (
    <Box >

        <Box width={{base: '100%' , xl: '350px'}} p={'15px'}  display={'flex'} flexDirection={'column'} gap={'20px'} bg={'white'} boxShadow={'1px 5px 7px -8px #40444D'} rounded={'8px'}>
            <Box color={'#40444D'} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                <Heading fontSize={'18px'}>{title}</Heading>
                
                <Menu >
                    {({ isOpen }) => (
                        <>
                        <MenuButton isActive={isOpen} >
                            <MdOutlineMoreHoriz cursor={'pointer'} fontSize={'40px'} />
                        </MenuButton>
                        <MenuList p={'10px'} display={'flex'} justifyContent={'space-evenly'} >
                            <Button onClick={() => handleDelete(delItem)} bg={'red'} _hover={{bg: 'red.300'}}><AiFillDelete color='white' fontSize={'25px'} /></Button>
                            <Button bg={'green.200'}><EditIcon color={'white'} /></Button>
                        </MenuList>
                        </>
                    )}
                </Menu>
            </Box>

            <Box>
                <Text>{paragraph}</Text>
            </Box>

            <Box>
                <Image width={'300px'} height={'200px'} src={`data:image/png;base64,${dataImg}`}></Image>
            </Box>

            <Box display={'flex'} alignItems={'center'}  justifyContent={'space-between'}>
                <Box display={'flex'} gap={'15px'}>
                    <Text fontSize={'10px'}  bg={'#EBF1FC'} p={'5px'} px={'15px'} rounded={'20px'} color={'#5D5FEF'}>{theme1}</Text>
                    <Text fontSize={'10px'}  bg={'#EBF1FC'} p={'5px'} px={'15px'} rounded={'20px'} color={'#5D5FEF'}>{theme2}</Text>
                </Box>
                <Box>
                    <AvatarGroup size='md' max={2}>
                        <Avatar width={'30px'} height={'30px'} name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                        <Avatar width={'30px'} height={'30px'} name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                    </AvatarGroup>
                </Box>
            </Box>
            <Divider />

            <Box color={'#4D515A'} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                <Box display={'flex'} alignItems={'center'} gap={'10px'}>
                    <AiOutlineClockCircle fontSize={'20px'} />
                    <Text fontSize={'13px'}>{date}</Text>
                </Box>

                <Box display={'flex'} alignItems={'center'} gap={'5px'}>
                    <AiOutlineEye fontSize={'20px'}  />
                    <Text>{viwe}</Text>
                    <BiMessageRounded fontSize={'20px'}  />
                    <Text>{mess}</Text>
                    <AiOutlineLike fontSize={'20px'}  />
                    <Text>{likes}</Text>
                </Box>
            </Box>

        </Box>

    </Box>
  )
}

export default DevCard