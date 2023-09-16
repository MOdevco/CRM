import { AddIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { API } from "../../api/api";
import { useToast } from "@chakra-ui/react";
import { dateIcon } from "../../assets";

const HodimlarTitle = ({setSearch}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = useRef(null)
    const finalRef = useRef(null)
    const [size, setSize] = useState('md')
    const [data , setData] = useState([])
    const [dataItem , setDataItem] = useState([])
    const [dataValue , setDataValue] = useState({cid: '' , fid: '' , start_date: ''})
    const toast = useToast()

  const handleSizeClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };


  useEffect(() => {
    axios
      .get(`${API}api/stuff/all`, {
        headers: {
          "ngrok-skip-browser-warning": true,
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setDataItem(res.data);
      });
  }, []);

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("cid", Number(dataValue.cid));
    formData.append("fid", Number(dataValue.fid));
    formData.append("start_date", dataValue.start_date);
    axios
      .post(`${API}api/physical-stuff/create`, formData, {
        headers: {
          "ngrok-skip-browser-warning": true,
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        if (res.data.status == true) {
          onClose();
          toast({
            description: `${res.data.message}`,
            position: "top-right",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
        }
        window.location.reload(true);
      })
      .catch((err) => {
        // console.log(err.response.status)
        // console.log(err.response.data.message)
        toast({
          description: `${err.response.data.message}`,
          position: "top-right",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  };

  const sizes = ["md"];

    return (
        <Box >
            
            <Box display={'flex'} flexWrap={'wrap'} justifyContent={'space-between'} >
                <Heading>Hodimlar</Heading>
                
                <Box display={'flex'} flexWrap={'wrap'}  alignItems={'flex-end'} flexDirection={'column'}> 
                    <Box display={'flex'} flexWrap={'wrap'}  alignItems={'center'} gap={'20px'}>
                        <Box display={'flex'} width={{base: '100%' , xl: '372px'}} height={'52px'} alignItems={'center'} gap={'10px'} border={'1px'} borderColor={'#E2E8F0'} p={'10px'} rounded={'10px'} bg={'#fff'}>
                            <SearchIcon color={'#64748B'} />
                            <input onChange={(e) => setSearch(e.target.value)} autoFocus type="text" className="inp" placeholder="Hodimlar bo’yicha qidirish..." style={{outline: 'none' , width: '100%'}} />
                        </Box>
                        <Box>
                            <NavLink to={'/yangiHodim'}>
                                <Button bg={'#10B981'} display={'flex'} width={'152px'} height={'52px'} alignItems={'center'} gap={'10px'} _hover={{bg: '#40B981'}} color={'white'}>
                                        <AddIcon />
                                        Yangi hodim
                                </Button>
                            </NavLink>
                        </Box>
                        <Box>
                            {sizes.map((size) => (
                                <Button  onClick={() => handleSizeClick(size)}key={size}my={7} bg={'#7364FF'} _hover={{bg: '#5364FF'}} height={'52px'} color={'white'} display={'flex'} gap={'10px'}>
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
                                        <Select  onChange={(e) => setDataValue({...dataValue , fid: e.target.value})}>
                                            <option selected disabled className="option" value="">Jismoniy shahslar</option>
                                            {data.map((item , i) => (
                                                <option key={i}  value={Number(item.id)}>{item.firstName} {item.lastName} {item.middleName}</option>
                                            ))}
                                        </Select>
                                    </FormControl>

                                    <FormControl>
                                        <FormLabel>Lavozimlar</FormLabel>
                                        <Select onChange={(e) => setDataValue({...dataValue , cid: e.target.value})}>
                                            <option style={{color: 'gray'}} disabled selected className="option" value="">Lavozimlar</option>
                                            {dataItem.map((item , i) => (
                                                <option key={i} value={Number(item.id)}>{item.name}</option>
                                            ))}
                                        </Select>
                                    </FormControl>

                                    <FormControl mt={4}>
                                        <FormLabel>Sanadan boshlab</FormLabel>
                                        <Box display={'flex'} rounded={'10px'} alignItems={'center'} border={'1px'} borderColor={'gray.300'}>
                                            {/* <Input border={'none'} className={'dateVal'} outline={0}  type={'date'}   /> */}
                                            <input type="date" className="dateVal" onChange={(e) => setDataValue({...dataValue , start_date: e.target.value})} />
                                            <Image className="imgCheck" bg={'gray.400'} rounded={'10px'} width={'40px'} src={dateIcon}></Image>
                                        </Box>
                                    </FormControl>

                                    <FormControl mt={4}>
                                        <FormLabel>Sanagacha</FormLabel>
                                        <Input disabled type={'date'} />
                                    </FormControl>

                                </ModalBody>
                                <ModalFooter display={'flex'} gap={'20px'}>
                                    <Button bg={'#DBDBDB'} onClick={onClose}>Bekor qilish</Button>
                                    <Button onClick={handleSubmit} bg={'#10B981'} _hover={{bg: '#29B981'}} color={'white'}>Biriktirish</Button>
                                </ModalFooter>
                                </ModalContent>
                            </Modal>
                        </Box>
                    </Box>
                    
                </Box>
            </Box>
           
       
          </Box>
  );
};

export default HodimlarTitle;
