import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { fan } from '../../assets'
import getImage from '../getPhoto/getPhoto'

const WebCard = ({title , desc , yonalish , count , photo}) => {
  const [photoData , setPhotoData] = useState('')
  const all = getImage(photo).then((preData) => {
    setPhotoData(preData)
  })

  return (
    <Box display={"flex"}   flexDirection={"column"} >
            
            <Box display={"flex"} alignItems={"center"} justifyContent={'space-between'} pt={"44px"}>
              <Box display={"flex"} alignItems={"center"} pl={"20px"}>
                <Image width={'60px'} height={'60px'} rounded={'10px'} src={`data:image/jpeg;base64,${photoData}`}></Image>
                <Box flexDirection={"column"} pl={"20px"}>
                  <Text
                    color={"#4D515A"}
                    fontSize={"2xl"}
                    fontWeight={"500"}
                    mb={"16px"}
                    lineHeight={"24px"}
                  >
                    {title}
                  </Text>
                  <Text
                    fontSize={"16px"}
                    fontWeight={"400"}
                    lineHeight={"24px"}
                    fontStyle={"normal"}
                  >
                    {desc}
                  </Text>
                </Box>
              </Box>
              <Box display={"flex"} width={'100px'} textAlign={'center'} bg={'#FFEAD2'} rounded={'20px'} color={'#FF9900'} fontWeight={'medium'} fontSize={'13px'} px={'10px'} py={'5px'}  flexDirection={"column"}>
                  {yonalish}
              </Box>
            </Box>
          </Box>
  )
}

export default WebCard