import React, { useState, useEffect } from "react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
import {
  Box,
  Flex,
  Spacer,
  Link,
  Button,
  Image,
  Heading,
  chakra,
  useMediaQuery,
  IconButton,
  useDisclosure,
  Tag,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const NavbarLink = ({ to, children }) => (
  <motion.Box
    whileHover={{ color: "white", y: -10 }}
    transition={{ duration: 0.3 }}
    initial={{ color: "black", y: 0 }}
    m={4}
    p={4}
  >
    <NavLink to={to}>
      {children}</NavLink>
    &nbsp;&nbsp;
  </motion.Box>
);

const Navbar = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const { isOpen, onToggle } = useDisclosure();
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsSticky(scrollTop > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
    <Box
      as="nav"
      bg="blue.500"
      opacity={0.9}
      p={4}
      position={isSticky ? "fixed" : "relative"}
      left={0}
      right={0}
      top={0}
      zIndex={999}
    >
      <Flex
        alignItems="center"
        justifyContent={isLargerThan768 ? "space-between" : "center"}
        mx="auto"
        flexWrap="wrap"
        maxW="container.xl"
        px={4}
        py={2}
        align="center"
      ><Image height={10} width={10} src="/public/logo1.png" />
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.5 }}
          animate={{ opacity: 1, y: 2, scale: 1.5, x:40 }}
          transition={{ duration: 1 }}
        >
          

          <NavbarLink to="/">

        <Heading as="span" fontWeight="bold" fontSize="xl"
        //  as="h1" 
         size="lg" 
         color="black"
          textAlign="left">
          CareerCompass
        </Heading>
        </NavbarLink>
        </motion.div>
        <Spacer />

        <Box display={{ base: "block", md: "none" }}>
          <IconButton
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            onClick={onToggle}
            variant="ghost"
            size="md"
            aria-label="Toggle Menu"
          />
        </Box>
        <Box
          display={{ base: isOpen ? "block" : "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          justifyContent="flex-end"
        >
          <NavbarLink to="/">Home</NavbarLink>
          <NavbarLink to="/about">About</NavbarLink>
          <NavbarLink to="/help">Help</NavbarLink>
          <NavbarLink to="/help/contact">Contact Us</NavbarLink>
          <NavbarLink to="/resources">Resources</NavbarLink>
        <NavbarLink to="/forum">Forum</NavbarLink>
        </Box>
        <NavLink to="/authenticate">
          <Button colorScheme="whiteAlpha">Login</Button>
        </NavLink>
      </Flex>
    </Box>
    </div>
    
  );
};

export default Navbar;
