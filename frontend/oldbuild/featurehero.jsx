

import React from 'react'

export default function featurehero() {
  return (
     
    <Box
      bg="blue.800"
      color="white"
      py={{ base: 16, md: 24 }}
      px={{ base: 4, md: 8 }}
    >
      <Container maxW="container.lg">
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(12, 1fr)" }}
          gap={4}
          alignItems="center"
        >
           <GridItem colSpan={{ base: 12, md: isSmallerThanMd ? 0 : 6 }}>
            {/* Add an image here */}
            <Image src="img-bg-opn1.png" alt="CareerCompass Image" height={"80%"}/>
          </GridItem>
          <GridItem
            colSpan={{ base: 12, md: isSmallerThanMd ? 12 : 6 }}
            textAlign={isSmallerThanMd ? "center" : "left"}
          >
            <Heading as="h1" size="xl" mb={4}>
              Get the Best Career Guidance at CareerCompass
            </Heading>
            <Text fontSize={{ base: "md", md: "lg" }} mb={8}>
            CareerCompass is your trusted companion in 
            navigating the complexities of career choices. 
            Utilising advanced AI technology, we offer seamless
             aptitude testing experiences for students to simplifying your
             journey, providing you with the insights and confidence necessary
              to make informed decisions about your future. 
            </Text>
            <SimpleGrid columns={2} spacing={4} mb={8}>
              <VStack align={isSmallerThanMd ? "center" : "start"}>
                <Icon as={CheckIcon} color="green.200" boxSize={6} />
                <Text>A range of comprehensive assessments  to build a holistic profile. </Text>
              </VStack>
              <VStack align={isSmallerThanMd ? "center" : "start"}>
                <Icon as={CheckIcon} color="green.200" boxSize={6} />
                <Text>AI-driven system for ideal career suggestion</Text>
              </VStack>
              <VStack align={isSmallerThanMd ? "center" : "start"}>
                <Icon as={CheckIcon} color="green.200" boxSize={6} />
                <Text>Explore a vast Resource Library tailored to your chosen field.</Text>
              </VStack>
              <VStack align={isSmallerThanMd ? "center" : "start"}>
                <Icon as={CheckIcon} color="green.200" boxSize={6} />
                <Text>Get insights into emerging industries, job trends, 
                  and salary expectations </Text>
              </VStack>
              <VStack align={isSmallerThanMd ? "center" : "start"}>
                <Icon as={CheckIcon} color="green.200" boxSize={6} />
                <Text>Personalised User Profile </Text>
              </VStack>
              <VStack align={isSmallerThanMd ? "center" : "start"}>
                <Icon as={CheckIcon} color="green.200" boxSize={6} />
                <Text>Community Forum </Text>
              </VStack>
            </SimpleGrid>
            <NavLink to="/authenticate">
            <Button
              colorScheme="whiteAlpha"
              size="lg"
              fontWeight="bold"
              _hover={{ bg: "blue.200", color: "blue.500" }}
            >
              Get Started
            </Button>
            </NavLink>
          </GridItem>
         
        </Grid>
      </Container>
    </Box>
  )
}
