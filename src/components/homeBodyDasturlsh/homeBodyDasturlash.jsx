import { Box, Spinner } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API } from '../../api/api'
import DevCard from '../devCard/devCard'

const HomeBodyDasturlash = ({id}) => {
  const [data , setData] = useState([])
  const [loading , setLoading] = useState(true)
  useEffect(() => {


    axios.get(`${API}api/org/ss/ss-by-org?sid=${id}` , {
    
      headers: {
        "ngrok-skip-browser-warning": true,
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    }).then((res) => {
      setData(res.data)
      setLoading(false)
    })
  } , [])

  


  return (
    <Box>
      {!loading && <Box display={'flex'} gap={'30px'}  flexWrap={'wrap'}>

        {data.map((item , i) => (
          <DevCard key={i} title={item.subSubject.name} paragraph={item.description} img={item.imageStore} theme1={'Marketing'} theme2={'Sales'} date={'25 Sep, 2022'} viwe={'04'} mess={'08'} likes={'24'}/>

        ))}
          
      </Box>}

      {loading && <Box display={'flex'} justifyContent={'center'} alignItems={'center'} minHeight={'50vh'}>
        <Spinner width={'100px'} height={'100px'} />
      </Box>}


    </Box>
  )
}

export default HomeBodyDasturlash