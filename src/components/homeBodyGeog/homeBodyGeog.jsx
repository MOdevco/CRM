import { Box } from '@chakra-ui/react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { API } from '../../api/api'
import HomeBodyGeogCard from '../homeBodyGeogCard/homeBodyGeogCard'

const HomeBodyGeog = () => {
  const [data , setData] = useState([])
  console.log(data)
  useEffect(() => {

    axios.get(`${API}api/org/ss/ss-by-org?sid=11` , {
    
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    }).then((res) => {
      setData(res.data)
    })
  } , [])
  return (
    <Box display={'flex'} gap={'30px'} flexWrap={'wrap'} className='math'>

      {data.map((item , i) => (
        <HomeBodyGeogCard title={item.subject.name} paragraph={item.description}  theme1={'Marketing'} theme2={'Business'} date={'25 Sep, 2022'} viwe={'01'} mess={'0'} colorSis={'orange'} prosent={15} likes={'02'} />
      ))}


    </Box>
  )
}

export default HomeBodyGeog