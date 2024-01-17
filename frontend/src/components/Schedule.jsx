import React, { useState, useEffect } from "react";
import { Box, Flex, useBreakpointValue, SimpleGrid } from "@chakra-ui/react";
import AppointmentCard from "./AppointmentCard";

const Schedule = () => {
  const [appointments, setAppointments] = useState([]);
  const numColumns = useBreakpointValue({ base: 1, sm: 2, md: 3 });

  useEffect(() => {
    // Fetch appointment data from the API
    fetch("http://localhost:5000/api/data")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data.appointments)) {
          setAppointments(data.appointments);
        } else {
          console.error("Data is not an array:", data);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <Box bg="white" py={4}>
      <Flex justify="center">
        <SimpleGrid columns={numColumns} spacing={4} maxW="container.lg">
          {appointments.map((appointment, index) => (
            <AppointmentCard key={index} appointment={appointment} />
          ))}
        </SimpleGrid>
      </Flex>
    </Box>
  );
};

export default Schedule;
