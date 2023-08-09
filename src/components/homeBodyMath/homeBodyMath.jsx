import { Box } from '@chakra-ui/react'
import React from 'react'
import HomeBodyMathCard from '../homeBodyMathCard/homeBodyMathCard'

const HomeBodyMath = () => {
  return (
    <Box display={'flex'} gap={'30px'} flexWrap={'wrap'} className='math'>
        <HomeBodyMathCard title={'Mental Arifmetika'} paragraph={'Sales ang marketing are two business functions within an organization.'}  theme1={'Marketing'} theme2={'Business'} date={'25 Sep, 2022'} viwe={'01'} mess={'0'} colorSis={'orange'} prosent={15} likes={'02'} />

        <HomeBodyMathCard title={'Management system development'} paragraph={'Sales ang marketing are two business functions within an organization.'}  theme1={'Marketing'} theme2={'Business'} date={'25 Sep, 2022'} viwe={'01'} colorSis={'green'}  mess={'0'} prosent={79} likes={'02'} />

        <HomeBodyMathCard title={'Make a sales plan'} paragraph={'Sales ang marketing are two business functions within an organization.'}  theme1={'Marketing'} theme2={'Business'} date={'25 Sep, 2022'} viwe={'01'} colorSis={'green'}  mess={'0'} prosent={0} likes={'02'} />

    </Box>
  )
}

export default HomeBodyMath