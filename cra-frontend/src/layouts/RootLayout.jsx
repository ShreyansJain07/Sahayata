import React from 'react'
import VoiceButton from '../components/VoiceButton'
import TextToSpeechComponent from '../components/TexttoSpeech'
import { Box } from '@chakra-ui/react'
import JobBoard from '../components/JobBoard'
import Navbar from '../components/Navbar'
export default function RootLayout() {
  return (
<Box
//  filter={"hue-rotate(10deg) brightness(0.5)"}
>
   <Navbar/>
<VoiceButton/>
{/* <TextToSpeechComponent/> */}
<JobBoard/>
</Box>
    )
}
