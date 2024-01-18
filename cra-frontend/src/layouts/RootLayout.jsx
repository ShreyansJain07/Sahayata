import React from "react";
import VoiceButton from "../components/VoiceButton";
import LandingPage from "../screens/LandingPage";
import Carousel  from "../components/Carousel";
import FeatureList from "../components/FeatureList";
export default function RootLayout() {
  return (
    <>
      <LandingPage />
      <Carousel/>
      <FeatureList/>
    </>
  );
}
