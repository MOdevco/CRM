import {
  Box,
  Button,
  Heading,
  Img,
  Input,
  Spinner,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FormControl, FormLabel } from "@chakra-ui/react";
import axios from "axios";
import { API } from "../../api/api";
import { InputMask, useMask } from "@react-input/mask";

const AddHodimBody = ({ dataItem, setDataItem }) => {
  const [data, setData] = useState([]);

  const handelFile = (e) =>{
    setDataItem({...dataItem, photo: e.target.files[0]})
  }

  const inputRef = useMask({
    mask: "+998 (__) ___-__-__",
    replacement: { _: /\d/ },
  });

  const inputReef = useMask({
    mask: "+998 (__) ___-__-__",
    replacement: { _: /\d/ },
  });

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
  const [image, setImage] = useState("");
  const [fileName, setFileName] = useState("Rasim mavjut emas!");

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
                onChange={(e) =>
                  setDataItem({ ...dataItem, firstname: e.target.value })
                }
                width={{ base: "100%", xl: "425px", "2xl": "500px" }}
                placeholder="Ism..."
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Familiyasi</FormLabel>
              <Input
                onChange={(e) =>
                  setDataItem({ ...dataItem, lastname: e.target.value })
                }
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
              <Input
                onChange={(e) =>
                  setDataItem({ ...dataItem, middleName: e.target.value })
                }
                placeholder="Otasini ismi..."
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Tug’ilgan sanasi</FormLabel>
              <Input 
                datatype="local"
                onChange={(e) =>
                  setDataItem({ ...dataItem, birthday: e.target.value })
                }
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
              <Input
                onChange={(e) =>
                  setDataItem({ ...dataItem, identification: e.target.value })
                }
                placeholder="Seriya..."
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Yashash mazili</FormLabel>
              <Input
                onChange={(e) =>
                  setDataItem({ ...dataItem, address: e.target.value })
                }
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
            <FormControl isRequired>
              <FormLabel>Ma'lumoti</FormLabel>
              <select
                onChange={(e) =>
                  setDataItem({ ...dataItem, e_level: e.target.value })
                }
                className="select"
              >
                {data.map((opt) => (
                  <option key={opt.id} value={opt.id} selected={val}>
                    {""}
                    {opt.name}{" "}
                  </option>
                ))}
              </select>
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Telefon raqami (Asosiy)</FormLabel>
              <input
                onChange={(e) => {
                  setDataItem({ ...dataItem, phone1: e.target.value });
                }}
                placeholder="+998"
                ref={inputReef}
                style={{
                  outline: "none",
                  border: "1px solid #777",
                  width: "100%",
                  height: "41px",
                  borderRadius: "8px",
                  paddingLeft: "12px",
                }}
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
              <input
                onChange={(e) => {
                  setDataItem({ ...dataItem, phone2: e.target.value });
                }}
                style={{
                  outline: "none",
                  border: "1px solid #777",
                  width: "100%",
                  height: "41px",
                  borderRadius: "8px",
                  paddingLeft: "12px",
                }}
                type="text"
                ref={inputRef}
                placeholder="+998"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Telegram (username)</FormLabel>
              <Input
                onChange={(e) =>
                  setDataItem({ ...dataItem, telegram: e.target.value })
                }
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
              <Input
                onChange={(e) =>
                  setDataItem({ ...dataItem, instagram: e.target.value })
                }
                width={{ base: "100%", xl: "48.5%", "2xl": "50%" }}
                placeholder="Instagram..."
              />
            </FormControl>
          </Box>

          <Box display={"flex"} flexDirection={"column"}>
            <FormLabel>Qiziqishlari</FormLabel>
            {/* <SelectChip dataItem={dataItem} setDataItem={setDataItem} /> */}
          </Box>
        </Box>

        <Box mt={"20px"}>
        <Box border={'2px'} width={'100%'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} height={'300px'}  borderColor={'#5D5FEF'} borderStyle={'dashed'}>
                  <form action="" >
                    <input  className='input-field'  hidden type="file" accept='image/*' onChange={handelFile}/>
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
