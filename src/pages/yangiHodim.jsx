import { Box, Toast, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import AddHodimBody from "../components/addHodimBody/addHodimBody";
import AddHodimTitle from "../components/addHodimTitle/addHodimTitle";
import AddHodimTopLink from "../components/addHodimTopLink/addHodimTopLink";
import { API } from "../api/api";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const YangiHodim = () => {
  const {id} = useParams()
  const toast = useToast()
  const [dataItem , setDataItem] = useState({ address: '' , birthday: '' , e_level: '' , firstname: '' , identification: '' , instagram: '' , lastname: '' , middleName: '' , phone1: '' , phone2: '' , photo: '' ,telegram: ''})

  // const [upDate , setDate] = useState({id: id , address: '' , birthday: '' , e_level: '' , firstname: '' , identification: '' , instagram: '' , lastname: '' , middleName: '' , phone1: '' , phone2: '' , photo: '' ,telegram: ''})
  // console.log(upDate)


  useEffect(() => {
    axios.get(`${API}api/physical-stuff/all`)
    .then((res) => {
      // setDate({...upDate, address: res.data.address , birthday: res.data.birthday , e_level: res.data.e_level , firstname: res.data.firstname, identification: res.data.identification , instagram: res.data.instagram , lastname: res.data.lastname, middleName: res.data.middleName , phone1: res.data.phone1 , phone2: res.data.phone2 , photo: res.data.photo , telegram: res.data.telegram})
      console.log(res.data)
    })
  } , [])

 

  const phone1 = dataItem.phone1
  const phone2 = dataItem.phone2
  const stringPhone = String(phone1)
  const phoneParts =  stringPhone.split("-")
  const head = phoneParts[0]
  const first  = phoneParts[1]
  const second  = phoneParts[2]
  const hed1 = String(head).split(' ')
  const hed2 = String(hed1[0]).slice(1,4)
  const hed3 = String(hed1[1]).slice(1,3)
  const hed4 = hed1[2]
  const tel = hed2+hed3+hed4+first+second
  const stringPhone2 = String(phone2)
  const phoneParts2 =  stringPhone2.split("-")
  const head2 = phoneParts2[0]
  const first2  = phoneParts2[1]
  const second2  = phoneParts2[2]
  const hed12 = String(head2).split(' ')
  const hed22 = String(hed12[0]).slice(1,4)
  const hed32 = String(hed12[1]).slice(1,3)
  const hed42 = hed12[2]
  const tel2 = hed22+hed32+hed42+first2+second2
  



 

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
    // const phone1 = correctPhone(val2.phone1)
    // const phone2 = correctPhone(val2.phone2)
    const formData = new FormData()
    formData.append("address" , dataItem.address)
    formData.append("birthday" , dataItem.birthday)
    formData.append("e_level" , dataItem.e_level)
    formData.append("firstname" , dataItem.firstname)
    formData.append("identification" , dataItem.identification)
    formData.append("instagram" , dataItem.instagram)
    formData.append("lastname" , dataItem.lastname)
    formData.append("middleName" , dataItem.middleName)
    formData.append("phone1" , tel)
    formData.append("phone2" , tel2)
    formData.append("photo" , dataItem.photo)
    formData.append("telegram" , dataItem.telegram)
    
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
            toast({
              title: "Ma'lumotlar saqlandi",
              status: 'success',
              position: 'top-right',
              duration: 2000,
              isClosable: true,
            })
          } else {
          }
        })
        .catch((err) => {
          toast({
            title: "Bunday ma'lumot mavjud",
            status: 'error',
            position: 'top-right',
            duration: 2000,
            isClosable: true,
          })
        });
        console.log(err);
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

        <AddHodimBody obj={dataItem} setObj={setDataItem} />
      </Box>
    </Box>
  );
 };

export default YangiHodim;
