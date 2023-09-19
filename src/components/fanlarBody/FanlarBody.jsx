import { Box, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { fan } from "../../assets";
import FanWeb from "../fanWeb/FanWeb";
import FanUstoz from "../fanUstoz/FanUstoz";
import axios from "axios";
import { API } from "../../api/api";

function FanlarBody() {
  const [dataItem , setDataItem] = useState([])
  const [preId , setPreId] = useState()

  useEffect(() => {
    axios.get(`${API}api/physical-stuff/by-category?cid=3` , {
      headers: {
        "ngrok-skip-browser-warning": true,
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    }).then((res) => {
      setDataItem(res.data)
    })
  } , [API])
  return (
    <Box  w={"100%"} height={'auto'} display={'flex'} flexDirection={{base: 'column' , md: 'row'}} overflow={'auto'}  alignItems={'flex-start'} justifyContent={'flex-start'} >
      <FanUstoz dataItem={dataItem} setPreId={setPreId}  />
      <FanWeb preId={preId} />
    </Box>
  );
}

export default FanlarBody;
