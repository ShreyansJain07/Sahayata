import {
    Box,
    Flex,
    Text,
    Image,
    VStack,
    AspectRatio,
    Center,
    Container,
  } from "@chakra-ui/react";
  
  const HorizontalScrollPane = () => {
    return (
      <Flex
        overflowX="auto"
        whiteSpace="nowrap"
        paddingX={{ base: "1rem", md: "2rem" }}
        paddingBottom={{ base: "1rem", md: "2rem" }}
        borderRadius="lg"
        boxShadow="md"
        sx={{
          "&::-webkit-scrollbar": {
            width: "0.4em",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "transparent",
          },
        }}
      >
        <Box
          width={{ base: "100%", md: "50%" }}
          marginBottom={{ base: "1rem", md: 0 }}
          marginRight={{ base: 0, md: "1rem" }}
          borderRadius="xl"
          background="white"
          display="flex"
          flexDirection="column"
          mr={3}
          p={{ base: "2", md: "6" }} // Responsive padding
        >
          <Box flex="3">
            <AspectRatio minWidth={"auto"} ratio={16 / 9}>
              <Image
                src="hand.jpg" // Replace with your image URL
                alt="Image"
                objectFit="cover"
                width="100%"
                height="100%"
                borderRadius="lg"
              />
            </AspectRatio>
          </Box>
          <Box flex="2" padding="1rem">
            <VStack spacing="1rem">
              <Text fontWeight="bold" fontSize={{ base: "xl", md: "4xl" }}>
                How to save yourself...
              </Text>
                  
            </VStack>
          </Box>
        </Box>
  
        <Box
          width={{ base: "100%", md: "50%" }}
          marginBottom={{ base: "1rem", md: 0 }}
          marginRight={{ base: 0, md: "1rem" }}
          borderRadius="xl"
          background="white"
          display="flex"
          flexDirection="column"
          mr={3}
          p={{ base: "2", md: "6" }} // Responsive padding
        >
          <Box flex="3">
            <AspectRatio minWidth={"auto"} ratio={16 / 9}>
              <Image
                src="stock_graph.jpg" // Replace with your image URL
                alt="Image"
                objectFit="cover"
                width="100%"
                height="100%"
                borderRadius="lg"
              />
            </AspectRatio>
          </Box>
          <Box flex="2" padding="1rem">
            <VStack spacing="1rem">
              <Text fontWeight="bold" fontSize={{ base: "xl", md: "4xl" }}>
                Learn how to minimize loss...
              </Text>
                  
            </VStack>
          </Box>
        </Box>
  
        <Box
          width={{ base: "100%", md: "50%" }}
          marginBottom={{ base: "1rem", md: 0 }}
          marginRight={{ base: 0, md: "1rem" }}
          borderRadius="xl"
          background="white"
          display="flex"
          flexDirection="column"
          mr={3}
          p={{ base: "2", md: "6" }} // Responsive padding
        >
          <Box flex="3">
            <AspectRatio minWidth={"auto"} ratio={16 / 9}>
              <Image
                src="rate.jpg" // Replace with your image URL
                alt="Image"
                objectFit="cover"
                width="100%"
                height="100%"
                borderRadius="lg"
              />
            </AspectRatio>
          </Box>
          <Box flex="2" padding="1rem">
            <VStack spacing="1rem">
              <Text fontWeight="bold" fontSize={{ base: "xl", md: "4xl" }}>
                Learn how to make money ...
              </Text>
                
            </VStack>
          </Box>
        </Box>
      </Flex>
    );
  };
  
  export default HorizontalScrollPane;
  