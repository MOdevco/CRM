import { AddIcon, SearchIcon } from "@chakra-ui/icons"
import { Box, Button, FormControl, FormLabel, Heading, Input, useDisclosure  } from "@chakra-ui/react"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
import { useRef, useState } from "react"
import { NavLink } from "react-router-dom"



const HodimlarTitle = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = useRef(null)
    const finalRef = useRef(null)
    const [size, setSize] = useState('md')
    const handleSizeClick = (newSize) => {
        setSize(newSize)
        onOpen()
      }
    
      const sizes = ['md']
    return (
        <Box >
            
            <Box display={'flex'} flexWrap={'wrap'} justifyContent={'space-between'} >
                <Heading>Hodimlar</Heading>
                
                <Box display={'flex'} flexWrap={'wrap'}  alignItems={'flex-end'} flexDirection={'column'}> 
                    <Box display={'flex'} flexWrap={'wrap'}  alignItems={'center'} gap={'20px'}>
                        <Box display={'flex'} width={{base: '100%' , xl: '372px'}} height={'52px'} alignItems={'center'} gap={'10px'} border={'1px'} borderColor={'#E2E8F0'} p={'10px'} rounded={'10px'} bg={'#fff'}>
                            <SearchIcon color={'#64748B'} />
                            <input autoFocus type="text" className="inp" placeholder="Hodimlar bo’yicha qidirish..." style={{outline: 'none' , width: '100%'}} />
                        </Box>
                        <Box>
                            <NavLink to={'/yangiHodim'}>
                                <Button bg={'#10B981'} display={'flex'} width={'152px'} height={'52px'} alignItems={'center'} gap={'10px'} _hover={{bg: '#40B981'}} color={'white'}>
                                        <AddIcon />
                                        Yangi hodim
                                </Button>
                            </NavLink>
                        </Box>
                    </Box>
                    
                    <Box  position={'relative'} zIndex={'1000'}>
                        {sizes.map((size) => (
                            <Button  onClick={() => handleSizeClick(size)}key={size}my={7} bg={'#7364FF'} _hover={{bg: '#5364FF'}} height={'42px'} color={'white'} display={'flex'} gap={'10px'}>
                                <AddIcon />
                                Lavozimga taynlash
                            </Button>
                        ))}
                        

                        <Modal onClose={onClose} isOpen={isOpen} isCentered>
                            <ModalOverlay />
                            <ModalContent>
                            <ModalHeader borderBottom={'8px'} borderColor={'gray'}>Jismoniy shahslarni lavozimga ta’yinlash</ModalHeader>
                            <ModalBody display={'flex'} flexDirection={'column'} gap={'15px'}>

                                <FormControl>
                                    <FormLabel>Jismoniy shahslar</FormLabel>
                                    <Select >
                                        <option value='option1'>Tursunali Xorinaliyev Xaydaraliyevich</option>
                                        <option value='option1'>Tursunali Xorinaliyev Xaydaraliyevich</option>
                                        <option value='option2'>Muhammadali Anvarov Jahongirovich</option>
                                    </Select>
                                </FormControl>

                                <FormControl>
                                    <FormLabel>Lavozimlar</FormLabel>
                                    <Select >
                                        <option value='option1'>O’qituvchi</option>
                                        <option value='option1'>Qorovul</option>
                                        <option value='option1'>Farosh</option>
                                    </Select>
                                </FormControl>

                                <FormControl mt={4}>
                                    <FormLabel>Sanadan boshlab</FormLabel>
                                    <Input type={'date'} />
                                </FormControl>

                                <FormControl mt={4}>
                                    <FormLabel>Sanagacha</FormLabel>
                                    <Input disabled type={'date'} />
                                </FormControl>

                            </ModalBody>
                            <ModalFooter display={'flex'} gap={'20px'}>
                                <Button bg={'#DBDBDB'} onClick={onClose}>Bekor qilish</Button>
                                <Button bg={'#10B981'} _hover={{bg: '#29B981'}} color={'white'}>Biriktirish</Button>
                            </ModalFooter>
                            </ModalContent>
                        </Modal>
                    </Box>
                </Box>
            </Box>

        </Box>
    )
}



export default HodimlarTitle