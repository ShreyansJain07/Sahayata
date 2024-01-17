import React from 'react';
import { Box, Flex, Image, Text, Grid, GridItem, ChakraProvider, Container } from "@chakra-ui/react";
import DoctorAppointmentForm from './DoctorAppointmentForm';
import Schedule from './Schedule';

function Dashboard() {
  return (
    <Box>
      <Schedule/>
      <Flex
        direction={['column', 'row']} // Adjust layout for different screen sizes
        justify="center"
        align="center"
        minHeight="100vh"
        padding={4}
      >
        <Box width={['100%', '40%']} maxWidth="400px" padding={4}>
          <Image
            src="https://via.placeholder.com/300" // Replace with your image URL
            alt="Dashboard Image"
            borderRadius="md"
            width="100%"
          />
        </Box>

        <Grid
          templateColumns={['1fr', '1fr 1fr']} // Adjust grid columns for responsiveness
          gap={4}
          width={['100%', '60%']}
        >
          <GridItem>
            <Text fontSize="xl">Dashboard Item 1</Text>
            <Text>Description or details here.</Text>
          </GridItem>
          <GridItem>
            <Text fontSize="xl">Dashboard Item 2</Text>
            <Text>Description or details here.</Text>
          </GridItem>
          {/* Add more GridItems as needed */}
        </Grid>
      </Flex>
      <Container bg={'white'}>
<DoctorAppointmentForm/>
      </Container>
      </Box>
  );
}

export default Dashboard;
