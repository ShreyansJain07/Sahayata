import React, { useState } from 'react';
import {
  Box,
  Container,
  useMediaQuery,
  Image,
  Flex,
  Button,
  Heading,
  Text
} from '@chakra-ui/react';

import Hero from "../components/Hero"
import StatsCard from "../components/StatsCard"
import HorizontalScrollPane from "../components/HorizontalScrollPane";
// import StreamComponent from "../components/StreamComponent";
import VoiceButton from "../components/VoiceButton";
// import Carousel from "../components/Carousel";
  const cardsData = [
    { id: 1, title: 'AI-driven guidance system', subtitle: 'AI Component', summary: 'AI-driven guidance system provides a well curated options for potential careers', image: 'https://excellediaventures.com/images/ai-new-icon.png' },
    { id: 2, title: 'Card 2', subtitle: 'Subtitle 2', summary: 'Summary 2', image: 'img-b' },
    { id: 3, title: 'COMMUNITY FORUM', subtitle: 'Subtitle 2', summary: 'Acommunity page to share experiances and interact with people having samilar interests as well as get in touch with indstry specialists', image: 'comm-img-cards1.png' },
    // Add more card data
  ];

const Home = () => {
  
  const [isSmallerThanMd] = useMediaQuery("(max-width: 768px)");
  const [selectedId, setSelectedId] = useState(null);
  
  const [textSize, setTextSize] = useState("medium");

  return (
    <Box pb={20} textAlign="center" bg="gray.200">

      <Box>
     

  <Hero></Hero>
  <StatsCard/>
 <Container
      maxW="container.lg"
      mt={8}
      px={4}
      py={6}
      mx="auto"
      textAlign="left"
    >

    </Container>
   <HorizontalScrollPane/>
    </Box>
    <main>
      <Box>
        Text size
        <Flex gap={5}>
          <Button onClick={() => setTextSize("small")}>Small</Button>
          <Button onClick={() => setTextSize("medium")}>Medium</Button>
          <Button onClick={() => setTextSize("large")}>Large</Button>
        </Flex>
      </Box>
      <Box bg="#772cf3" textAlign="center" py={5}>
        <Text fontSize="xs">WELCOME TO ....</Text>
        <Heading fontSize="2xl" py={3} fontWeight="bold">
          Lorem ipsum dolor sit amet consectetur.
        </Heading>
        <Text fontSize="xs">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit impedit
          magnam consequuntur hic sequi quas porro accusantium magni pariatur
          quaerat?
        </Text>
        <Flex justify="center" my={5} gap={5} fontWeight="semibold">
          <Button
            border="2px"
            borderColor="white"
            rounded="full"
            bg="white"
            color="#772cf3"
            px={3}
            py={1}
            fontSize="xs"
          >
            Explore
          </Button>
          <Button
            border="2px"
            borderColor="white"
            rounded="full"
            px={3}
            py={1}
            fontSize="xs"
          >
            Explore
          </Button>
        </Flex>
      </Box>
      <Box bg="white" py={10} color="black" textAlign="center">
        <Heading fontSize="2xl" fontWeight="bold">
          Meet Our Trusted Company
        </Heading>
        <Text fontSize="sm" mt={2}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit impedit
          magnam consequuntur hic sequi quas porro accusantium magni pariatur
          quaerat?
        </Text>
      </Box>
      <Box bg="white" py={10} color="black" textAlign="center">
        <Heading fontSize="2xl" fontWeight="bold">
          What We Offer
        </Heading>
        <Text fontSize="sm" mt={2}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit impedit
          magnam consequuntur hic sequi quas porro accusantium magni pariatur
          quaerat?
        </Text>
        <Box py={10}>
          {/* Repeat the following section for each block */}
          <section className="text-gray-600 body-font">
            <Container mx="auto" flex="1" px={5} py={24} mdFlexDir="row" flexDir="column" align="center">
              {/* Left side content */}
              <Box flex="1" mdW="1/2" lgPr={24} mdPr={16} flexDir="column" mdItems="start" textAlign="left" mb={16} mdMb={0} items="center">
                <Heading fontSize="lg" mb={4} fontWeight="medium" color="gray.900">
                  Before they sold out
                  <br className="hidden lg:inline-block" />
                  readymade gluten
                </Heading>
                <Text mb={8} fontSize="md" lineHeight="relaxed">
                  Copper mug try-hard pitchfork pour-over freegan heirloom
                  neutra air plant cold-pressed tacos poke beard tote bag.
                  Heirloom echo park mlkshk tote bag selvage hot chicken
                  authentic tumeric truffaut hexagon try-hard chambray.
                </Text>
                <Flex justify="center">
                  <Button
                    color="white"
                    bg="indigo.500"
                    border="0"
                    py={2}
                    px={6}
                    _hover={{ bg: "#772cf3" }}
                    rounded="sm"
                    fontSize="sm"
                  >
                    Button
                  </Button>
                  <Button
                    ml={4}
                    color="gray.700"
                    bg="gray.100"
                    border="0"
                    py={2}
                    px={6}
                    _hover={{ bg: "gray.200" }}
                    rounded="sm"
                    fontSize="sm"
                  >
                    Button
                  </Button>
                </Flex>
              </Box>
              {/* Right side image */}
              <Box lgMaxW="lg" lgW="full" mdW="1/2" w="5/6">
                <img
                  className="object-cover object-center rounded"
                  alt="hero"
                  src="https://dummyimage.com/720x600"
                />
              </Box>
            </Container>
          </section>
          {/* End of repeated section */}
        </Box>
      </Box>
      <Box py={10} mx="auto" color="black">
        <Heading fontSize="2xl" mb={10} textAlign="left" fontWeight="bold">
          Who We Are
        </Heading>
        <Flex rounded="lg" bg="gray.200">
          <Box p={5}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A culpa
            libero, quibusdam laudantium saepe cumque quis totam dicta
            adipisci, et minus rem molestiae distinctio accusamus autem
            tempora, ex temporibus dignissimos facilis optio ullam deserunt!
            Animi facilis ex nesciunt dolore nam aliquam excepturi ducimus cum
            odio consequatur. Laudantium, quisquam?
          </Box>
          <Box>
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </Box>
        </Flex>
      </Box>
    </main>

    {/* <StreamComponent/> */}
    <VoiceButton/>
    

    </Box>
  );
};

export default Home;
