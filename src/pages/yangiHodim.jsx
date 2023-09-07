import { Box, Toast } from "@chakra-ui/react";
import React, { useState } from "react";
import AddHodimBody from "../components/addHodimBody/addHodimBody";
import AddHodimTitle from "../components/addHodimTitle/addHodimTitle";
import AddHodimTopLink from "../components/addHodimTopLink/addHodimTopLink";
import { API } from "../api/api";
import axios from "axios";

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
    formData.append("addres", dataItem.addres);
    formData.append("birthday", dataItem.birthday);
    formData.append("e_level", dataItem.e_level);
    formData.append("firstname", dataItem.firstname);
    formData.append("identification", dataItem.identification);
    formData.append("instagram", dataItem.instagram);
    formData.append("interests", dataItem.interests);
    formData.append("lastname", dataItem.lastname);
    formData.append("middleName", dataItem.middleName);
    formData.append("phone1", dataItem.phone1);
    formData.append("phone2", dataItem.phone2);
    formData.append("photo", dataItem.photo);
    formData.append("photo", dataItem.photo);
    formData.append("telegram", dataItem.telegram);
    formData.append("interests", dataItem.interests);
      axios
        .post(`${API}api​/physical-face​/create`, formData, {
          headers: {
            "ngrok-skip-browser-warning": true,
            "Access-Control-Allow-Origin": "*",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
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
          });
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

        <AddHodimTitle handelPost={handelPost} />

        <AddHodimBody dataItem={dataItem} setDataItem={setDataItem} />
      </Box>
    </Box>
  );
};

export default YangiHodim;
