import React from "react";
import VoiceButton from "../components/VoiceButton";
import LandingPage from "../screens/LandingPage";
import TextToSpeechComponent from "../components/TexttoSpeech";
import { Box } from "@chakra-ui/react";
import JobBoard from "../components/JobBoard";

export default function RootLayout() {
  return (
    <>
      <LandingPage />
      <VoiceButton />
      <Box>
        <VoiceButton />
        <JobBoard />
      </Box>
    </>
  );
}
