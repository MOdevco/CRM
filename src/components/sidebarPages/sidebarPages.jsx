import { Box, Button, Image, Text } from '@chakra-ui/react'
import { AiOutlinePlus } from 'react-icons/ai'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
import { LuPieChart } from 'react-icons/lu'
import { BiBarChartSquare } from 'react-icons/bi'
import { FiBox } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'
const SidebarPages = () => {
  return (
    <Box pt={'50px'} >

        
        <Box display={'flex'} flexDirection={'column'} gap={'15px'} >
            <Box display={'flex'} color={'#7B8190'} alignItems={'center'} justifyContent={'space-between'}>
                <Text fontWeight={'bold'}>PAGES</Text>
                <AiOutlinePlus />
            </Box>

            <Box >
                <Button fontSize={'15px'} fontWeight={'500'}display={'flex'} alignItems={'center'} bg={'transparent'}  gap={'15px'}  _hover={{bg: 'transparent'}}>
                    <LuPieChart fontSize={'25px'} />
                    Qabul
                </Button>
            </Box>
            <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                <Button fontSize={'15px'} fontWeight={'500'} display={'flex'} alignItems={'center'} bg={'transparent'}  gap={'15px'} _hover={{bg: 'transparent'}}>
                    <BiBarChartSquare fontSize={'25px'}  />
                    Analitika
                </Button>
                <Box>
                    <Text bg={'#10B981'} fontSize={'14px'}  rounded={'20px'} color={'white'} width={'49px'} cursor={'pointer'} height={'23px'} textAlign={'center'} >new</Text>
                </Box>
            </Box>
            

            <Accordion allowToggle>
                <AccordionItem  border={'none'} >
                    <AccordionButton _expanded={{ bg: '#7364FF', color: 'white' }} _hover={{bg: ''}} roundedTop={'20px'}  >
                        <Box _expanded={{ bg: '#7364FF', color: 'white' }} as="span" flex='1' gap={'15px'} display={'flex'} alignItems={'center'}  textAlign='left'>
                            <FiBox fontSize={'25px'}  />
                            <Text fontSize={'15px'} fontWeight={'500'}>Ichki tizim</Text>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel roundedBottom={'20px'}  bg={'#7364FF'}>
                        <NavLink style={({isActive}) => {return{color: isActive ? 'white' : '' , textDecoration: isActive ? 'underline' : ''}}} to={'/hodimlar'}> 
                            <Text color={'white'}>Xodimlar</Text>
                        </NavLink>
                        <Text color={'white'}>O'qituvchilar</Text>
                        <Text color={'white'}>Dars Jadvallari</Text>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>

      




        </Box>


    </Box>
  )
}

export default SidebarPages