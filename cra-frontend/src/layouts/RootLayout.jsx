import React from "react";
import VoiceButton from "../components/VoiceButton";
import TextToSpeechComponent from "../components/TexttoSpeech";
import { Box } from "@chakra-ui/react";
import JobBoard from "../components/JobBoard";

export default function RootLayout() {
  return (
    <Box>
      <VoiceButton />
      <JobBoard />
    </Box>
  );
}
