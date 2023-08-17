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
import { useRef } from "react";

function FanUstozModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = useRef(null);

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
            <Box
              display={"flex"}
              alignItems={"center"}
              gap={"105px"}
              pt={"30px"}
            >
              <Box display={"flex"} alignItems={"center"} pl={"59px"}>
                <Avatar
                  w={"75px"}
                  h={"75px"}
                  name="Dan Abrahmov"
                  src="https://bit.ly/dan-abramov"
                />
                <IconButton
                position={'absolute'}
                left={'19%'}
                top={'24%'}
                  isRound={true}
                  variant="solid"
                  colorScheme="teal"
                  aria-label="Done"
                  fontSize="20px"
                  icon={<CheckIcon />}
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
            <Box
              display={"flex"}
              alignItems={"center"}
              gap={"105px"}
              pt={"30px"}
            >
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
            <Box
              display={"flex"}
              alignItems={"center"}
              gap={"105px"}
              pt={"30px"}
            >
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
            <Box
              display={"flex"}
              alignItems={"center"}
              gap={"105px"}
              pt={"30px"}
            >
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
            <Box
              display={"flex"}
              alignItems={"center"}
              gap={"105px"}
              pt={"30px"}
            >
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
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default FanUstozModal;
