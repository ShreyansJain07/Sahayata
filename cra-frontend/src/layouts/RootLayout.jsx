import React from "react";
import VoiceButton from "../components/VoiceButton";
import LandingPage from "../screens/LandingPage";
import Carousel  from "../components/Carousel";
import FeatureList from "../components/FeatureList";
import SpeechSynthesizer from "../components/SpeechSynthesizer";
import CustomCursor from "../components/CustomCursor";

import { useContext } from "react";
import { MouseContext } from "../context/mouse-context";


export default function RootLayout() {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  return (
    <>
      <LandingPage />
      <Carousel/>
      <FeatureList/>
      <SpeechSynthesizer/>
      <div className="App">
      <CustomCursor />
      <div className="container">
        <div
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
          <h1>Hover over me</h1>
        </div>
      </div>
      <div className="container" style={{ background: "peachpuff" }}></div>
    </div>

    </>
  );
}
