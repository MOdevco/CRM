import { Box, Button, Heading, Input, Spinner, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FormControl, FormLabel } from "@chakra-ui/react";
import axios from "axios";
import { API } from "../../api/api";
import { InputMask, useMask } from "@react-input/mask";
import { useParams } from "react-router-dom";
const AddHodimBody = ({obj , setObj}) => {
  const [data, setData] = useState([]);

  const handelFile = (e) =>{
    setDataItem({...dataItem, photo: e.target.files[0]})
  }

  const inputRef = useMask({
    mask: "+998 (__) ___-__-__",
    replacement: { _: /\d/ },
  });
  const inputRef2 = useMask({
    mask: "+998 (__) ___-__-__",
    replacement: { _: /\d/ },
  });

  const handleFile = (e) => {
    setObj({...obj, photo: e.target.files[0]})
  }

  const {id} = useParams()
  const [upDate , setDate] = useState({id: id , address: '' , birthday: '' , e_level: '' , firstname: '' , identification: '' , instagram: '' , lastname: '' , middleName: '' , phone1: '' , phone2: '' , photo: '' ,telegram: ''})
  useEffect(() => {
    axios
      .get(`${API}api/physical-face/single?pId=${id}`, {
        headers: {
          "ngrok-skip-browser-warning": true,
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        const interes = res.data.interests
        const pre = []
        for(let i = 0; i < interes.length; i++) {
          pre.push(interes[i].name)
        }
        setDate({...upDate, address: res.data.address ,
          birthday: res.data.birthday , 
          e_level: res.data.educationLevel.name , 
          firstname: res.data.firstName , 
          identification: res.data.personalIdentification, 
          instagram: res.data.instagramUsername, 
          lastname: res.data.lastName, 
          middleName: res.data.middleName, 
          interests: pre,
          phone1: res.data.primaryPhone, 
          phone2: res.data.secondaryPhone , 
          photo: res.data.photo, 
          telegram: res.data.telegramUsername})
      });
  }, [])

  

  useEffect(() => {
    axios
      .get(`${API}api/education-level/all`, {
        headers: {
          "ngrok-skip-browser-warning": true,
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setData(res.data);
      });
  }, []);

  const [val, setVal] = useState("");

  return (
    <Box width={"100%"} p={"30px"} bg={"white"} rounded={"10px"}>
      <Box
        display={"flex"}
        flexDirection={{ base: "column", xl: "column", "2xl": "row" }}
        justifyContent={"space-evenly"}
      >
        <Box display={"flex"} flexDirection={"column"} gap={"20px"}>
          {/* ism familiya boshlandi */}
          <Box
            display={"flex"}
            flexDirection={{ base: "column", xl: "row" }}
            gap={"30px"}
          >
            <FormControl isRequired>
              <FormLabel>Ismi</FormLabel>
              <Input
                value={upDate.firstname}
                onChange={(e) => setObj({...obj, firstname: e.target.value})}
                width={{ base: "100%", xl: "425px", "2xl": "500px" }}
                placeholder="Ism..."
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Familiyasi</FormLabel>
              <Input value={upDate.lastname}
               onChange={(e) => setObj({...obj, lastname: e.target.value})}
                name="title"
                width={{ base: "100%", xl: "500px" }}
                placeholder="Familiya..."
              />
            </FormControl>
          </Box>
          {/* ism familiya tugadi */}

          {/* data otasini ismi boshlandi */}
          <Box
            display={"flex"}
            flexDirection={{ base: "column", xl: "row" }}
            gap={"30px"}
          >
            <FormControl isRequired>
              <FormLabel>Otasining ismi</FormLabel>
              <Input value={upDate.middleName}
               onChange={(e) => setObj({...obj, middleName: e.target.value})}
                placeholder="Otasini ismi..."
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Tug’ilgan sanasi</FormLabel>
              <Input value={upDate.birthday}
                onChange={(e) => setObj({...obj, birthday: e.target.value})}
                type={"date"}
              />
            </FormControl>
          </Box>
          {/* data otasini ismi tugadi */}

          {/* pasposrt boshlandi */}

          <Box
            display={"flex"}
            flexDirection={{ base: "column", xl: "row" }}
            gap={"30px"}
          >
            <FormControl isRequired>
              <FormLabel>Passport Seriyasi</FormLabel>
              <Input value={upDate.identification}
                onChange={(e) => setObj({...obj, identification: e.target.value})}
                placeholder="Seriya..."
              />
            </FormControl>

            <FormControl >
              <FormLabel>Yashash mazili</FormLabel>
              <Input value={upDate.address}
                onChange={(e) => setObj({...obj, address: e.target.value})}
                placeholder="Manzil..."
              />
            </FormControl>
          </Box>

          {/* pasposrt tugadi */}

          {/* ma'lumot boshlandi */}
          <Box
            display={"flex"}
            flexDirection={{ base: "column", xl: "row" }}
            gap={"30px"}
          >
            <FormControl >
              <FormLabel>Ma'lumoti</FormLabel>
              <select
                onChange={(e) => setObj({...obj, e_level: e.target.value})}
                className="select"
              >
                {data.map((opt) => (
                  <option key={opt.id} value={opt.id} selected={val}>
                    {opt.name}
                  </option>
                ))}
              </select>
            </FormControl>

            <FormControl >
              <FormLabel>Telefon raqami (Asosiy)</FormLabel>
                <input value={upDate.phone1}
                  ref={inputRef}
                  onChange={(e) => setObj({...obj, phone1: e.target.value})}
                  style={{
                    outline: "none",
                    border: "1px solid #777",
                    width: "100%",
                    height: "41px",
                    borderRadius: "8px",
                    paddingLeft: "12px",
                  }}
                  type="text"
                  // ref={inputRef2}
                  placeholder="+998"
                />
            </FormControl>
          </Box>
          {/* ma'lumot tugadi */}

          {/* qo'shimcha boshlandi */}
          <Box
            display={"flex"}
            flexDirection={{ base: "column", xl: "row" }}
            gap={"30px"}
          >
            <FormControl isRequired>
              <FormLabel>Telefon raqami (Qo’shimcha)</FormLabel>
              <input value={upDate.phone2}
              ref={inputRef2}
                onChange={(e) => setObj({...obj, phone2: e.target.value})}
                style={{
                  outline: "none",
                  border: "1px solid #777",
                  width: "100%",
                  height: "41px",
                  borderRadius: "8px",
                  paddingLeft: "12px",
                }}
                type="text"
                // ref={inputRef}
                placeholder="+998"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Telegram (username)</FormLabel>
              <Input value={upDate.telegram}
                onChange={(e) => setObj({...obj, telegram: e.target.value})}
                placeholder="Telegram..."
              />
            </FormControl>
          </Box>
          {/* qo'shimcha tugadi */}

          <Box
            display={"flex"}
            flexDirection={{ base: "column", xl: "row" }}
            gap={"30px"}
          >
            <FormControl isRequired>
              <FormLabel>Instagram (username)</FormLabel>
              <Input value={upDate.instagram}
                onChange={(e) => setObj({...obj, instagram: e.target.value})}
                width={{ base: "100%", xl: "48.5%", "2xl": "50%" }}
                placeholder="Instagram..."
              />
            </FormControl>
          </Box>

          {/* <Box display={"flex"} flexDirection={"column"}>
            <FormLabel>Qiziqishlari</FormLabel>
            <SelectChip  />
          </Box> */}
        </Box>

        <Box mt={"20px"}>
          <Box bg={'#F0F0FF'} rounded={'20px'} width={{xl: '400px' , md: '100%'}} height={'362px'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}   >
            <form action="" >
              <input  className='input-field'   hidden type="file" accept='image/*' onChange={handleFile}/>
              {upDate.photo ? 
              <img src={upDate.photo} width={'200px'} height={'200px'} alt={''} />
              : (
                <Box  cursor={'pointer'}  rounded={'10px'} p={'20px'}>
                  <Text fontSize={'40px'} fontWeight={'bold'} >Hodim rasmi</Text>
                </Box>
              )
            }
            </form>

          </Box>
          <Box>
            <Button
              onClick={() => document.querySelector('.input-field').click()}
              mt={"20px"}
              bg={"#10B981"}
              color={"#fff"}
              _hover={{ bg: "" }}
              _active={{ bg: "" }}
              width={"100%"}
            >
              Rasm tanlash
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AddHodimBody;
