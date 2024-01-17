import React from 'react';
import {
  Box,
  Container,
  Avatar,
  Heading,
  Text,
  Button,
  Divider,
  Tag,
  Badge,
  Flex,
} from '@chakra-ui/react';
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';

const Profile = () => {
  return (
    <Container maxW="container.lg">
      <Box
        mt={8}
        p={6}
        borderWidth={1}
        borderRadius="lg"
        boxShadow="lg"
        bg="white"
        textAlign="center"
      >
        <Avatar
          size="2xl"
          name="Rito Mukherjee"
          src="https://bit.ly/dan-abramov"
          mx="auto"
        />
        <Heading mt={4}>Rito Mukherjee</Heading>
        <Flex justify="center" align="center" mt={2}>
          <Tag variant="subtle" colorScheme="green">
            Premium User
          </Tag>
          <Badge ml={2} colorScheme="teal">
            Verified
          </Badge>
        </Flex>
        <Divider mt={4} mb={4} />
        <Box fontSize={['md', 'lg', 'xl']}>
          <Text>Contact</Text>
          <Flex align="center" mt={2}>
            <EmailIcon mr={2} />
            <Text>rita@gmail.com</Text>
          </Flex>
          <Flex align="center" mt={2}>
            <PhoneIcon mr={2} />
            <Text>+91 9820123456</Text>
          </Flex>
          <Flex align="center" mt={2}>
            {/* <LocationIcon mr={2} /> */}
            <Text>Mumbai, India</Text>
          </Flex>
        </Box>
        <Button mt={4} colorScheme="blue">
          Edit Profile
        </Button>
      </Box>
    </Container>
  );
};

export default Profile;
