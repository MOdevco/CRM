import { Box, Button, Heading } from '@chakra-ui/react'
import React from 'react'
const AddHodimTitle = () => {

  

  return (
    <Box display={'flex'} flexWrap={'wrap'} alignItems={'center'} justifyContent={'space-between'}>
      <Heading>Yangi hodim</Heading>
      
      <Box display={'flex'} flexWrap={'wrap'}  alignItems={'flex-end'} gap={'20px'} flexDirection={'column'}> 
          <Box display={'flex'} flexWrap={'wrap'}  alignItems={'center'} gap={'20px'}>
              <Box>
                  <Button  bg={'#5D5FEF'} display={'flex'} width={'102px'} height={'52px'} alignItems={'center'} gap={'10px'} _hover={{bg:'#8d5fef'}} color={'white'}>
                      Saqlash
                  </Button>
              </Box>
          </Box>
      </Box> 
    </Box>
  )
}

export default AddHodimTitle