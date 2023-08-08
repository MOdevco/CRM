import { Box } from '@chakra-ui/react'
import React from 'react'
import DevCard from '../devCard/devCard'

const HomeBodyEn = () => {
  return (
    <Box display={'flex'} gap={'30px'} flexWrap={'wrap'}>

        <DevCard title={'Improvement articles'} paragraph={'Considering changing your packing line to a fiber-based solution? Perhaps you have tested some heatsealable papers and noticed they tear easily on your current operating line?'}  theme1={'Development'} theme2={'Business'} date={'25 Sep, 2022'} viwe={'01'} mess={'0'} likes={'02'}/>

        <DevCard title={'Attract new consumers'} paragraph={'Sales ang marketing are two business functions within an organization. Sales ang marketing are two business functions within an organization.'}  theme1={'Development'} theme2={'Business'} date={'25 Sep, 2022'} viwe={'01'} mess={'0'} likes={'02'}/>


    </Box>
  )
}

export default HomeBodyEn