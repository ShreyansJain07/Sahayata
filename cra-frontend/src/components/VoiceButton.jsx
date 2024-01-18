import React, { useState, useEffect } from "react";
import {
  Box,
  IconButton,
  Button,
  Text,
  ModalFooter,
  Icon,
  SimpleGrid,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
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
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
    setIsListening(true);
    console.log(transcript)
      if (transcript.includes("hello")) {
        stopListening();
    
        const initialSpeech = "Voice Assistant, how may I help you today?";
        const initialUtterance = new SpeechSynthesisUtterance(initialSpeech);
    
        initialUtterance.onend = () => {
          // Speech synthesis has ended, set isListening to true
          // startListening();
          // setIsListening(true);
        };
    
        window.speechSynthesis.speak(initialUtterance);
      }    
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
    setIsListening(false);
  };


  

  // useEffect to trigger speech synthesis when the component mounts

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <Box color={"teal.800"} aria-label="Voice Assistant">
      <IconButton
        icon={<FaMicrophone />}
        aria-label="Voice Button"
        onClick={()=>{
            const initialSpeech = "Voice Assistant How may I help you today?";
            const initialUtterance = new SpeechSynthesisUtterance(initialSpeech);
            window.speechSynthesis.speak(initialUtterance);
          
          onOpen()}}
        size="lg"
        colorScheme="teal"
        aria-labelledby="voice-assistant"
      />

      <Drawer isOpen={isOpen} placement="bottom" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>Voice Assistant</DrawerHeader>
          <DrawerBody>
            {/* Your content here */}
            <LanguageButtons />
            <Text>{transcript}</Text>
          </DrawerBody>
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
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default VoiceButton;
