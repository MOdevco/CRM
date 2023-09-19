import { Box, Heading, Image, Text } from '@chakra-ui/react'
import { useState } from 'react'
import getImage from '../getPhoto/getPhoto';


const ModalProp = ({imageStore , name , fan}) => {
    
  const [photoData, setPhotoData] = useState("");
  const all = getImage(imageStore).then((preData) => {
    setPhotoData(preData);
  });

  return (
    <Box>
        <Box>
          <Image width={'60px'} height={'60px'} rounded={'10px'} src={`data:image/jpeg;base64,${photoData}`}></Image>
          <Text fontSize={"22px"}>{name}</Text>
          <Text>{fan}</Text>
        </Box>
    </Box>
  )
}

export default ModalProp