import React from "react";
import Sidenav from "./Sidenav";
import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react";
import TopNav from "./TopNav";
import SideDrawer from "./SideDrawer";

const DashboardLayout = ({ title, children }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <div>
      <Flex>
        <Sidenav />
        <SideDrawer isOpen={ isOpen} onClose={onClose}  />
        <Box flexGrow="1">
          <TopNav title={title} />
          <Container px={32} maxW={"70rem"}  >
            {children}
          </Container>
        </Box>
      </Flex>
    </div>
  );
};

export default DashboardLayout;
