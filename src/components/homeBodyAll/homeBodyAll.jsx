import { Box } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API } from '../../api/api'
import DevCard from '../devCard/devCard'

const HomeBodyAll = () => {
    const [data , setData] = useState([])
    // const [dataAll , setDataAll] = useState('')
    // console.log(dataAll)

    useEffect(() => {
      axios.get(`${API}api/org/ss/all-by-org` , {
        headers: {
          "ngrok-skip-browser-warning": true,
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then((res) => {
        setData(res.data)
      })
    } , [])

    // useEffect(() => {
    //   axios.get(`${API}api/image/get?id=24` , {
    //     headers: {
    //       "ngrok-skip-browser-warning": true,
    //       "Access-Control-Allow-Origin": "*",
    //     }
    //   }).then((res) => {
    //     setDataAll(res.data)
    //   })
    // } , [])

    
  return (
    <Box display={'flex'} flexWrap={'wrap'} gap={'20px'}>
        
        {data.map((item , i) => (

            <DevCard key={i} title={item.subject.name} paragraph={item.description} img={item.imageStore} theme1={'Marketing'} theme2={'Sales'} date={'25 Sep, 2022'} viwe={'04'} mess={'07'} likes={'22'} />
        ))}
    </Box>
  )
}

export default HomeBodyAll