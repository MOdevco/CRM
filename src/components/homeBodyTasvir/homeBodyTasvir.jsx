import { Box, Spinner } from '@chakra-ui/react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Lottie from 'react-lottie'
import { API } from '../../api/api'
import DevCard from '../devCard/devCard'
import HomeBodyGeogCard from '../homeBodyGeogCard/homeBodyGeogCard'
import loader from '../loading.json'

const HomeBodyTasvir = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: loader,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const [data , setData] = useState([])
  const [loading , setLoading] = useState(true)
  useEffect(() => {

    axios.get(`${API}api/org/ss/ss-by-org?sid=14` , {
    
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
      {!loading && <Box display={'flex'} gap={'30px'} flexWrap={'wrap'} className='math'>

        {data.map((item , i) => (
          <Box key={i}>
            <DevCard title={item.subject.name} paragraph={item.description}  theme1={'Marketing'} theme2={'Business'} date={'25 Sep, 2022'} viwe={'01'} mess={'0'} colorSis={'orange'} prosent={15} likes={'02'} />
          </Box>
            
        ))}
      </Box>}

      {loading && <Box display={'flex'} justifyContent={'center'} alignItems={'center'} minHeight={'50vh'}>
        <Spinner width={'100px'} height={'100px'} />
      </Box>}

    </Box>
  )
}

export default HomeBodyTasvir