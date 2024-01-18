import React from "react";
import VoiceButton from "../components/VoiceButton";
import LandingPage from "../screens/LandingPage";
import TextToSpeechComponent from "../components/TexttoSpeech";
import { Box, Stack } from "@chakra-ui/react";
import JobBoard from "../components/JobBoard";
import AccessibilityMenu from "../components/AccessibilityMenu";

export default function RootLayout() {
  return (
    <>
      <LandingPage />
      <Box>
        <JobBoard />
      </Box>
    </>
  );
}
