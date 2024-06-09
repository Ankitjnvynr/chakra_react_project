import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { HiUserCircle } from "react-icons/hi";

const TopNav = ({ title }) => {
  return (
    <Box>
      <HStack
        h="16"
        maxW={"70rem"}
        justify={"space-between"}
              px={32}
              m={'auto'}
        w={"100%"}>
        <Heading fontWeight={"medium"} fontSize={"20px"}>
          {title}
        </Heading>
        <Menu>
          <MenuButton>
            <Icon as={HiUserCircle} fontSize={"2rem"} />
          </MenuButton>
          <MenuList>
            <MenuItem>Logout</MenuItem>
            <MenuItem>Support</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default TopNav;
