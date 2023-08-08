import { Box } from '@chakra-ui/react'
import React from 'react'
import { kompani } from '../../assets'
import DevCard from '../devCard/devCard'

const HomeBodyKomp = () => {
  return (
    <Box>
        <DevCard title={'Placement of windows in the store'} paragraph={'https://paptic.com/applications/product-packaging/?gclid=CjwKCAjwkaSaBhA4EiwALBgQaFrgzBaMs-MSNf03Jh_mtzxZizrajbniP0BX18C48SDGtbmgSXvW7RoCPgkQAvD_BwE'} img={kompani} theme1={'Marketing'} theme2={'Design'} date={'25 Sep, 2022'} viwe={'04'} mess={'07'} likes={'22'}/>
    </Box>
  )
}

export default HomeBodyKomp