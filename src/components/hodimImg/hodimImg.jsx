import { Box, Image } from '@chakra-ui/react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { API } from '../../api/api'



const HodimImg = ({img}) => {
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
    <Box>

        <Image rounded={'50%'} width={'30px'} height={'30px'} src={`data:image/png;base64,${dataImg}`}></Image>

    </Box>
  )
}

export default HodimImg