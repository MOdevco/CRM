import { Box, Button, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { GoMoveToTop } from "react-icons/go";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";
import Chat from "./pages/chat";
import Hodimlar from "./pages/hodimlar";
import Home from "./pages/home";
import Login from "./pages/login";
import YangiHodim from "./pages/yangiHodim";
import Fanlar from "./pages/Fanlar";

function App() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (window.scrollY > 10) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Box bg={"#F5F5FA"} height={"100%"} width={"100%"}>
      {scroll && (
        <Box position={"fixed"} zIndex={20} right={"60px"} bottom={"60px"}>
          <Button
            height={"50px"}
            _hover={{ bg: "#5364FF" }}
            onClick={handleScroll}
            bg={"#7364FF"}
          >
            <GoMoveToTop color="white" fontSize={"30px"} />
          </Button>
        </Box>
      )}

      <Box>
        <Navbar />
      </Box>

      <Flex>
        <Box>
          <Sidebar />
        </Box>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/hodimlar" element={<Hodimlar />}></Route>
          <Route path="/yangiHodim/:id" element={<YangiHodim />}></Route>
          <Route path="/chat" element={<Chat />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/Fanlar" element={<Fanlar />}></Route>
        </Routes>
      </Flex>
    </Box>
  );
}

export default App;
