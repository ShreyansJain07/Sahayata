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
  VStack,
  SimpleGrid,
} from "@chakra-ui/react";

import { FaMicrophone, FaMicrophoneAltSlash } from "react-icons/fa";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import useClipboard from "react-use-clipboard";
import { FaMicrophoneAlt, FaMicrophoneSlash } from "react-icons/fa"; // You can use any icon from react-icons library

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
  const handlePress = () => {
    onOpen();
  };

  const [textToCopy, setTextToCopy] = useState();
  const [isCopied, setCopied] = useClipboard(textToCopy, {
    successDuration: 1000,
  });

  //subscribe to thapa technical for more awesome videos

  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });

    setIsListening(true);
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
    setIsListening(false);
  };
  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <Box position="fixed" bottom="4" right="4" zIndex={1000} color={"teal.800"}>
      <IconButton
        icon={<FaMicrophone />}
        aria-label="Voice Button"
        onClick={handlePress}
        size="lg"
        colorScheme="teal"
        aria-labelledby="voice-assistant"
      />

      <Modal isOpen={isOpen} onClose={onClose} size={"full"}>
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
