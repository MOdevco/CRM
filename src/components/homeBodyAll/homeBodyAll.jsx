import { Box } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API } from '../../api/api'
import { kompani, lapto, mobile } from '../../assets'
import DevCard from '../devCard/devCard'
import HomeBodyMathCard from '../homeBodyMathCard/homeBodyMathCard'

const HomeBodyAll = () => {
    const [data , setData] = useState([])

  useEffect(() => {
    axios.get(`${API}api/org/ss/all-by-org` , {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).then((res) => {
      setData(res.data)
    })
  } , [])
  return (
    <Box display={'flex'} gap={'20px'}>
        
        {data.map((item , i) => (
            <DevCard title={item.subject.name} paragraph={item.description} img={item.imageStore} theme1={'Marketing'} theme2={'Sales'} date={'25 Sep, 2022'} viwe={'04'} mess={'07'} likes={'22'}/>
        ))}
                {/* <HomeBodyMathCard title={'Make a sales plan'} paragraph={'Sales ang marketing are two business functions within an organization.'}  theme1={'Marketing'} theme2={'Business'} date={'25 Sep, 2022'} viwe={'01'} colorSis={'green'}  mess={'0'} prosent={0} likes={'02'} /> */}

            {/* <Box pt={{md: '40px', xl: '0',}} display={'flex'} flexDirection={'column'} gap={'40px'}>
                <HomeBodyMathCard title={'Mental Arifmetika'} paragraph={'Sales ang marketing are two business functions within an organization.'}  theme1={'Marketing'} theme2={'Business'} date={'25 Sep, 2022'} viwe={'01'} mess={'0'} colorSis={'orange'} prosent={15} likes={'02'} />

                <HomeBodyMathCard title={'Management system development'} paragraph={'Sales ang marketing are two business functions within an organization.'}  theme1={'Marketing'} theme2={'Business'} date={'25 Sep, 2022'} viwe={'01'} colorSis={'green'}  mess={'0'} prosent={79} likes={'02'} />
            </Box>

            <Box pt={{md: '40px', '2xl': '0'}} display={'flex'} flexDirection={'column'} gap={'40px'}>
                <DevCard title={'Mobile (Android & iOS)'} paragraph={'#5678904'} img={mobile} theme1={'Sprint'} theme2={'Design'} date={'25 Sep, 2022'} viwe={'04'} mess={'07'} likes={'22'}/>

                <DevCard title={'Attract new consumers'} paragraph={'Sales ang marketing are two business functions within an organization. Sales ang marketing are two business functions within an organization.'}  theme1={'Development'} theme2={'Business'} date={'25 Sep, 2022'} viwe={'01'} mess={'0'} likes={'02'}/>
            </Box>
        
            <Box mt={{md: '40px', lg: '0', xl: '-110px', '2xl': '0'}} display={'flex'} flexDirection={'column'} gap={'40px'}>
                <DevCard title={'Improvement articles'} paragraph={'Considering changing your packing line to a fiber-based solution? Perhaps you have tested some heatsealable papers and noticed they tear easily on your current operating line?'}  theme1={'Development'} theme2={'Business'} date={'25 Sep, 2022'} viwe={'01'} mess={'0'} likes={'02'}/>

                <DevCard title={'Placement of windows in the store'} paragraph={'https://paptic.com/applications/product-packaging/?gclid=CjwKCAjwkaSaBhA4EiwALBgQaFrgzBaMs-MSNf03Jh_mtzxZizrajbniP0BX18C48SDGtbmgSXvW7RoCPgkQAvD_BwE'} img={kompani} theme1={'Marketing'} theme2={'Design'} date={'25 Sep, 2022'} viwe={'04'} mess={'07'} likes={'22'}/>

            </Box> */}


    </Box>
  )
}

export default HomeBodyAll