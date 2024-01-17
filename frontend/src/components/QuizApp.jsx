import React, { useState,useEffect } from "react";
import {
  Box,
  Button,
  Text,
  Icon,
  Center,
  Heading,
  Divider,
  IconButton,
  Badge,
  VStack,
  Flex,
  Container,
} from "@chakra-ui/react";
import {
  CheckIcon,
  CloseIcon,
  ArrowBackIcon,
  ArrowForwardIcon,
} from "@chakra-ui/icons";

const questions = [
  {
    question: "What is the importance of budgeting in personal finance?",
    options: [
      "Helps in saving money",
      "Ensures financial stability",
      "Guides spending decisions",
      "All of the above",
    ],
    correctAnswer: "All of the above",
  },
  {
    question:
      "What is the recommended percentage of income to save for emergencies?",
    options: ["10-15%", "20-25%", "30-35%", "40-45%"],
    correctAnswer: "10-15%",
  },
  {
    question: "Why is it important to invest for the long term?",
    options: [
      "Higher returns",
      "Lower risk",
      "Capital growth",
      "All of the above",
    ],
    correctAnswer: "All of the above",
  },
  {
    question:
      "What is the purpose of diversification in an investment portfolio?",
    options: [
      "Reduce risk",
      "Increase risk",
      "Stable returns",
      "Capital preservation",
    ],
    correctAnswer: "Reduce risk",
  },
  {
    question:
      "What is the purpose of diversification in an investment portfolio?",
    options: [
      "Reduce risk",
      "Increase risk",
      "Stable returns",
      "Capital preservation",
    ],
    correctAnswer: "Reduce risk",
  },
  
  // Add more questions as needed
];

const QuizApp = () => {
  const [step, setStep] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(
    Array(questions.length).fill("")
  );
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const handleOptionSelect = (option) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions[step] = option;
    setSelectedOptions(updatedOptions);
  };

  const handleNext = () => {

    if (selectedOptions[step] === questions[step].correctAnswer) {
      setScore(score + 50);
    }

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleSubmit = () => {
    if (selectedOptions[step] === questions[step].correctAnswer) {
      setScore(score + 50);
    }

    setQuizSubmitted(true);
    setShowResults(true);
localStorage.setItem("balance",(parseFloat(localStorage.getItem("balance"))+score*10))
  };

  const handleKeyPress = (event) => {
    if (event.key === 'ArrowRight') {
      if(step >= questions.length - 1) {
        return
      }
      handleNext();
    } else if (event.key === 'ArrowLeft') {
      handlePrevious();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [step, selectedOptions, quizSubmitted]); // Include relevant dependencies


  return (
    <> <Center>

        <Heading as={"h1"} fontSize="5xl" mt={[12, 24]}> Personal Finance Quiz </Heading>
    </Center>
      <Center overflowX={"auto"} mt={[4, 8]}>
        <Box p={4}  overflowX={"auto"}>
          {!showResults && (
            <Box maxWidth="500px">
              <Box mt={4}>
                <IconButton
                  mr={2}
                  icon={<ArrowBackIcon />}
                  onClick={handlePrevious}
                  disabled={quizSubmitted}
                  colorScheme={"teal"}
                  isDisabled={step === 0}
                />
                <IconButton
                  icon={<ArrowForwardIcon />}
                  onClick={handleNext}
                  disabled={!selectedOptions[step] || quizSubmitted}
                  colorScheme={"teal"}
                  isDisabled={!(!showResults && step < questions.length - 1)}
                />
              </Box>

              <Text fontSize="2xl" mb={2}>
                Question {step + 1}
              </Text>
              <Text>{questions[step].question}</Text>

              <Box mt={4} width="60%">
                {questions[step].options.map((option, index) => (
                  <Button
                    key={index}
                    variant={selectedOptions[step] === option ? "solid" : ""}
                    colorScheme={
                      selectedOptions[step] === option ? "teal" : "gray.200"
                    }
                    mb={2}
                    onClick={() => handleOptionSelect(option)}
                    disabled={quizSubmitted}
                  >
                    {String.fromCharCode(index + 65)}. {option}
                  </Button>
                ))}
              </Box>
            </Box>
          )}
          <Box mt={4}>
            {!showResults && step === questions.length - 1 && (
              <Button
                onClick={handleSubmit}
                disabled={!selectedOptions[step] || quizSubmitted}
                colorScheme="orange"
              >
                Submit <Icon as={ArrowForwardIcon}></Icon>
              </Button>
            )}
          </Box>
          {showResults && (
                <Box mt={4} width="500px" >
                <Heading fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}>Results:</Heading>
                <VStack spacing={4} align="stretch">
                  {questions.map((question, index) => (
                    <Box key={index} mt={4}>
                      <Divider mb={2} />
                      <Badge colorScheme="orange">Question {index + 1}</Badge>
                        <Text>
                          Your Answer:{" "}
                          {selectedOptions[index] === ""
                            ? "Not answered"
                            : selectedOptions[index]}
                          {selectedOptions[index] === question.correctAnswer ? (
                            <>
                              <Icon as={CheckIcon} color="green.500" />
                            </>
                          ) : (
                            <>
                              <Icon as={CloseIcon} color="red.500" />
                            </>
                          )}
                        </Text>
                          <Badge colorScheme="purple">

                          Correct answer:
                          
                          </Badge>
                          <Text>

                           {question.correctAnswer}
                           </Text>
                    </Box>
                  ))}
                </VStack>
                <Flex direction="column" align="center">
                  {quizSubmitted && (
                    <Text mt={8} fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}>
                      Total Score: {score}
                    </Text>
                  )}
                </Flex>
              </Box>
          
          )}
        </Box>
      </Center>
    </>
  );
};

export default QuizApp;
