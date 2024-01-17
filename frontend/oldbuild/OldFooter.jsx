import React from 'react';
import { Box, Flex, Link, Text, VStack, SimpleGrid } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box as="footer" bg="gray.800" color="white" py="6">
      <Flex
        direction={{ base: 'column', sm: 'row' }} // Stack on small screens, row on larger screens
        justify="space-between"
        align="center"
        maxW="1200px"
        mx="auto"
        px={{ base: '4', sm: '0' }} // Add some padding on small screens
      >
        <VStack spacing="4" mb={{ base: '6', sm: '0' }}> {/* Margin bottom on small screens */}
          <Text fontSize="xl">Financy</Text>
          <Text>&copy; {new Date().getFullYear()} All Rights Reserved</Text>
        </VStack>

        <SimpleGrid
          columns={{ base: 2, sm: 4 }} // 2 columns on small screens, 4 columns on larger screens
          spacing={{ base: '4', sm: '8' }} // Adjust spacing based on screen size
        >
          <VStack spacing="4">
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
          </VStack>

          <VStack spacing="4">
            <Link href="/contact">Contact</Link>
            <Link href="/privacy">Privacy Policy</Link>
          </VStack>

          <VStack spacing="4">
            <Text>Follow Us</Text>
            <Link href="#" isExternal>
              Facebook
            </Link>
            <Link href="#" isExternal>
              Twitter
            </Link>
          </VStack>

          <VStack spacing="4">
            <Link href="#" isExternal>
              LinkedIn
            </Link>
          </VStack>
        </SimpleGrid>
      </Flex>
    </Box>
  );
};

export default Footer;
