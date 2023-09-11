import { Box, Toast } from "@chakra-ui/react";
import React, { useState } from "react";
import AddHodimBody from "../components/addHodimBody/addHodimBody";
import AddHodimTitle from "../components/addHodimTitle/addHodimTitle";
import AddHodimTopLink from "../components/addHodimTopLink/addHodimTopLink";
import { API } from "../api/api";
import axios from "axios";

const YangiHodim = () => {
  const [dataItem, setDataItem] = useState({   
         
      address: "",
      birthday: "",
      e_level: "",
      firstname: "",
      identification: "",
      instagram: "",
      // interests: "",
      lastname: "",
      middleName: "",
      phone1: "",
      phone2: "",
      photo: "",
      telegram: "",

});

  console.log(dataItem);
  
 const val2 = dataItem

 const val = []

  for(let i = 0; i < dataItem.length; i++){

  }
  
  for(let i = 0; i < val2.length; i++) {
    val.push(val2[i].id) 
  }

  const correctPhone = (phone) => {
    const stringPhone = String(phone)
    const phoneParts =  stringPhone.split("-")
    const head = phoneParts[0]
    const first  = phoneParts[1]
    const second  = phoneParts[2]
    const hed1 = String(head).split(' ')
    const hed2 = String(hed1[0]).slice(1,4)
  
    const hed3 = String(hed1[1]).slice(1,3)
    const hed4 = hed1[2]

    const tel = hed2+hed3+hed4+first+second
    return tel
  }
  const handelPost = () => {

    const correctPhone1 = correctPhone(dataItem.phone1);
    const correctPhone2 = correctPhone(dataItem.phone2);

    console.log(dataItem)
    const formData = new FormData();
    formData.append("address", dataItem.address);
    formData.append("birthday", dataItem.birthday);
    formData.append("e_level", dataItem.e_level);
    formData.append("firstname", dataItem.firstname);
    formData.append("identification", dataItem.identification);
    formData.append("instagram", dataItem.instagram);
    // formData.append("interests", String(val));
    // console.log(val);/
    formData.append("lastname", dataItem.lastname);
    formData.append("middleName", dataItem.middleName);
    formData.append("phone1", correctPhone1);
    formData.append("phone2",correctPhone2);
    formData.append("photo", dataItem.photo);
    formData.append("telegram", dataItem.telegram);
    console.log(formData);
   
    axios
      .post(`${API}api/physical-face/create`, formData, {
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
        console.log(err);
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
