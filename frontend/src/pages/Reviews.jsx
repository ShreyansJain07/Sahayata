//work in progress
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Avatar,
  Input,
  Button,
} from '@chakra-ui/react';

// Define sample review data
const reviewsData = [
  {
    id: 1,
    author: 'John Doe',
    avatar: 'https://via.placeholder.com/40',
    rating: 4.5,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget mauris nulla.',
  },
  {
    id: 2,
    author: 'Jane Smith',
    avatar: 'https://via.placeholder.com/40',
    rating: 5,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel urna eget elit dignissim dictum.',
  },
  // Add more reviews as needed
];

const initialReview = {
  id: 0,
  author: 'New User',
  avatar: 'https://via.placeholder.com/40',
  rating: 0,
  content: '',
};

const Reviews = () => {
  const [reviews, setReviews] = useState(reviewsData);
  const [newReview, setNewReview] = useState({ ...initialReview });

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prevReview) => ({
      ...prevReview,
      [name]: value,
    }));
  };

  const handleAddReview = () => {
    if (newReview.content.trim() !== '') {
      setReviews((prevReviews) => [...prevReviews, { ...newReview, id: Date.now() }]);
      setNewReview({ ...initialReview });
    }
  };

  return (
    <Container maxW="container.lg">
      <Heading mt={8} mb={4}>
        Reviews
      </Heading>
      <Slider {...settings}>
        {reviews.map((review) => (
          <Box
            key={review.id}
            p={4}
            borderWidth={1}
            borderRadius="lg"
            boxShadow="lg"
            bg="white"
            mb={4}
          >
            <HStack spacing={3}>
              <Avatar size="sm" bgColor={'blue.200'} src="https://bit.ly/broken-link" alt={review.author} />
              <Text fontWeight="bold">{review.author}</Text>
            </HStack>
            <Text mt={2} fontSize="lg">
              {review.content}
            </Text>
            <Box mt={3}>
              {[...Array(5)].map((_, index) => (
                <span
                  key={index}
                  role="img"
                  aria-label="star"
                  style={{ marginRight: '4px' }}
                >
                  {index < review.rating ? '⭐' : '☆'}
                </span>
              ))}
            </Box>
          </Box>
        ))}
      </Slider>
      <Box mt={8}>
        <Heading fontSize="xl" mb={2}>
          Add a Review
        </Heading>
        <Input
          name="content"
          placeholder="Write your review here..."
          value={newReview.content}
          onChange={handleInputChange}
          size="lg"
        />
        <Button
          colorScheme="teal"
          mt={4}
          onClick={handleAddReview}
          disabled={newReview.content.trim() === ''}
        >
          Add Review
        </Button>
      </Box>
    </Container>
  );
};

export default Reviews;
