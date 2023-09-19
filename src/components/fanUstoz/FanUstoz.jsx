import { AddIcon, SearchIcon } from "@chakra-ui/icons";
import { Avatar, Box, Button, Input, Text } from "@chakra-ui/react";
import React from "react";
import FanUstozModal from "../fanUzotModal/FanUstozModal";
import { FiSearch } from "react-icons/fi";
import UsetozCard from "../ustozCard/usetozCard";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { API } from "../../api/api";
function FanUstoz({ dataItem, setPreId }) {
  const prePh = (phone) => {
    const ph2 = phone;
    const ph3 = ph2.slice(0, 3);
    const ph5 = ph2.slice(3, 5);
    const ph7 = ph2.slice(5, 8);
    const ph8 = ph2.slice(8, 10);
    const ph9 = ph2.slice(10, 12);
    const res = ph3 + " " + "(" + ph5 + ")" + " " + ph7 + "-" + ph8 + "-" + ph9;
    return res;
  };

  return (
    <div>
      <Box
        bg={"#fff"}
        pr={"80px"}
        borderRight={"2px"}
        borderColor={"#D9D9D9"}
        width={"700px"}
        height={"80vh"}
        overflow={"scroll"}
      >
        <Box position={"sticky"} pb={"20px"} zIndex={"10"} top={-1} bg={"#fff"}>
          <Text
            pl={"20px"}
            pt={"27px"}
            color={"#1E293B"}
            fontSize={"24px"}
            fontWeight={"500"}
          >
            O’qituvchilar
          </Text>
        </Box>
        <Box
          position={"sticky"}
          top={50}
          pt={"40px"}
          pl={"20px"}
          display={"flex"}
          alignItems={"center"}
          gap={"17px"}
          bg={"#fff"}
          zIndex={"10"}
        >
          <Box
            display={"flex"}
            bg={"#F5F5FA"}
            width={"100%"}
            height={"45px"}
            rounded={"8px"}
            px={"10px"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <FiSearch />
            <input
              placeholder="Search..."
              style={{
                height: "30px",
                width: "100%",
                border: "none",
                outline: "none",
                paddingLeft: "10px",
                background: "transparent",
              }}
              type="text"
            />
          </Box>
            <FanUstozModal setPreId={setPreId} dataItem={dataItem} />
        </Box>

        <Box cursor={"pointer"}>
          {dataItem.map((item, i) => (
            <UsetozCard
              name={item.physicalFace.firstName}
              setPreId={setPreId}
              id={item.id}
              photo={item.physicalFace.photo}
              ph1={"+"}
              tel={prePh(item.physicalFace.primaryPhone)}
              malumot={"Oliy ma’lumotli"}
            />
          ))}
        </Box>
      </Box>
    </div>   
  );
}

export default FanUstoz;
