import { Box } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API } from '../../api/api'
import {  lapto, mobile } from '../../assets'
import DevCard from '../devCard/devCard'

const HomeBodyTarix = () => {
  const [data , setData] = useState([])

  useEffect(() => {
    const formData = new FormData()
    formData.append('sid' , 10)

    axios.get(`${API}api/org/ss/ss-by-org` , {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })


    

  } , [])

  


  return (
    <Box display={'flex'} gap={'30px'}  flexWrap={'wrap'}>

        <DevCard title={'Web (frontend)'} paragraph={'Sales ang marketing are two business functions within an organization. Sales ang marketing are two business functions within an organization.'} img={lapto} theme1={'Marketing'} theme2={'Sales'} date={'25 Sep, 2022'} viwe={'04'} mess={'08'} likes={'24'}/>



        
    </Box>
  )
}

export default HomeBodyTarix