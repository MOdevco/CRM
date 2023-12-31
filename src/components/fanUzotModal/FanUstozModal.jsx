import { AddIcon, CheckIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  IconButton,
  Image,
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
import { useEffect, useRef } from "react";
import { API } from "../../api/api";
import { useState } from "react";
import getImage from "../getPhoto/getPhoto";
import ModalProp from "../modalProp/modalProp";

function FanUstozModal({ id, setPreId }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = useRef(null);
  
  

  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}api/org/ss/all-by-org`, {
        headers: {
          "ngrok-skip-browser-warning": true,
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setData(res.data);
        // setLoad(false)
      });
    console.log(data);
  }, []);

 
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
          <ModalHeader
            pt={"41px"}
            pl={"76px"}
            color={"#1E293B"}
            fontSize={"24px"}
            fontWeight={"600"}
          >
            Barcha o’qituvchilar
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display={"flex"}
            flexDirection={"column"}
            gap={"15px"}
            ml={"50px"}
          >
            {data.map((item, i) => (
              <Box>
                <ModalProp imageStore={item.imageStore} name={item.subSubject.name} fan={item.subject.name} />
              </Box>
            ))}
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default FanUstozModal;
