import React, { useState } from "react";
import {
  Box,
  Button,
  Heading,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Stack,
  Badge,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";

const AppointmentCard = ({ appointment }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" bg={"white"} p={4} m={2}>
      <Heading size="md">{appointment.doctorName}</Heading>
      <Text>Date: {appointment.date}</Text>
      <Text>Time: {appointment.time}</Text>
      <Text>Location: {appointment.location}</Text>
      <Text>Specialty: {appointment.specialty}</Text>
      <Text>Status: {appointment.status}</Text>
      <Button onClick={openModal} colorScheme="teal" size="sm">
        View Details
      </Button>

      <Modal isOpen={isOpen} onClose={closeModal} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Appointment Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Heading size="lg">{appointment.doctorName}</Heading>
            <Text>Doctor Details:</Text>
            <SimpleGrid columns={2} spacing={4}>
              <Box>
                <Text>Reviews: {appointment.doctorReviews}</Text>
                <Text>Tenure: {appointment.doctorTenure}</Text>
              </Box>
              <Box>
                <Text>Rating: {appointment.doctorRating}</Text>
                <Text>Specialty: {appointment.doctorSpecialty}</Text>
              </Box>
            </SimpleGrid>

            <Text>Appointment Details:</Text>
            <Stack spacing={2}>
              <Text>Date: {appointment.date}</Text>
              <Text>Time: {appointment.time}</Text>
              <Text>Location: {appointment.location}</Text>
              <Text>Status: {appointment.status}</Text>
            </Stack>

            <Text>Options:</Text>
            <VStack spacing={2}>
              <Button colorScheme="teal">Download Receipt</Button>
              <Button colorScheme="blue">Download Prescription</Button>
              <Button colorScheme="green">View Full Details</Button>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="gray" onClick={closeModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default AppointmentCard;
