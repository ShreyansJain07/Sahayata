import React from 'react';
import {
  Box,
  Container,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  VStack,
  Text,
} from '@chakra-ui/react';
import ForumApp from '../components/ForumApp';

const Forum = () => {
  const latestPosts = [
    { id: 1, title: 'Post 1', content: 'Content of post 1 goes here.' },
    { id: 2, title: 'Post 2', content: 'Content of post 2 goes here.' },
    // Add more posts as needed
  ];

  return (
    <Container maxW="container.lg" py={8}>
      <Heading mb={4}>Forum</Heading>

      <Box display={{ base: 'block', md: 'flex' }}>
        {/* Latest Posts (Accordion) */}
        <Box flex={{ base: '1', md: '1', lg: '2' }} mr={{ md: '4' }}>
          <Heading size="md" mb={2}>
            Latest Posts
          </Heading>
          <Accordion allowMultiple>
            {latestPosts.map((post) => (
              <AccordionItem key={post.id}>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          {post.title}
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} display={isExpanded ? 'block' : 'none'}>
                      {post.content}
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </Box>

        {/* Detailed Latest Posts */}
        <Box flex={{ base: '1', md: '1', lg: '3' }}>
          <Heading size="md" mb={2}>
            Latest Posts (Detailed)
          </Heading>
          <VStack align="start" spacing={4}>
           <ForumApp/>
          </VStack>
        </Box>
      </Box>
    </Container>
  );
};

export default Forum;
