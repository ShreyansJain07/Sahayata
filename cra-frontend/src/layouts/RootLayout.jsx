import React from 'react'
import VoiceButton from '../components/VoiceButton'
import TextToSpeechComponent from '../components/TexttoSpeech'
import { Box } from '@chakra-ui/react'
import JobBoard from '../components/JobBoard'

export default function RootLayout() {
  return (
<Box
//  filter={"hue-rotate(10deg) brightness(0.5)"}
 >
<VoiceButton/>
{/* <TextToSpeechComponent/> */}
<JobBoard/>
</Box>
    )
}
