import { Box, Button, Image, Text } from '@chakra-ui/react'
import { AiOutlinePlus } from 'react-icons/ai'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'
import { FiMessageCircle } from 'react-icons/fi'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { LiaWalletSolid } from 'react-icons/lia'
import { GoTasklist } from 'react-icons/go'
import { NavLink } from 'react-router-dom'
const SidebarResurslar = () => {
  return (
    <Box pt={'50px'} >

        
        <Box display={'flex'} flexDirection={'column'} gap={'15px'} >
            <Box display={'flex'} color={'#7B8190'} alignItems={'center'} justifyContent={'space-between'}>
                <Text fontWeight={'bold'}>RESURSLAR</Text>
                <AiOutlinePlus />
            </Box>



            <Accordion allowToggle>
                <AccordionItem  border={'none'} >
                    <AccordionButton _expanded={{ bg: '#7364FF', color: 'white' }} _hover={{bg: ''}} rounded={'20px'}  >
                        <Box _expanded={{ bg: '#7364FF', color: 'white' }} as="span" flex='1' gap={'15px'} display={'flex'} alignItems={'center'}  textAlign='left'>
                            <LiaWalletSolid fontSize={'25px'}  />
                            <Text fontSize={'15px'} fontWeight={'500'}>Fan va yo’nalishlar</Text>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    {/* <AccordionPanel roundedBottom={'20px'}  bg={'#7364FF'}>
                        <Text color={'white'}>Xodimlar</Text>
                        <Text color={'white'}>O'qituvchilar</Text>
                        <Text color={'white'}>Dars Jadvallari</Text>
                    </AccordionPanel> */}
                </AccordionItem>
            </Accordion>

            <NavLink to={'/chat'}>
                <Accordion allowToggle>
                    <AccordionItem  border={'none'} >
                        <AccordionButton _expanded={{ bg: '#7364FF', color: 'white' }} _hover={{bg: ''}} rounded={'20px'}  >
                            <Box _expanded={{ bg: '#7364FF', color: 'white' }} as="span" flex='1' gap={'15px'} display={'flex'} alignItems={'center'}  textAlign='left'>
                                <FiMessageCircle fontSize={'25px'}  />
                                
                                <Text fontSize={'15px'} fontWeight={'500'}>Inventorlar</Text>
                                <Text bg={'#7364FF'} fontSize={'15px'}  rounded={'20px'} color={'white'} width={'49px'} cursor={'pointer'} height={'23px'} textAlign={'center'} >+16</Text>
                            </Box>
                        </AccordionButton>
                    </AccordionItem>
                </Accordion>
            </NavLink>

            <NavLink to={'/chat'} style={({isActive}) => {return{color: isActive ? 'white' : ''}}} >
                        <FiMessageCircle fontSize={'25px'}  />

                        <Text fontSize={'15px'}></Text>
                       
            </NavLink>

            <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                <Button fontSize={'18px'} fontWeight={'500'} display={'flex'} alignItems={'center'} bg={'transparent'}  gap={'15px'} _hover={{bg: 'transparent'}}>
                    <FaRegCalendarAlt fontSize={'25px'}  />
                    <Text fontSize={'15px'}>Dars jadvallari</Text>
                    
                </Button>
            </Box>
            <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                <Button fontSize={'18px'} fontWeight={'500'} display={'flex'} alignItems={'center'} bg={'transparent'}  gap={'15px'} _hover={{bg: 'transparent'}}>
                    <GoTasklist fontSize={'25px'}  />
                    <Text fontSize={'15px'}>Tasks</Text>
                </Button>
            </Box>
            

            

      




        </Box>


    </Box>
  )
}

export default SidebarResurslar