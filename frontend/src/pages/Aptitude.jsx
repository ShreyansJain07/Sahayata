
   
  import React, { useState } from 'react';
  import { HStack, Box, Text, Radio, RadioGroup, Button, VStack } from '@chakra-ui/react';
  import { useToast } from '@chakra-ui/react';
  



const  career_data = [
      {
          "name": "Software Developer",
          "interests": {"problem-solving": 4, "programming": 3},
          "skills": {"technical": 4,"programming languages": 5, "software development methodologies":4},
      },
      {
          "name": "Teacher",
          "interests": {"working with children": 5, "knowledge sharing": 4, "education": 4},
          "skills": {"communication": 5 , "subject expertise": 4},
      },
      {
          "name": "Graphic Designer",
          "interests": {"artistic": 4 , "creativity": 4,"designing":4},
          "skills": {"creative": 4,"Adobe Creative Suite":5,"design principles":4},
      },
      {
          "name": "Data Analyst",
          "interests": {"investigative": 4, "realistic": 3},
          "skills": {"analytical": 4},
      },
      {
          "name": "Nurse",
          "interests": {"medical knowledge": 5, "healthcare":4,"patient care":5},
          "skills": {"clinical assessment": 5,"biology":5,  "communication":5},
      },
      {
          "name": "Marketing Manager",
          "interests": {"marketing": 4, "consumer behavior":4,"advertising":5},
          "skills": {"strategic": 4,"analytics": 4,"creativity":5},
      },
      {
          "name": "Chef",
          "interests": {"artistic": 4,"cooking":4},
          "skills": {"culinary": 4,"menu planning":4,"food safety":4},
      },
      {
          "name": "Mechanical Engineer",
          "interests": {"realistic": 4, "problem-solving": 3,"mechanics":4,"engineering":5},
          "skills": {"Maths":5,"problem-solving":3},
      },
      {
          "name": "Artist",
          "interests": {"artistic": 5,"expressive":5},
          "skills": {"creative": 5},
      },
      {
          "name": "Financial Analyst",
          "interests": {"analytic": 4,"Maths":4},
          "skills": {"analytical": 4,"communication":5},
      },
      {
          "name": "Dentist",
          "interests": {"realistic": 4, "social": 3},
          "skills": {"dental": 5},
      },
      {
          "name": "Journalist",
          "interests": {"investigative": 5, "artistic": 4},
          "skills": {"communication": 4},
      },
      {
          "name": "Architect",
          "interests": {"artistic": 4, "realistic": 3},
          "skills": {"design": 5},
      },
      {
          "name": "Police Officer",
          "interests": {"realistic": 4, "social": 3},
          "skills": {"law enforcement": 5},
      },
      {
          "name": "Psychologist",
          "interests": {"social": 4, "investigative": 3},
          "skills": {"counseling": 5},
      },
      {
          "name": "Electrician",
          "interests": {"realistic": 4},
          "skills": {"electrical": 5},
      },
      {
          "name": "Fashion Designer",
          "interests": {"artistic": 5},
          "skills": {"creative": 4},
      },
      {
          "name": "Pharmacist",
          "interests": {"investigative": 4},
          "skills": {"pharmacy": 5},
      },
      {
          "name": "Civil Engineer",
          "interests": {"realistic": 4},
          "skills": {"civil engineering": 4},
      },
      {
          "name": "Firefighter",
          "interests": {"realistic": 4, "social": 3},
          "skills": {"firefighting": 5},
      },
      {
          "name": "Biologist",
          "interests": {"investigative": 4},
          "skills": {"biological research": 4},
      },
      {
          "name": "Actor",
          "interests": {"artistic": 5},
          "skills": {"acting": 5},
      },
      {
          "name": "Accountant",
          "interests": {"enterprising": 4},
          "skills": {"financial accounting": 4},
      },
      {
          "name": "Physician",
          "interests": {"investigative": 4, "social": 4},
          "skills": {"medical": 5},
      },
      {
          "name": "Interior Designer",
          "interests": {"artistic": 4},
          "skills": {"interior design": 4},
      },
      {
          "name": "IT Manager",
          "interests": {"enterprising": 4, "technical": 4},
          "skills": {"information technology": 4},
      },
      {
          "name": "Phlebotomist",
          "interests": {"realistic": 3, "social": 4},
          "skills": {"phlebotomy": 5},
      },
      {
          "name": "Musician",
          "interests": {"music": 5},
          "skills": {"music": 5},
      },
   
      {
          "name": "Pharmacist",
          "interests": {"chemistry": 4,"biology":4},
          "skills": {"attention to detail": 5},
      },
      {
          "name": "Pilot",
          "interests": {"travel": 4},
          "skills": {"communication": 5},
      },
      {
          "name": "Photographer",
          "interests": {"artistic": 4},
          "skills": {"editing": 5},
      },
      {
          "name": "Quality Analyst",
          "interests": {"technical": 4},
          "skills": {"problem solving": 4,"attention to detail": 4},
      },
      
      
      
      
      {
          "name": "Tourist Guide",
          "interests": {"travelling": 4,"history":3},
          "skills": {"communication": 4},
      },
      {
          "name": "Geologist",
          "interests": {"geography": 4},
          "skills": {"research": 4},
      },
      {
          "name": "Archaeologist",
          "interests": {"geography": 4,"history":4},
          "skills": {"research": 4},
      },
      {
          "name": "Fitness Trainer",
          "interests": {"sports": 5},
          "skills": {"communication": 5},
      },
      {
          "name": "UX Designer",
          "interests": {"artistic": 4, "technical": 3},
          "skills": {"creativity": 5,"technical":3},
      },
      
      {
          "name": "Electrical Engineer",
          "interests": {"maths": 4,"physics":4},
          "skills": {"problem solving": 4},
      },
     
      {
          "name": "Biomedical Engineer",
          "interests": {"biology": 5, "maths": 4},
          "skills": {"problem solving": 4},
      },
      
      
      
      {
          "name": "Event Planner",
          "interests": {"creativity": 4, "coordination": 4},
          "skills": {"time management": 4,"communication":5},
      },
      {
          "name": "Chemical Engineer",
          "interests": {"chemistry": 4, "maths": 4},
          "skills": {"problem solving": 4},
      },
      {
          "name": "Translator",
          "interests": {"social": 4, "artistic": 3},
          "skills": {"languages": 4},
      },
      {
          "name": "Zoologist",
          "interests": {"zoology": 4, "conservation": 3},
          "skills": {"animal care": 4,"research":4},
      },
      {
          "name": "Social Media Manager",
          "interests": {"enterprising": 4,"online trends":4},
          "skills": {"social media management": 4,"content creation":4},
      },
      {
          "name": "Astronomer",
          "interests": {"physics": 5},
          "skills": {"problem solving": 4},
      },
      {
          "name": "Doctor",
          "interests": {"biology": 4, "chemistry":4},
          "skills": {"communication": 5},
      },
      {
          "name": "Lawyer",
          "interests": {"law": 4},
          "skills": {"communication": 5,"problem solving":3},
      },
      {
          "name": "Environmental Scientist",
          "interests": {"research": 4,"ecology":4,"environmental conversation":5},
          "skills": {"environmental science": 4},
      },
  ]
  


  const questions = [ "I enjoy solving technical problems.",
    "I like working with children and sharing knowledge.",
    "I have a passion for artistic and creative work.",
    "I am interested in analyzing and interpreting data.",
    "I enjoy providing healthcare and taking care of patients.",
    "I have an interest in marketing and understanding consumer behavior.",
    "I enjoy cooking and experimenting with different cuisines.",
    "I am fascinated by the principles of engineering and physics.",
    "I have a strong passion for visual arts and expressiveness.",
    "I am interested in financial analysis and managing budgets.",
    "I have a passion for investigative journalism and storytelling.",
    "I have an interest in architectural design and creativity.",
    "I am interested in law enforcement and investigative work.",
    "I enjoy creating fashion designs and working with fabrics.",
    "I have an interest in designing and planning spaces.",
    "I am fascinated by the study of living organisms and biology.",
    "I enjoy performing arts and acting.",
    "I am good with numbers and enjoy financial analysis.",
    "I have an interest in interior design and aesthetics.",
    "I am passionate about music and musical instruments.",
  
    // ... (same as in your provided code)
  ];
  
  const options = ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"];
  
  function cosineSimilarity(vectorA, vectorB) {
    const dotProduct = Object.keys(vectorA).reduce((acc, interest) => acc + (vectorA[interest] * vectorB[interest]), 0);
    const magnitudeA = Math.sqrt(Object.values(vectorA).reduce((acc, val) => acc + val ** 2, 0));
    const magnitudeB = Math.sqrt(Object.values(vectorB).reduce((acc, val) => acc + val ** 2, 0));
    return dotProduct / (magnitudeA * magnitudeB);
  }
  
  const Aptitude = () => {
    const [answers, setAnswers] = useState(Array(questions.length).fill(''));
    const toast = useToast();
  
    const handleSubmit = () => {
      const userProfile = {
        interests: {},
        skills: {}
      };
  
      questions.forEach((question, index) => {
        const answerScore = {
          "Strongly Agree": 5,
          "Agree": 4,
          "Neutral": 3,
          "Disagree": 2,
          "Strongly Disagree": 1
        };
        const category = career_data[index];
        userProfile.interests[category.name] = answerScore[answers[index]];
      });
  
      const similarityScores = career_data.map(option => {
        const interestsSimilarity = cosineSimilarity(userProfile.interests, option.interests);
        const skillsSimilarity = cosineSimilarity(userProfile.skills, option.skills);
        return interestsSimilarity + skillsSimilarity;
      });
  
      const rankedOptions = career_data.map((option, index) => ({
        name: option.name,
        similarityScore: similarityScores[index]
      })).sort((a, b) => b.similarityScore - a.similarityScore);
  
      console.log("Ranked Career Options:", rankedOptions);
  
      toast({
        title: "Answers Submitted",
        description: `Selected Answers: ${answers.join(", ")}`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    };
  
    return (
      <Box width="100%" align="center" justify="center" minHeight="100vh">
        <VStack p={4} spacing={4} align="stretch">
          <h1>Career Interest Aptitude Test</h1>
          {questions.map((question, index) => (
            <Box key={index} borderWidth="1px" borderRadius="lg" p={4}>
              <Text mb={4}>{question}</Text>
              <RadioGroup onChange={(value) => setAnswers([...answers.slice(0, index), value, ...answers.slice(index + 1)])} value={answers[index]}>
                <HStack justify="center">
                  {options.map((option, optionIndex) => (
                    <Radio key={optionIndex} value={option}>
                      {option}
                    </Radio>
                  ))}
                </HStack>
              </RadioGroup>
            </Box>
          ))}
          <Button colorScheme="teal" _hover={{ bg: 'teal.200' }} onClick={handleSubmit}>
            Submit
          </Button>
        </VStack>
      </Box>
    );
  };
  
  export default Aptitude;
  