import { Box } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API } from '../../api/api'
import {  lapto, mobile } from '../../assets'
import DevCard from '../devCard/devCard'

const HomeBodyTarix = () => {
  const [data , setData] = useState([])
  useEffect(() => {


    axios.get(`${API}api/org/ss/ss-by-org?sid=10` , {
    
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    }).then((res) => {
      setData(res.data)
    })
  } , [])

  


  return (
    <Box display={'flex'} gap={'30px'}  flexWrap={'wrap'}>

      {data.map((item , i) => (
        <DevCard title={item.subject.name} paragraph={item.description} img={item.imageStore} theme1={'Marketing'} theme2={'Sales'} date={'25 Sep, 2022'} viwe={'04'} mess={'08'} likes={'24'}/>

      ))}




        
    </Box>
  )
}

export default HomeBodyTarix