import { Box } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API } from '../../api/api'
import {  lapto, mobile } from '../../assets'
import DevCard from '../devCard/devCard'

const HomeBodyDev = () => {

  


  return (
    <Box display={'flex'} gap={'30px'}  flexWrap={'wrap'}>

        <DevCard title={'Web (frontend)'} paragraph={'Sales ang marketing are two business functions within an organization. Sales ang marketing are two business functions within an organization.'} img={lapto} theme1={'Marketing'} theme2={'Sales'} date={'25 Sep, 2022'} viwe={'04'} mess={'08'} likes={'24'}/>


        <DevCard title={'Mobile (Android & iOS)'} paragraph={'#5678904'} img={mobile} theme1={'Sprint'} theme2={'Design'} date={'25 Sep, 2022'} viwe={'04'} mess={'07'} likes={'22'}/>

        
    </Box>
  )
}

export default HomeBodyDev