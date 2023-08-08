import { Box, Button, Heading, Input, Text, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Select
} from '@chakra-ui/react'
import { AiOutlineCloudUpload , AiOutlineFileImage } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'

const HomeTitle = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  const [image , setImage] = useState(null)
  const [fileName , setFileName] = useState("Rasim mavjut emas!")
  const [size, setSize] = React.useState('md')

  const handleSizeClick = (newSize) => {
    setSize(newSize)
    onOpen()
  }

  const sizes = ['xxl' ]

  return (
    <Box display={'flex'} flexWrap={'wrap'} alignItems={'center'} justifyContent={'space-between'}>
        <Heading>Fan va yo’nalishlar</Heading>
        


        {sizes.map((size) => (
          <Button onClick={() => handleSizeClick(size)} height={'52px'} bg={'#5D5FEF'} color={'white'} _hover={{bg: '#8D5FEF'}}>
            <AiOutlinePlus />
            Yangi fan yo’nalish biriktirish
          </Button>
      ))}

          <Modal  onClose={onClose} size={size} isOpen={isOpen}>
            <ModalOverlay  />
            <ModalContent p={'15px'} mx={'470px'}>
              <Box display={'flex'} justifyContent={'flex-end'}>
                <Button  width={'100px'} bg={'#5D5FEF'} _hover={{bg: '#8D5FEF'}} color={'white'}> Saqlash</Button>
              </Box>

              <ModalBody pb={6} display={'flex'} flexDirection={'column'}gap={'20px'} >
                <FormControl display={'flex'} width={'100%'} flexWrap={'wrap'} gap={'10px'} justifyContent={'space-between'}>
                  <Box>
                    <FormLabel color={'#A6A6A6'}>Fan</FormLabel>
                    <Select width={'400px'}>
                      <option value='option1'>Dasturlash</option>
                      <option value='option2'>Dasturlash</option>
                      <option value='option3'>Dasturlash</option>
                    </Select>
                  </Box>

                  <Box>
                    <FormLabel color={'#A6A6A6'}>Yo’nalish</FormLabel>
                    <Select width={'400px'}>
                      <option value='option1'>Backend</option>
                      <option value='option2'>Frontend</option>
                      <option value='option3'>Dizayn</option>
                    </Select>
                  </Box>
                </FormControl>

                <FormControl display={'flex'} width={'100%'} flexWrap={'wrap'} gap={'10px'} justifyContent={'space-between'}>
                  <Box>
                    <FormLabel color={'#A6A6A6'}>Ochilgan sana</FormLabel>
                    <Input  width={'400px'} type="datetime-local"/>
                  </Box>

                  <Box>
                    <FormLabel color={'#A6A6A6'}>Yopilish sanasi</FormLabel>
                    <Input  width={'400px'} type="datetime-local"/>
                  </Box>
                </FormControl>

                <FormControl display={'flex'} width={'100%'} flexWrap={'wrap'} gap={'10px'} justifyContent={'space-between'}>
                  <Box>
                    <FormLabel color={'#A6A6A6'}>Qisqacha ma’lumot</FormLabel>
                    <textarea placeholder="Ma'lumot..." style={{border: '1px solid #E2E8F0' , outline: 'none' , width: '100%' , padding: '10px'}} name="" id="" cols="117" rows="5"></textarea>
                  </Box>

                </FormControl>

                <Box border={'2px'} width={'100%'} onClick={() => document.querySelector('.input-field').click()}display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} height={'300px'}  borderColor={'#5D5FEF'} borderStyle={'dashed'}>
                  <form action="" >
                    <input  className='input-field'  hidden type="file" accept='image/*' onChange={({target: {files}}) => {
                      files[0] && setFileName(files[0].name)
                      if(files) {
                        setImage(URL.createObjectURL(files[0]))
                      }
                    }}/>
                    {image ? 
                    <img src={image} width={'200px'} height={'200px'} alt={fileName} />
                    : (
                      <Box border={'1px'} cursor={'pointer'} borderColor={'#CCD3DB'} rounded={'10px'} p={'20px'}>
                        <Text fontSize={'18px'} color={'#726BEA'}>Rasim Tanlang</Text>
                      </Box>
                    )
                  }
                  </form>

                </Box>
                  <Box display={'flex'} alignItems={'center'} gap={'10px'}>
                    <AiOutlineFileImage fontSize={'25px'} />
                    <Text>{fileName}</Text>
                    <MdDelete onClick={() => {
                      setFileName('Rasim mavjut emas!')
                      setImage(null)
                    }} color='red' fontSize={'25px'} />
                  </Box>


              
              </ModalBody>
             
            </ModalContent>
          </Modal>


    </Box>
  )
}

export default HomeTitle