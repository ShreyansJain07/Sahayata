import React from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <Box py={20} textAlign="center" bg="red.400">
      <Heading as="h1" size="2xl" mb={4} color={"white"}>
        Error
      </Heading>
      <Text fontSize="6xl" mb={8} color={"white"}>
        404 - Page Not Found
      </Text>
      <NavLink to="/">
        <Button
          my={10}
          bg="white"
          color="red.400"
          _hover={{ bg: "red.500" }}
        >
          Go back to /home
        </Button>
      </NavLink>
      <Text fontSize="xl" mb={6} color={"white"}>
        Oops! The page you are looking for cannot be found. It may have been
        moved, deleted, or never existed in the first place.
      </Text>
      <Text fontSize="xl" mb={6} color={"white"}>
        Here are a few suggestions:
      </Text>
      <Text fontSize="xl" mb={6} color={"white"}>
        1. Double-check the URL for any typos or errors.
      </Text>
      <Text fontSize="xl" mb={6} color={"white"}>
        2. Return to the homepage by clicking on the logo or using the
        navigation menu.
      </Text>
      <Text fontSize="xl" mb={6} color={"white"}>
        3. Contact our support team at{" "}
        <a href="mailto:support@example.com" style={{ color: "white" }}>
          support@example.com
        </a>{" "}
        if you believe this is an issue we should investigate.
      </Text>
      <Text fontSize="xl" color={"white"}>
        We apologize for any inconvenience, and thank you for visiting our
        website.
      </Text>
      <NavLink to="/">
        <Button
          mt={10}
          bg="white"
          color="red.400"
          _hover={{ bg: "red.500" }}
        >
          Go back to /home
        </Button>
      </NavLink>
    </Box>
  );
};

export default NotFound;
