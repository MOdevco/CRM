import { Box, Toast } from "@chakra-ui/react";
import React, { useState } from "react";
import AddHodimBody from "../components/addHodimBody/addHodimBody";
import AddHodimTitle from "../components/addHodimTitle/addHodimTitle";
import AddHodimTopLink from "../components/addHodimTopLink/addHodimTopLink";
import { API } from "../api/api";

const YangiHodim = () => {
  const [dataItem, setDataItem] = useState([
    {
      addres: "",
      birthday: "",
      e_level: "",
      firstname: "",
      identification: "",
      instagram: "",
      interests: "",
      lastname: "",
      middleName: "",
      phone1: "",
      phone2: "",
      photo: "",
      telegram: "",
      interests: "",
    },
  ]);

  const handelPost = () => {
    const formData = new FormData();
    axios
      .post(`${API}api​/physical-face​/create`,)
      .then((res) => {
      
        if (res.status == 200) {
          Toast({
            title: "Muvofaqiyatli amalga oshrildi",
            status: "success",
            position: "top-right",
            duration: 2000,
            isClosable: true,
          });
        } else {
        }
      })
      .catch((err) => {
       Toast({
        title: "Ma'lumot saqlanmadi",
        status: "error",
        position: "top-right",
        duration: 2000,
        isClosable: true,
       })
      });
  };

  return (
    <Box width={"100%"} overflow={"auto"} minHeight={"100vh"}>
      <Box
        pt={"100px"}
        width={"100%"}
        px={"20px"}
        display={"flex"}
        flexDirection={"column"}
        gap={"15px"}
        pl={{ base: "10", xl: "320px" }}
      >
        <AddHodimTopLink />

        <AddHodimTitle handelPost={handelPost}  />

        <AddHodimBody dataItem={dataItem} setDataItem={setDataItem} />
      </Box>
    </Box>
  );
};

export default YangiHodim;
