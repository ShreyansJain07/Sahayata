import React, { useState, useEffect } from "react";
import {
  Box,
  IconButton,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Button,
  Text,
  ModalFooter,
  Icon,
  SimpleGrid,
} from "@chakra-ui/react";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import useClipboard from "react-use-clipboard";
import {
  FaMicrophoneAlt,
  FaMicrophoneSlash,
  FaMicrophone,
} from "react-icons/fa";

const LanguageButtons = () => {
  const languages = [
    { name: "Hindi", code: "hi" },
    { name: "Tamil", code: "ta" },
    { name: "Telugu", code: "te" },
    { name: "Bengali", code: "bn" },
    // Add more languages as needed
  ];

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} spacing={4} width="full">
      {languages.map((language) => (
        <Button
          key={language.code}
          width="full"
          colorScheme="teal"
          size={"lg"}
          onFocus={() =>
            SpeechRecognition.startListening({ language: language.code })
          }
        >
          <Text fontSize="lg">{language.name}</Text>
        </Button>
      ))}
    </SimpleGrid>
  );
};

const VoiceButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isListening, setIsListening] = useState(false);

  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
    setIsListening(true);
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
    setIsListening(false);
  };

  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();
  const [utranscript, setUTranscript] = useState("");

  useEffect(() => {
    setUTranscript(transcript);
  }, [transcript]);

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <Box color={"teal.800"}>
      <IconButton
        icon={<FaMicrophone />}
        aria-label="Voice Button"
        onClick={onOpen}
        size="lg"
        colorScheme="teal"
        aria-labelledby="voice-assistant"
      />

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Voice Assistant</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <LanguageButtons />
            <Text>{transcript}</Text>
          </ModalBody>
          <ModalFooter>
            {isListening ? (
              <Button
                colorScheme="red"
                aria-label="Stop Listening"
                leftIcon={<Icon as={FaMicrophoneSlash} />}
                width={"full"}
                onClick={stopListening}
              >
                Stop Listening
              </Button>
            ) : (
              <Button
                style={{ backgroundColor: "#2234da", color: "white" }}
                aria-label="Start Listening"
                leftIcon={<Icon as={FaMicrophoneAlt} />}
                width={"full"}
                onClick={startListening}
              >
                Start Listening
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default VoiceButton;
