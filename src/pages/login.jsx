import { Box, Button, Heading, Input } from "@chakra-ui/react";
import { useState } from "react";
import { FormControl, FormLabel } from "@chakra-ui/react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { API } from "../api/api";
const Login = () => {
  
  const [data, setData] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const toast = useToast();

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("password", data.password);
    axios
      .post(`${API}api/auth/login`, formData)
      .then((res) => {
        localStorage.setItem("token", res.data["token"]);
        if (res.status == 200) {
          navigate("/");
        } else {
        }
      })
      .catch((err) => {
        toast({
          title: "Bunda User Mavjud Emas!!!",
          status: "error",
          position: "top-right",
          duration: 2000,
          isClosable: true,
        });
      });
  };

  return (
    <Box
      minHeight={"100vh"}
      width={"100%"}
      bg={'white'}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      position={'fixed'}
      top={0}
      left={0}
      zIndex={10}
    >
      <Box
        display={"flex"}
        gap={"20px"}
        width={"100%"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        {/* start title */}
        <Box>
          <Heading fontSize={"32px"} fontWeight={"bold"}>
            Login
          </Heading>
        </Box>
        {/* start form */}
        <Box width={"30%"}>
          <FormControl display={"flex"} flexDirection={"column"} gap={"0px"}>
            <FormLabel>Username</FormLabel>
            <Input
              onChange={(e) => setData({ ...data, username: e.target.value })}
              width={"100%"}
              type="text"
            />
            <FormLabel mt={"20px"}>Password</FormLabel>
            <Input
              onChange={(e) => setData({ ...data, password: e.target.value })}
              width={"100%"}
              type="password"
            />
            <Button
              onClick={handleSubmit}
              mt={"20px"}
              _hover={{ bg: "#8D5FEF" }}
              color={"white"}
              width={"100%"}
              bg={"#5D5FEF"}
            >
              Login
            </Button>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
