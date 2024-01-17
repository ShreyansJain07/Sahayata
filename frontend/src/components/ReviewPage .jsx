import React, { useState } from "react";
import {
  Box,
  Textarea,
  Button,
  Image,
  Icon,
  Text

} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import reviewvector from "../assets/review-vector.jpg";

const ReviewPage = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (newRating) => {
    setRating(newRating);
  };

  return (
    <Box display={{ base: "block", md: "flex" }} p={8} maxW="container.lg">
      <Box
        flex={{ base: "none", md: "1" }}
        p={8}
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignItems={{ base: "center", md: "flex-start" }}
      >
        <Text fontSize="xl" fontWeight="semibold" color="blue.800">
          Add a Review
        </Text>
        <Textarea
          rows={7}
          placeholder="Write your message!"
          rounded="md"
          shadow="md"
          border="1px"
          borderColor="gray.300"
          fontSize="sm"
          p={4}
          w={{ base: "100%", md: "80%" }}
          mt={4}
          outline="none"
          _focus={{
            borderColor: "gray.600",
          }}
        />
        <Box mt={8}>
          <Text fontSize="md" fontWeight="semibold" mb={2}>
            Rate:
          </Text>
          <Box>
            {[1, 2, 3, 4, 5].map((star) => (
              <Icon
                key={star}
                as={StarIcon}
                w={6}
                h={6}
                color={star <= rating ? "yellow.400" : "gray.300"}
                cursor="pointer"
                onClick={() => handleRating(star)}
              />
            ))}
          </Box>
        </Box>
        <Box mt={8}>
          <Button
            px={4}
            py={2}
            rounded="md"
            bg="blue.600"
            border="1px"
            borderColor="blue.800"
            color="white"
            fontSize="sm"
            fontWeight="semibold"
            cursor="pointer"
            _hover={{
              bg: "blue.700",
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
      <Box
        w={{ base: "100%", md: "50%" }}
        display="flex"
        justifyContent="center"
        p={8}
      >
        <Image src={reviewvector} alt="Logo" width={400} />
      </Box>
    </Box>
  );
};

export default ReviewPage;
