import React, { useState } from "react";
import {
  Box,
  Center,
  Flex,
  Input,
  Button,
  VStack,
  FormControl,
  FormLabel,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from "@chakra-ui/react";
import { signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loginMessage, setLoginMessage] = useState("");
  const [formData, setFormData] = useState({
    loginEmail: "",
    loginPassword: "",
  });

  const navigate = useNavigate();

  const loader = async () => {
    return navigate("/dashboard");
  };

  const handleLogin = async () => {
    setIsLoading(true);

    // Simulate a 3-second delay
    setTimeout(async () => {
      try {
        const response = await fetch("http://localhost:5000/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.loginEmail,
            password: formData.loginPassword,
          }),
        });

        const data = await response.json();

        if (response.status === 200 && data.success) {
          setLoginMessage("Login successful!");
          localStorage.setItem("authtoken", data.authtoken);
          loader();
        } else {
          setLoginMessage(data.error || "Login failed.");
        }
      } catch (error) {
        setLoginMessage("Login failed. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    }, 3000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Box
      bgImage={"/hand.jpg"} // Replace with your image path
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
            <FormControl id="loginEmail" isRequired pb={2}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="loginEmail"
                value={formData.loginEmail}
                onChange={handleInputChange}
                bg={"white"}
              />
            </FormControl>
            <FormControl id="loginPassword" isRequired pb={2}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                name="loginPassword"
                value={formData.loginPassword}
                onChange={handleInputChange}
                bg={"white"}
              />
            </FormControl>
            <Button
              colorScheme="teal"
              type="submit"
              onClick={handleLogin}
              isLoading={isLoading}
              width={"full"}
            >
              Login
            </Button>
          </VStack>
          {loginMessage && (
            <Alert
              status={loginMessage.includes("successful") ? "success" : "error"}
              mt="4"
            >
              <AlertIcon />
              <AlertTitle mr={2}>
                {loginMessage.includes("successful") ? "Success!" : "Error!"}
              </AlertTitle>
              <AlertDescription>{loginMessage}</AlertDescription>
              <CloseButton
                onClick={() => setLoginMessage("")}
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

export default Login;
