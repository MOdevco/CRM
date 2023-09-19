import { Box, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { API } from "../../api/api";
import { fan } from "../../assets";
import WebCard from "../webCard/webCard";

function FanWeb({preId}) {
  const [dataItem , setDataItem] = useState([])

  useEffect(() => {
     axios.get(`${API}api/teachers/get/?id=1`, {
      headers: {
        "ngrok-skip-browser-warning": true,
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    }).then((res) => {
      setDataItem(res.data.orgSubSubjects)
    })
  } , [API]) 



  return (
    <div>
      <Box bg={'#fff'} pr={'40px'} width={'700px'} height={'80vh'} overflow={'scroll'}>
          <Box display={"flex"}   flexDirection={"column"} >
            <Box position={'sticky'} top={-1} bg={'#fff'} pb={'20px'}>
              <Text
                pl={"42px"}
                pt={"27px"}
                color={"#1E293B"}
                fontSize={"24px"}
                fontWeight={"500"}
              >
                Fan va yo’nalish
              </Text>
            </Box>
            <Box >
              <Box >
                {dataItem.map((item , i) => (
                  <WebCard title={item.subSubject.name} desc={item.description} yonalish={item.subject.name} photo={item.imageStore} />
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
    </div>
  );
}

export default FanWeb;
