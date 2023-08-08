import { Box } from '@chakra-ui/react'
import React from 'react'
import AddHodimBody from '../components/addHodimBody/addHodimBody'
import AddHodimTitle from '../components/addHodimTitle/addHodimTitle'
import AddHodimTopLink from '../components/addHodimTopLink/addHodimTopLink'

const YangiHodim = () => {
  return (
    <Box width={'100%'} overflow={'auto'} minHeight={'100vh'}>
        <Box pt={'100px'} width={'100%'} px={'20px'} display={'flex'} flexDirection={'column'} gap={'15px'} pl={{base: '10' , xl: '320px'}}>
            <AddHodimTopLink />

            <AddHodimTitle />

            <AddHodimBody />

        </Box>
    </Box>
  )
}

export default YangiHodim