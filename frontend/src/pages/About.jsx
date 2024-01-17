import React, { useEffect, useState } from "react";
import { Box, Heading, Text, VStack,Container } from "@chakra-ui/react";
import { Navigate, useSearchParams } from "react-router-dom";
export default function About() {
  return (
    <>
    <Container >
    <VStack spacing="4" align="start" py={4}>
      <Heading as="h2" size="lg">
        About Us
      </Heading>
      <Text>
      At CareerCompass, we are passionate about guiding individuals on their unique career journeys. 
      We understand that choosing the right path can be both exciting and overwhelming. That's why we've created 
      a comprehensive platform dedicated to empowering you with the knowledge and 
      confidence needed to make informed decisions about your future.
      </Text>
      <Text>
        With CareerCompass, you can say goodbye to the hassle of manually finding suitable careers.
         Our sophisticated algorithms transform assessment data into tailored career recommendations.
          Whether you're aspiring for a specific profession, industry, or educational path, our recommendations are 
          finely tuned to align with your individuality,
         ensuring your career choices are a perfect match for your aspirations.
      </Text>
      <Text>
        But that's not all! Our AI-driven system will give you data insights along with it we also have
         vast repository of resources - from articles and videos to courses - providing you with the 
         essentials you needed to succeed.
      </Text>
      <Text>
        Career Compass is not just a platform, it's a community of like-minded 
         individuals.Here, you find a network of support, advice, and inspiration. 
         Career Compass is where connections are made,
          ideas are exchanged, and dreams are nurtured.
      </Text>
      <Text>
        CareerCompass is designed to empower you to take control of your career
        journey. We serve as the ultimate navigator in the complex maze of career choices.
        Your compass is set - let's embark on this journey together.
      </Text>
    </VStack>
    </Container>
    
    </>
  );
}
