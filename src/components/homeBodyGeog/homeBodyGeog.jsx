import { Box } from '@chakra-ui/react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Lottie from 'react-lottie'
import { API } from '../../api/api'
import HomeBodyGeogCard from '../homeBodyGeogCard/homeBodyGeogCard'
import loader from '../loading.json'

const HomeBodyGeog = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: loader,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const [loader2 , setLoader2] = useState(true)
  const [data , setData] = useState([])
  useEffect(() => {

    axios.get(`${API}api/org/ss/ss-by-org?sid=11` , {
    
      headers: {

        "ngrok-skip-browser-warning": true,
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    }).then((res) => {
      setData(res.data)
    })
  } , [])
  return (
    <Box display={'flex'} gap={'30px'} flexWrap={'wrap'} className='math'>

      {data.map((item , i) => (
        <Box>
        {!loader2 && <HomeBodyGeogCard title={item.subject.name} paragraph={item.description}  theme1={'Marketing'} theme2={'Business'} date={'25 Sep, 2022'} viwe={'01'} mess={'0'} colorSis={'orange'} prosent={15} likes={'02'} />}

         {loader2 && <Lottie options={defaultOptions} />}
        </Box>
          
      ))}



    </Box>
  )
}

export default HomeBodyGeog