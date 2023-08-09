import {
  Box,
  Divider,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FiSearch } from "react-icons/fi";
import { AiOutlineDown , AiOutlineCheck} from "react-icons/ai";
import { BiBell } from "react-icons/bi";
import { Avatar } from "@chakra-ui/react";
import { TiUpload } from 'react-icons/ti'
import { PiHandDuotone }from 'react-icons/pi'
import { BsExclamationCircle } from 'react-icons/bs'
const Navbar = () => {
  return (
    <Box width={"100%"} borderBottom={"2px"} borderColor={"gray.300"} position={"fixed"} right={"0"} height={"9vh"} bg={"white"} px={{base: '0' , xl: '30px'}}zIndex={'110'}>       <Box display={"flex"}alignItems={"center"}px={"30px"}justifyContent={"space-between"}pl={{base: '10' , xl: '295px'}}minHeight={"9vh"}>
      <Box display={"flex"}bg={"#F5F5FA"}width={"30%"}height={"45px"}rounded={"8px"}px={"10px"}alignItems={"center"}justifyContent={"center"}>
         <FiSearch />
          <input placeholder="Search..."style={{height: "30px",width: "100%", border: "none", outline: "none", paddingLeft: "10px", background: "transparent", }}type="text"/>
        </Box>
        <Box display={"flex"}alignItems={"center"}justifyContent={"flex-start"}gap={"18px"} >
            <Box display={"flex"}alignItems={"center"} justifyContent={"center"} gap={"16px"}borderColor={"#E2E8F0"}>
              <Menu>
                <MenuButton  fontSize={"18px"} fontWeight={"500"}>
                  <Box display={"flex"} alignItems={'center'} gap={'12px'}>
                    <BiBell fontSize={'25px'} />
                  </Box>
                </MenuButton>
              <MenuList >
                <MenuItem _hover={{bg: 'transparent'}}>
                Xabarnomalar
                </MenuItem>
                <MenuItem display={'flex'} gap={'10px'} fontWeight={'bold'} _hover={{bg: 'transparent'}}>
                  <TiUpload  />
                  Edit your information in a swipe
                </MenuItem>
                <MenuItem _hover={{bg: 'transparent'}} maxW={'300px'}>
                With just a swipe of your finger you can delete an email or flag one for follow-up. All it takes is a multi-touch trackpad or magic mouse.
                </MenuItem>
                <MenuItem _hover={{bg: 'transparent'}} color={'#96A4B9'}>Jan 13, 2022</MenuItem>
                <Divider />
        
                <MenuItem display={'flex'} gap={'10px'} fontWeight={'bold'} _hover={{bg: 'transparent'}}>
                  <AiOutlineCheck color="green" />
                  Customize swipe left and right
                </MenuItem>
                <MenuItem _hover={{bg: 'transparent'}} maxW={'300px'}>
                All it takes is a multi-touch trackpad or magic mouse.
                </MenuItem>
                <MenuItem _hover={{bg: 'transparent'}} color={'#96A4B9'}>Sep 13, 2022</MenuItem>
                <Divider />

                <MenuItem display={'flex'} gap={'10px'} fontWeight={'bold'} _hover={{bg: 'transparent'}}>
                  <PiHandDuotone color="orange"  />
                  Say goodbye ro paper receipts!
                </MenuItem>
                <MenuItem _hover={{bg: 'transparent'}} maxW={'300px'}>
                Discover how industry professionals leverage Microsoft 365 to communicate, collaborate, and improve productivity across the team and organization.
                </MenuItem>
                <MenuItem _hover={{bg: 'transparent'}} color={'#96A4B9'}>Sep 13, 2022</MenuItem>

              </MenuList>
            </Menu>
            <BsExclamationCircle fontSize={'25px'} />
          </Box>


          <Box display={"flex"}  alignItems={"center"} gap={"12px"}>
            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
            <Menu>
              <MenuButton  fontSize={"18px"} fontWeight={"500"}>
                <Box display={"flex"} alignItems={'center'} gap={'12px'}>
                  Erik Brown
                  <AiOutlineDown />
                </Box>
              </MenuButton>
              <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
