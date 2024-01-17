import { Box, Flex, Heading, Text, Badge, Button, Stack } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

const highlightAnimation = keyframes`
  0% { border-color: #FF0080; }
  14% { border-color: #FF0000; }
  28% { border-color: #FF7F00; }
  42% { border-color: #FFFF00; }
  57% { border-color: #00FF00; }
  71% { border-color: #0000FF; }
  85% { border-color: #4B0082; }
  100% { border-color: #8B00FF; }
`;

const PricingTable = () => {
  const plans = [
    {
      title: "Basic",
      price: "$9.99",
      features: ["Feature 1", "Feature 2", "Feature 3"],
    },
    {
      title: "Pro",
      price: "$19.99",
      features: ["Feature 1", "Feature 2", "Feature 3"],
      highlight: true,
    },
    {
      title: "Premium",
      price: "$29.99",
      features: ["Feature 1", "Feature 2", "Feature 3"],
    },
  ];

  return (
    <Flex
      maxW="container.xl"
      mx="auto"
      py={10}
      flexWrap={{ base: "wrap", md: "nowrap" }}
      justifyContent="center"
    >
      {plans.map((plan, index) => (
        <Box
          key={index}
          flex={{ base: "0 0 100%", md: "0 0 30%" }}
          bg="white"
          p={6}
          shadow="lg"
          borderWidth={index === 1 ? "4px" : "0px"}
          borderRadius="md"
          textAlign="center"
          mb={4}
          mr={{ base: 0, md: 4 }}
          position="relative"
          overflow="hidden"
          animation={`${highlightAnimation} 10s linear infinite`}
        >
          {plan.highlight && (
            <Badge
              variant="solid"
              colorScheme="green"
              mb={4}
              position="absolute"
              top="-2px"
              left="-2px"
              right="-2px"
              bottom="-2px"
              zIndex={-1}
            />
          )}
          <Heading as="h1" size="md" mb={4}>
            {plan.title}
          </Heading>
          <Text fontSize="3xl" fontWeight="bold" mb={6}>
            {plan.price}
          </Text>
          <Stack spacing={2}>
            {plan.features.map((feature, i) => (
              <Text key={i}>{feature}</Text>
            ))}
          </Stack>
          <Button colorScheme="green" mt={6}>
            Select
          </Button>
        </Box>
      ))}
    </Flex>
  );
};

export default PricingTable;
