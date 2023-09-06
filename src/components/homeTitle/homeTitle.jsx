import { Box, Button, Heading, Input, Select, Text, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { useToast } from '@chakra-ui/react'
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
} from '@chakra-ui/react'
import { AiOutlineCloudUpload , AiOutlineFileImage } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'
import axios from 'axios'
import { API } from '../../api/api'

const HomeTitle = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [size, setSize] = React.useState('md')
  const [data , setData] = useState([])
  const [burn , setBurn] = useState([])
  const toast = useToast()
  const [dataItem , setDataItem] = useState({sid: '' , ssid: '' , description: '' , photo: ''})
  const [valid , setValid] = useState(false)

  const handleFile = (e) => {
    setDataItem({...dataItem, photo: e.target.files[0]})
  }


  useEffect(() => {
      axios.get(`${API}api/subjects/all` , {
          headers: {
              "ngrok-skip-browser-warning": true,
              "Access-Control-Allow-Origin": "*",
              Authorization: `Bearer ${localStorage.getItem('token')}`
          }
      }).then((res) => {
          setData(res.data)
      })
  } ,[API])

  useEffect(() => {
    axios.get(`${API}api/subjects/sub/all` , {
        headers: {
            "ngrok-skip-browser-warning": true,
            "Access-Control-Allow-Origin": "*",
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    }).then((res) => {
        setBurn(res.data)
    })
} ,[API])


    

  const handleSubmit = () => {
      if(dataItem.description === '1') {
        setValid(false)
      }
      if(dataItem.description === '') {
          setValid(true)
      } else {
        
        const formData = new FormData()
        formData.append("sid" , dataItem.sid)
        formData.append("ssid" , dataItem.ssid)
        formData.append("description",  dataItem.description)
        formData.append("photo" , dataItem.photo)
        axios.post(`${API}api/org/ss/create` , formData , {
          headers: {
            "ngrok-skip-browser-warning": true,
            "Access-Control-Allow-Origin": "*",
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }).then((res) => {
          if(res.status === 200) {
              toast({
                description: "Ma'lumot Qo'shildi!!!",
                status: 'success',
                position: 'top-right',
                duration: 9000,
                isClosable: true,
              }) 
          }
          onClose()


          setTimeout(() => {
            window.location.reload()
          }, 1000)
        }).catch((err) => {
            toast({
              description: "Ma'lumot xato!!!",
              status: 'error',
              position: 'top-right',
              duration: 3000,
              isClosable: true,
            })
        })
      }

  }

  



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
                <Button onClick={handleSubmit}  width={'100px'} bg={'#5D5FEF'} _hover={{bg: '#8D5FEF'}} color={'white'}> Saqlash</Button>
              </Box>

              <ModalBody pb={6} display={'flex'} flexDirection={'column'}gap={'20px'} >
                <FormControl display={'flex'} width={'100%'} flexWrap={'wrap'} gap={'10px'} justifyContent={'space-between'}>
                  <Box>
                    <FormLabel color={'#A6A6A6'}>Fan</FormLabel>
                    <Select  width={'400px'} placeholder={"Fani tanlang"} styles={{width: '500px'}} isSearchable onChange={(e) => setDataItem({...dataItem, sid: e.target.value})}>
                      {data.map((item , i) => (
                        <option key={i}  value={Number(item.id)}>{item.name}</option>
                      ))}
                    </Select>
                  </Box>

                  <Box>
                    <FormLabel color={'#A6A6A6'}>Yo’nalish</FormLabel>
                    <Select width={'400px'}  onChange={(e) => setDataItem({...dataItem, ssid: e.target.value})}>
                      {burn.map((burn , i) => (
                        <option key={i} value={Number(burn.id)}>{burn.name}</option>
                      ))}
                
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
                  {valid ? (
                    <Box>
                      <FormLabel color={'#A6A6A6'}>Qisqacha ma’lumot</FormLabel>
                      <textarea className='valid' onChange={(e) => setDataItem({...dataItem, description: e.target.value})} placeholder="Ma'lumot..." style={{border: '1px solid red' , outline: 'none' , width: '100%' , padding: '10px' , filter: 'drop-shadow(1px 0px 1px red)'}} name="" id="" cols="117" rows="5"></textarea>
                    </Box>
                  ): (
                    <Box>
                      <FormLabel color={'#A6A6A6'}>Qisqacha ma’lumot</FormLabel>
                     <textarea onChange={(e) => setDataItem({...dataItem, description: e.target.value})} placeholder="Ma'lumot..." style={{border: '1px solid #E2E8F0' , outline: 'none' , width: '100%' , padding: '10px'}} name="" id="" cols="117" rows="5"></textarea>
                    </Box>
                  )
                  }

                  {valid && <Text color={'red'} fontSize={'15px'}>Maydon tolmagan!</Text>}

                </FormControl>

                <Box border={'2px'} width={'100%'} onClick={() => document.querySelector('.input-field').click()}display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} height={'300px'}  borderColor={'#5D5FEF'} borderStyle={'dashed'}>
                  <form action="" >
                    <input  className='input-field'  hidden type="file" accept='image/*' onChange={handleFile}/>
                    {dataItem.photo ? 
                    <img src={dataItem.photo[0]} width={'200px'} height={'200px'} alt={''} />
                    : (
                      <Box border={'1px'} cursor={'pointer'} borderColor={'#CCD3DB'} rounded={'10px'} p={'20px'}>
                        <Text fontSize={'18px'} color={'#726BEA'}>Rasim Tanlang</Text>
                      </Box>
                    )
                  }
                  </form>

                </Box>


              
              </ModalBody>
             
            </ModalContent>
          </Modal>


    </Box>
  )
}

export default HomeTitle