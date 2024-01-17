import React, { useState, useEffect } from "react";
import { Box, IconButton, useDisclosure,Modal,ModalOverlay,ModalContent,ModalHeader,ModalCloseButton,ModalBody, Button,ModalFooter } from "@chakra-ui/react";
import { FaMicrophone } from "react-icons/fa";


const SpeechToText = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcription, setTranscription] = useState("");
  const recognition = window.webkitSpeechRecognition
  ? new window.webkitSpeechRecognition() : null;

  useEffect(() => {
    if (recognition) {
      // Your existing code for setting up recognition
    } else {
      console.error("SpeechRecognition API is not supported in this browser");
    }
  }, []);
  
  useEffect(() => {
    recognition.lang = "en-US";
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setTranscription(transcript);
    };

    recognition.onend = () => {
      if (isListening) {
        recognition.start();
      }
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      setIsListening(false);
    };

    return () => {
      recognition.stop();
    };
  }, [isListening]);

  const toggleListening = () => {
    if (isListening) {
      recognition.stop();
    } else {
      recognition.start();
    }
    setIsListening(!isListening);
  };

  return (
    <div>
      <h1>Speech-to-Text</h1>
      <button onClick={toggleListening}>
        {isListening ? "Stop Listening" : "Start Listening"}
      </button>
      <p>{transcription}</p>
    </div>
  );
};


const VoiceButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handlePress = () => {
    onOpen();
  };

  const handleLongPress = () => {
    // Handle long press action (if needed)
    console.log("Long Press");
  };

  return (
    <Box position="fixed" bottom="4" right="4">
        <IconButton
          icon={<FaMicrophone />}
          aria-label="Voice Button"
          onClick={handlePress}
          size="lg"
          colorScheme="teal"
        />

      {/* Your Modal Component */}
      {/* Replace this with your actual modal content */}
      {/* isOpen controls the visibility of the modal */}
      {/* onClose is used to close the modal */}
      <Modal isOpen={isOpen} onClose={onClose} size={"full"}>
        {/* Modal Content */}
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Voice Modal</ModalHeader>
          <ModalCloseButton />
          <ModalBody minH={"75vh"}>
<SpeechToText/>

          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" width={"100%"} onClick={onClose}/>
            </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default VoiceButton;
