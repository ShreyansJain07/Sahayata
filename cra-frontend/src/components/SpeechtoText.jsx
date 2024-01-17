import React, { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  Button,
  useClipboard,
//   useColorModeValue,
} from '@chakra-ui/react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const SpeechToText = () => {
  const [textToCopy, setTextToCopy] = useState();
  const [isCopied, setCopied] = useClipboard(textToCopy, {
    successDuration: 1000,
  });

  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <Box className="container">
      <Heading as="h2" size="xl">
        Speech to Text Converter
      </Heading>
      <Text mt="4">
        A Chakra UI component that converts speech from the microphone to text and makes it available to your React
        components.
      </Text>

      <Box
        className="main-content"
        onClick={() => setTextToCopy(transcript)}
        mt="4"
        p="4"
        borderWidth="1px"
        borderRadius="md"
        // borderColor={useColorModeValue('gray.200', 'gray.700')}
      >
        {transcript}
      </Box>

      <Box className="btn-style" mt="4">
        <Button onClick={setCopied} colorScheme="teal" variant="outline">
          {isCopied ? 'Copied!' : 'Copy to clipboard'}
        </Button>
        <Button onClick={startListening} colorScheme="blue">
          Start Listening
        </Button>
        <Button onClick={SpeechRecognition.stopListening} colorScheme="red">
          Stop Listening
        </Button>
      </Box>
    </Box>
  );
};

export default SpeechToText;
