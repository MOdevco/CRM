import { Box } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const HomeLinkKategori = () => {
  return (
    <Box color={'#4D515A'} fontSize={'18px'} display={'flex'} gap={'40px'}>
        <NavLink>Barchasi</NavLink>
        <NavLink>Dasturlash</NavLink>
        <NavLink>Matematika</NavLink>
        <NavLink>Ingliz tili</NavLink>
        <NavLink>Kompyuter savodxonligi</NavLink>
    </Box>
  )
}

export default HomeLinkKategori