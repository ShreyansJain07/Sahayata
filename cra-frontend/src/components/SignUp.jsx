import React, { useState } from "react";
import {
  Box,
  Center,
  Flex,
  Input,
  Button,
  VStack,
  Text,
  FormControl,
  FormLabel,
  Divider,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from "@chakra-ui/react";
import { signInWithPopup, } from "firebase/auth";
import { auth, googleProvider } from "../Firebase";
import { FaGoogle } from "react-icons/fa";
import { addUserToFirestore } from "../userFirestore";

const Signup = () => {
  const isLoggedIn = auth?.currentUser;
  console.log(isLoggedIn);
  const [isLoading, setIsLoading] = useState(false);
  const [signupMessage, setSignupMessage] = useState("");
  const [formData, setFormData] = useState({
    signupName: "",
    signupEmail: "",
    signupPassword: "",
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleGoogleSignup = async (e) => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result?.user;
        addUserToFirestore(user);
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  };

  return (
    <Box
      bgImage={"/hand.jpg"}
      bgSize="cover"
      bgPosition="center"
      h="100vh"
    >
      <Center h="100%">
        <Flex
          direction="column"
          bg="white"
          p="8"
          rounded="md"
          shadow="lg"
          maxW="400px"
          w="100%"
        >
          <VStack spacing="4">
            <FormControl id="signupName" isRequired>
              <FormLabel>Full Name </FormLabel>
              <Input
                type="text"
                name="signupName"
                value={formData.signupName}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl id="signupEmail" isRequired pb={2}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="signupEmail"
                value={formData.signupEmail}
                onChange={handleInputChange}
                bg={"white"}
              />
            </FormControl>
            <FormControl id="signupPassword" isRequired pb={2}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                name="signupPassword"
                value={formData.signupPassword}
                onChange={handleInputChange}
                bg={"white"}
              />
            </FormControl>
            <Button
              colorScheme="teal"
              type="submit"
              isLoading={isLoading}
              width={"full"}
            >
              Sign Up
            </Button>
            <Divider />
            <Text>OR</Text>
            <Button
              onClick={handleGoogleSignup}
              bgColor={"black"}
              _hover={{ bgColor: "gray.800" }}
              color={"white"}
              leftIcon={<FaGoogle />}
              width={"full"}
            >
              Sign Up with Google
            </Button>
          </VStack>
          {signupMessage && (
            <Alert
              status={
                signupMessage.includes("successful") ? "success" : "error"
              }
              mt="4"
            >
              <AlertIcon />
              <AlertTitle mr={2}>
                {signupMessage.includes("successful") ? "Success!" : "Error!"}
              </AlertTitle>
              <AlertDescription>{signupMessage}</AlertDescription>
              <CloseButton
                onClick={() => setSignupMessage("")}
                position="absolute"
                right="8px"
                top="8px"
              />
            </Alert>
          )}
        </Flex>
      </Center>
    </Box>
  );
};

export default Signup;
