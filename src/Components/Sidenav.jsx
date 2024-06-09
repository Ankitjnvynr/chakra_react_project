import { Box, HStack, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { BsArrowDownUp } from "react-icons/bs";
import { MdSupportAgent } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";

const Sidenav = () => {
  const navLinks = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: BsArrowDownUp,
      text: "Transaction",
      link: "/transaction",
    },
  ];
  return (
    <Stack justify="space-between" boxShadow="lg" width="16rem" h="100vh">
      <Box mt="6" mx="3">
        <Heading textAlign="center" fontSize="20px" pt="3.5rem" as="h1">
          @Ankit Dashboard
        </Heading>

        <Box>
          {navLinks.map((nav) => (
            <HStack
              borderRadius="10px"
              _hover={{
                bg: "#f3f3f7",
                color: "#171717",
              }}
              color="#797e82"
              py="3"
              px="4"
              key={nav.text}>
              <Icon as={nav.icon}></Icon>
              <Text fontSize="14px" fontWeight="medium">
                {nav.text}
              </Text>
            </HStack>
          ))}
        </Box>
      </Box>
      <HStack
        borderRadius="10px"
        _hover={{
          bg: "#f3f3f7",
          color: "#171717",
        }}
        color="#797e82"
        py="3"
        px="4">
        <Icon as={MdSupportAgent}></Icon>
        <Text fontSize="14px" fontWeight="medium">
          Support
        </Text>
      </HStack>
    </Stack>
  );
};

export default Sidenav;
