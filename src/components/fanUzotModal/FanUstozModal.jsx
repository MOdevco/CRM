import { AddIcon, CheckIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { API } from "../../api/api";
import ModalProp from "../modalProp/modalProp";

function FanUstozModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = useRef(null);
  const [dataModal , setDataModal] = useState([])
  console.log(dataModal)

  useEffect(() => {
    axios.get(`${API}api/subjects/sub/all` , {
      headers: {
        "ngrok-skip-browser-warning": true,
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    }).then((res) => {
      setDataModal(res.data)
    })
  } , [API])


  return (
    <>
      <Box>
        <Button
          className="btnPadding"
          bg={"#7364FF"}
          color={"#fff"}
          _hover={"none"}
          onClick={onOpen}
          gap={"12px"}
        >
          <AddIcon />
          Open Modal
        </Button>
      </Box>

      <Modal
        size={"2xl"}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader pt={'41px'} pl={'76px'}  color={'#1E293B'} fontSize={'24px'} fontWeight={'600'}>Barcha o’qituvchilar</ModalHeader>
          <ModalCloseButton />
          <ModalBody display={"flex"} flexDirection={"column"} gap={"15px"}>
            {dataModal.map((item) => (
              <ModalProp item />
            ))}
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default FanUstozModal;
