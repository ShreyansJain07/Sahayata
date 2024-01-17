import { Box, Heading, Text, Link as ChakraLink, Card } from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';

// Assuming your data is in the format of a JSON object
const jobsData = [
  {
    category: 'CATEGORY',
    date: '12 Jun 2019',
    title: 'Bitters hashtag waistcoat fashion axe chia unicorn',
    description:
      'Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.',
  },
  {
    category: 'CATEGORY',
    date: '12 Jun 2019',
    title: 'Meditation bushwick direct trade taxidermy shaman',
    description:
      'Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.',
  },
  {
    category: 'CATEGORY',
    date: '12 Jun 2019',
    title: 'Woke master cleanse drinking vinegar salvia',
    description:
      'Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.',
  },
];


// {
//     "jobsData": [
//       {
//         "jobRole": "Web Developer",
//         "companyName": "TechCo",
//         "location": "Remote",
//         "hiringStatus": "Open",
//         "compensation": "$80,000 - $100,000",
//         "experience": "2+ years",
//         "disabilityTypes": ["Visual Impairment", "Neurodiversity"]
//       },
//       {
//         "jobRole": "Data Analyst",
//         "companyName": "DataTech",
//         "location": "New York",
//         "hiringStatus": "Closed",
//         "compensation": "$70,000 - $90,000",
//         "experience": "3+ years",
//         "disabilityTypes": ["Mobility Impairment", "Speech Impairment"]
//       },
//       {
//         "jobRole": "Marketing Specialist",
//         "companyName": "MarketPro",
//         "location": "San Francisco",
//         "hiringStatus": "Open",
//         "compensation": "$60,000 - $80,000",
//         "experience": "1+ year",
//         "disabilityTypes": ["Invisible Disabilities", "Cognitive Disabilities"]
//       },
//       {
//         "jobRole": "Graphic Designer",
//         "companyName": "DesignHub",
//         "location": "Los Angeles",
//         "hiringStatus": "Open",
//         "compensation": "$75,000 - $95,000",
//         "experience": "2+ years",
//         "disabilityTypes": ["Visual Impairment", "Neurodiversity"]
//       },
//       {
//         "jobRole": "Customer Support Representative",
//         "companyName": "SupportNow",
//         "location": "Remote",
//         "hiringStatus": "Closed",
//         "compensation": "$50,000 - $70,000",
//         "experience": "1+ year",
//         "disabilityTypes": ["Hearing Impairment", "Speech Impairment"]
//       },
//       {
//         "jobRole": "Software Engineer",
//         "companyName": "CodeCraft",
//         "location": "Seattle",
//         "hiringStatus": "Open",
//         "compensation": "$90,000 - $110,000",
//         "experience": "3+ years",
//         "disabilityTypes": ["Mobility Impairment", "Neurodiversity"]
//       },
//       {
//         "jobRole": "Content Writer",
//         "companyName": "ContentPro",
//         "location": "Remote",
//         "hiringStatus": "Open",
//         "compensation": "$55,000 - $75,000",
//         "experience": "1+ year",
//         "disabilityTypes": ["Invisible Disabilities", "Cognitive Disabilities"]
//       },
//       {
//         "jobRole": "Human Resources Specialist",
//         "companyName": "HR Solutions",
//         "location": "Chicago",
//         "hiringStatus": "Closed",
//         "compensation": "$65,000 - $85,000",
//         "experience": "2+ years",
//         "disabilityTypes": ["Intellectual Disabilities", "Psychiatric Disabilities"]
//       },
//       {
//         "jobRole": "UX/UI Designer",
//         "companyName": "DesignInnovate",
//         "location": "Remote",
//         "hiringStatus": "Open",
//         "compensation": "$80,000 - $100,000",
//         "experience": "3+ years",
//         "disabilityTypes": ["Visual Impairment", "Neurodiversity"]
//       },
//       {
//         "jobRole": "Social Media Coordinator",
//         "companyName": "SocialConnect",
//         "location": "Austin",
//         "hiringStatus": "Open",
//         "compensation": "$60,000 - $80,000",
//         "experience": "2+ years",
//         "disabilityTypes": ["Speech Impairment", "Invisible Disabilities"]
//       }
//     ]
//   }
  
const JobList = () => {
  return (
    <Card as="section" p={24} overflow="hidden">
      {jobsData.map((job, index) => (
        <Box key={index} py={8} borderBottom="2px" borderColor="gray.100">
          <Box flexWrap="wrap" md="nowrap" display="flex">
            <Box mb={{ base: 4, md: 0 }} mr={{ md: 6 }} flexShrink={0} flexDir="column">
              <Text fontWeight="semibold" color="gray.700">
                {job.category}
              </Text>
              <Text mt={1} fontSize="sm" color="gray.500">
                {job.date}
              </Text>
            </Box>
            <Box flexGrow={1}>
              <Heading as="h2" fontSize="2xl" fontWeight="medium" color="gray.900" mb={2}>
                {job.title}
              </Heading>
              <Text>{job.description}</Text>
              <ChakraLink
                color="indigo.500"
                inlineFlex
                itemsCenter
                mt={4}
                href="#"
                _hover={{ textDecor: 'underline' }}
              >
                Learn More
                <FaArrowRight size={16} ml={2} />
              </ChakraLink>
            </Box>
          </Box>
        </Box>
      ))}
    </Card>
  );
};

export default JobList;
