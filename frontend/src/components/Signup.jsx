import React, { useState } from "react";
import {
  Box,
  Center,
  Flex,
  Image,
  Input,
  Button,
  VStack,
  Text,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  FormControl, // Import FormControl
  FormLabel, // Import FormLabel
  Divider,
} from "@chakra-ui/react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
import { redirect, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const Signup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [signupMessage, setSignupMessage] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  const [formData, setFormData] = useState({
    signupName: "",
    signupEmail: "",
    signupPassword: "",
    loginEmail: "",
    loginPassword: "",
  });

  const navigate = useNavigate();

  const loader = async () => {
    return navigate("/dashboard");
  };
  const handleSignup = async () => {
    setIsLoading(true);

    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        formData.signupEmail,
        formData.signupPassword
      );
      console.log(user);
      loader();
    } catch (error) {
      // console.log(error)
      setSignupMessage("Invalid email or password");
      // setSignupMessage(error.message);
    } finally {
      setIsLoading(false);
    }
    // Simulate a 3-second delay
    // setTimeout(async () => {
    //   try {
    //     const response = await fetch(
    //       "http://localhost:5000/api/auth/createuser",
    //       {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //           name: formData.signupName,
    //           email: formData.signupEmail,
    //           password: formData.signupPassword,
    //         }),
    //       }
    //     );

    //     const data = await response.json();

    //     if (response.status === 200 && data.success) {
    //       setSignupMessage("Registration successful!");
    //       // Save authtoken to localStorage
    //       localStorage.setItem("authtoken", data.authtoken);
    //     } else {
    //       setSignupMessage(data.error || "Registration failed.");
    //     }
    //   } catch (error) {
    //     setSignupMessage("Registration failed. Please try again later.");
    //   } finally {
    //     setIsLoading(false);
    //   }
    // }, 3000);
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
          // Save authtoken to localStorage
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

  const handleGoogleSignup = async (e) => {
    const provider = await new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
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
          {/* <Image src="/logo.png" alt="Company Logo" mb="4" /> Replace with your logo */}
          <Tabs isFitted variant="enclosed" colorScheme="teal">
            <TabList>
              <Tab>Sign Up</Tab>
              <Tab>Login</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <VStack spacing="4">
                  {/* <FormControl id="signupName" isRequired>
                    <FormLabel>Full Name</FormLabel>
                    <Input
                      type="text"
                      name="signupName"
                      value={formData.signupName}
                      onChange={handleInputChange}
                    />
                  </FormControl> */}
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
                    onClick={handleSignup}
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
                      {signupMessage.includes("successful")
                        ? "Success!"
                        : "Error!"}
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
              </TabPanel>
              <TabPanel>
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
                    status={
                      loginMessage.includes("successful") ? "success" : "error"
                    }
                    mt="4"
                  >
                    <AlertIcon />
                    <AlertTitle mr={2}>
                      {loginMessage.includes("successful")
                        ? "Success!"
                        : "Error!"}
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
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Center>
    </Box>
  );
};

export default Signup;
