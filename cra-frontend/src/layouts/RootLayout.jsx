import React from "react";
import VoiceButton from "../components/VoiceButton";
import SpeechSynthesizer from "../components/SpeechSynthesizer";
import LandingTop from "../components/LandingTop";
export default function RootLayout() {
  return (
    <>
      <LandingTop />
      {/* <Carousel/>
      <FeatureList/> */}
      <SpeechSynthesizer/>
    </>
  );
}
