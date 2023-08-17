import { AddIcon, SearchIcon } from "@chakra-ui/icons";
import { Avatar, Box, Button, Input, Text } from "@chakra-ui/react";
import React from "react";
import FanUstozModal from "../fanUzotModal/FanUstozModal";
import { FiSearch } from "react-icons/fi";
function FanUstoz() {
  return (
    <div>
      <Box>
        <Box>
          <Text
            pl={"72px"}
            pt={"27px"}
            color={"#1E293B"}
            fontSize={"24px"}
            fontWeight={"500"}
          >
            O’qituvchilar
          </Text>
        </Box>
        <Box
          pt={"40px"}
          pl={"72px"}
          display={"flex"}
          alignItems={"center"}
          gap={"17px"}
        >
         <Box display={"flex"}bg={"#F5F5FA"}width={"100%"}height={"45px"}rounded={"8px"}px={"10px"}alignItems={"center"}justifyContent={"center"}>
         <FiSearch />
          <input placeholder="Search..."style={{height: "30px",width: "100%", border: "none", outline: "none", paddingLeft: "10px", background: "transparent", }}type="text"/>
        </Box>
         <FanUstozModal />
        </Box>
        <Box display={"flex"} alignItems={"center"} gap={"145px"} pt={"44px"}>
          <Box display={"flex"} alignItems={"center"} pl={"59px"}>
            <Avatar
              w={"75px"}
              h={"75px"}
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
            />
            <Box flexDirection={"column"} pl={"20px"}>
              <Text
                color={"#4D515A"}
                fontSize={"20px"}
                fontWeight={"500"}
                mb={"16px"}
                lineHeight={"24px"}
              >
                Tursunali Xorunaliyev
              </Text>
              <Text
                fontSize={"16px"}
                fontWeight={"400"}
                lineHeight={"24px"}
                fontStyle={"normal"}
              >
                +998 (99) 123-45-67
              </Text>
            </Box>
          </Box>
          <Box display={"flex"} flexDirection={"column"}>
            <button className="button">Oliy ma’lumotli</button>
          </Box>
        </Box>
        <Box display={"flex"} alignItems={"center"} gap={"145px"} pt={"44px"}>
          <Box display={"flex"} alignItems={"center"} pl={"59px"}>
            <Avatar
              w={"75px"}
              h={"75px"}
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
            />
            <Box flexDirection={"column"} pl={"20px"}>
              <Text
                color={"#4D515A"}
                fontSize={"20px"}
                fontWeight={"500"}
                mb={"16px"}
                lineHeight={"24px"}
              >
                Tursunali Xorunaliyev
              </Text>
              <Text
                fontSize={"16px"}
                fontWeight={"400"}
                lineHeight={"24px"}
                fontStyle={"normal"}
              >
                +998 (99) 123-45-67
              </Text>
            </Box>
          </Box>
          <Box display={"flex"} flexDirection={"column"}>
            <button className="button">Oliy ma’lumotli</button>
          </Box>
        </Box>
        <Box display={"flex"} alignItems={"center"} gap={"145px"} pt={"44px"}>
          <Box display={"flex"} alignItems={"center"} pl={"59px"}>
            <Avatar
              w={"75px"}
              h={"75px"}
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
            />
            <Box flexDirection={"column"} pl={"20px"}>
              <Text
                color={"#4D515A"}
                fontSize={"20px"}
                fontWeight={"500"}
                mb={"16px"}
                lineHeight={"24px"}
              >
                Tursunali Xorunaliyev
              </Text>
              <Text
                fontSize={"16px"}
                fontWeight={"400"}
                lineHeight={"24px"}
                fontStyle={"normal"}
              >
                +998 (99) 123-45-67
              </Text>
            </Box>
          </Box>
          <Box display={"flex"} flexDirection={"column"}>
            <button className="button">Oliy ma’lumotli</button>
          </Box>
        </Box>
        <Box display={"flex"} alignItems={"center"} gap={"145px"} pt={"44px"}>
          <Box display={"flex"} alignItems={"center"} pl={"59px"}>
            <Avatar
              w={"75px"}
              h={"75px"}
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
            />
            <Box flexDirection={"column"} pl={"20px"}>
              <Text
                color={"#4D515A"}
                fontSize={"20px"}
                fontWeight={"500"}
                mb={"16px"}
                lineHeight={"24px"}
              >
                Tursunali Xorunaliyev
              </Text>
              <Text
                fontSize={"16px"}
                fontWeight={"400"}
                lineHeight={"24px"}
                fontStyle={"normal"}
              >
                +998 (99) 123-45-67
              </Text>
            </Box>
          </Box>
          <Box display={"flex"} flexDirection={"column"}>
            <button className="button">Oliy ma’lumotli</button>
          </Box>
        </Box>
        <Box display={"flex"} alignItems={"center"} gap={"145px"} pt={"44px"}>
          <Box display={"flex"} alignItems={"center"} pl={"59px"}>
            <Avatar
              w={"75px"}
              h={"75px"}
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
            />
            <Box flexDirection={"column"} pl={"20px"}>
              <Text
                color={"#4D515A"}
                fontSize={"20px"}
                fontWeight={"500"}
                mb={"16px"}
                lineHeight={"24px"}
              >
                Tursunali Xorunaliyev
              </Text>
              <Text
                fontSize={"16px"}
                fontWeight={"400"}
                lineHeight={"24px"}
                fontStyle={"normal"}
              >
                +998 (99) 123-45-67
              </Text>
            </Box>
          </Box>
          <Box display={"flex"} flexDirection={"column"}>
            <button className="button">Oliy ma’lumotli</button>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default FanUstoz;
