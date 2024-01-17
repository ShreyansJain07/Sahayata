import React from 'react';
import {
  Box,
  Heading,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Flex,
  Spacer,
  SimpleGrid,
  Center,
  Progress,
} from '@chakra-ui/react';

const StudentProfile = () => {
  return (
    <Flex
      flexWrap={{ base: "wrap", lg: "nowrap" }} // Wrap on small screens, nowrap on large screens
      justify="center"
      alignItems="center"
      p={4}
    >
      <Box
        w={{ base: "50%", lg: "25%" }} // 50% width on small screens, 25% width on large screens
        p={4}
      >
        Box 1
      </Box>
      <Box
        w={{ base: "50%", lg: "25%" }}
        p={4}
      >
        Box 2
      </Box>
      <Box
        w={{ base: "50%", lg: "25%" }}
        p={4}
      >
        Box 3
      </Box>
      <Box
        w={{ base: "50%", lg: "25%" }}
        p={4}
      >
        Box 4
      </Box>
    </Flex>
  );
};

export default StudentProfile;
