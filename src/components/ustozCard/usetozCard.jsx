import { Avatar, Box, Button, Image, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import getImage from '../getPhoto/getPhoto'

const UsetozCard = ({name , tel , malumot , ph1 , photo , id , setPreId}) => {

  const [photoData , setPhotoData] = useState('')
  const all = getImage(photo).then((preData) => {
    setPhotoData(preData)
  })
  
  return (
    <Box onClick={() => setPreId(id)}>
         <Box display={"flex"} alignItems={"center"}justifyContent={'space-between'} pt={"44px"}>
          <Box display={"flex"} alignItems={"center"} pl={"20px"}>
            <Image width={'60px'} height={'60px'} rounded={'10px'} src={`data:image/jpeg;base64,${photoData}`}></Image>
            <Box flexDirection={"column"} pl={"20px"}>
              <Text
                color={"#4D515A"}
                fontSize={"20px"}
                fontWeight={"500"}
                mb={"16px"}
                lineHeight={"24px"}
              >
                {name}
              </Text>
              <Text
                fontSize={"16px"}
                fontWeight={"400"}
                lineHeight={"24px"}
                fontStyle={"normal"}
              >
                {ph1}{tel}
              </Text>
            </Box>
          </Box>
          <Box display={"flex"}  bg={'#E0F2FE'} rounded={'20px'} color={'#178DCC'} fontWeight={'medium'} fontSize={'13px'} px={'10px'} py={'5px'}  flexDirection={"column"}>
            {malumot}
          </Box>
        </Box>
    </Box>
  )
}

export default UsetozCard