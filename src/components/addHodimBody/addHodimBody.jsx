import { Box, Button, Heading, Input, Spinner } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FormControl, FormLabel } from "@chakra-ui/react";
import axios from "axios";
import { API } from "../../api/api";
import SelectChip from "../selectChip/SelectChip";

const AddHodimBody = ({ dataItem, setDataItem }) => {
  const [data, setData] = useState([]);

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
  console.log(dataItem);

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
                onChange={(e) =>
                  setDataItem({ ...dataItem, birthday: e.target.value })
                }
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
                  setDataItem({ ...dataItem, addres: e.target.value })
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
                value={val}
              >
                {data.map((opt) => (
                  <option key={opt.id} selected={val}>
                    {" "}
                    {opt.name}{" "}
                  </option>
                ))}
              </select>
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Telefon raqami (Asosiy)</FormLabel>
              <Input
                onChange={(e) =>
                  setDataItem({ ...dataItem, phone1: e.target.value })
                }
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
              <Input
                onChange={(e) =>
                  setDataItem({ ...dataItem, phone2: e.target.value })
                }
                placeholder="Tel..."
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
            <SelectChip dataItem={dataItem} setDataItem={setDataItem} />
          </Box>
        </Box>

        <Box mt={"20px"}>
          <Box
            width={{ base: "100%", "2xl": "400px" }}
            overflow={"auto"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            rounded={"10px"}
            height={"300px"}
            bg={"#F0F0FF"}
          >
            <form action="">
              <input
                className="input-field"
                hidden
                type="file"
                accept="image/*"
                onChange={({ target: { files } }) => {
                  files[0] && setFileName(files[0].name);
                  if (files) {
                    setImage(URL.createObjectURL(files[0]));
                  }
                  (e) => setDataItem({ ...dataItem, photo: e.target.value });
                }}
              />
              {image ? (
                <img src={image} width={"380px"} alt={fileName} />
              ) : (
                <Heading fontSize={"32px"}>Hodim rasmi</Heading>
              )}
            </form>
          </Box>
          <Box>
            <Button
              onClick={() => document.querySelector(".input-field").click()}
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
