import { Box, Button, Heading, Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FormControl, FormLabel } from "@chakra-ui/react";
import axios from "axios";
import { API } from "../../api/api";
import { Select } from "@chakra-ui/react";

const AddHodimBody = () => {
    const [image , setImage] = useState(null)
    const [fileName , setFileName] = useState("Rasim mavjut emas!")
    const [allVal , setAllVal] = useState(null)
    const [inter , setInter] = useState(null)
    const options = [
        {value: "O'rta mahsus" , label: "O'rta mahsus"},
        {value: "Oliy ma'lumotli" , label: "Oliy ma'lumotli"},
        {value: "O'rta ta'lim" , label: "O'rta ta'lim"},
    ]
    const Interest = [
        {value: "Musiqa tinglash" , label: "Musiqa tinglash"},
        {value: "Kitob o'qish" , label: "Kitob o'qish"},
        {value: "O'qin o'ylash" , label: "O'qin o'ylash"},
        {value: "Futbol ko'rish" , label: "Futbol ko'rish"},
        {value: "Valebol o'ynash" , label: "Valebol o'ynash"},
        {value: "Qizlar bilan yurish" , label: "Qizlar bilan yurish"},
    ]

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
                width={{ base: "100%", xl: "425px", "2xl": "500px" }}
                placeholder="Ism..."
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Familiyasi</FormLabel>
              <Input
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
              <Input placeholder="Otasini ismi..." />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Tug’ilgan sanasi</FormLabel>
              <Input type={"date"} />
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
              <Input placeholder="Seriya..." />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Yashash mazili</FormLabel>
              <Input placeholder="Manzil..." />
            </FormControl>
          </Box>

          {/* pasposrt tugadi */}

          {/* ma'lumot boshlandi */}
          <Box
            display={"flex"}
            flexDirection={{ base: "column", xl: "row" }}
            gap={"30px"}
          >
            <FormControl isRequired>
              <FormLabel>Ma'lumoti</FormLabel>
              <select
                className="select"
                value={val}
                onChange={(e) => setVal(e.target.value)}
              >
                {data.map((opt) => (
                  <option key={opt.id}> {opt.name} </option>
                ))}
              </select>
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Telefon raqami (Asosiy)</FormLabel>
              <Input placeholder="+998" />
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
              <Input placeholder="Tel..." />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Telegram (username)</FormLabel>
              <Input placeholder="Telegram..." />
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
              <Input
                width={{ base: "100%", xl: "48.5%", "2xl": "50%" }}
                placeholder="Instagram..."
              />
            </FormControl>
          </Box>

          <Box display={"flex"} flexDirection={"column"}>
            <FormLabel>Qiziqishlari</FormLabel>

            <Select>
              {interest.map((item) => (
                <option key={item.id}> {item.name} </option>
              ))}
            </Select>
          </Box>
        </Box>

            <Box mt={'20px'} >
                <Box  width={{base: '100%' , '2xl': '400px'}} overflow={'auto'} display={'flex'} alignItems={'center'} justifyContent={'center'} rounded={'10px'} height={'300px'} bg={'#F0F0FF'}>
                    <form action="" >
                        <input  className='input-field'  hidden type="file" accept='image/*' onChange={({target: {files}}) => {
                        files[0] && setFileName(files[0].name)
                        if(files) {
                            setImage(URL.createObjectURL(files[0]))
                        }
                        }}/>
                        {image ? 
                        <img src={image} width={'380px'}  alt={fileName} />
                        : (
                        <Heading fontSize={'32px'}>Hodim rasmi</Heading>
                        )
                    }
                    </form>
                </Box>
                <Box >
                    <Button onClick={() => document.querySelector('.input-field').click()} mt={'20px'} bg={'#10B981'} color={'#fff'} _hover={{bg: ''}} _active={{bg: ''}} width={'100%'}>Rasm tanlash</Button>
                </Box>
            </Box>

        </Box>
      </Box>
    </Box>
  );
};

export default AddHodimBody;
