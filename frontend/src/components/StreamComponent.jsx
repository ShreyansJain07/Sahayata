import React, { useState, useRef, useEffect } from 'react';
import {
  ChakraProvider,
  Container,
  Box,
  Heading,
  Text,
  Input,
  Button,
  Alert,
  AlertIcon,
  VStack
} from '@chakra-ui/react';
import Peer from 'peerjs';

const StreamComponent = () => {
  const [roomInput, setRoomInput] = useState('');
  const [notification, setNotification] = useState({ msg: '', type: 'info', show: false });
  const [localStream, setLocalStream] = useState(null);
  const [remoteStream, setRemoteStream] = useState(null);
  const [roomNumber, setRoomNumber] = useState('');
  const [screenSharing, setScreenSharing] = useState(false);
  const peerRef = useRef(null);
  const currentPeerRef = useRef(null);
  const screenStreamRef = useRef(null);

  const createRoom = () => {
    const room = roomInput.trim();
    if (!room) {
      setNotification({ msg: 'Please enter room number', type: 'warning', show: true });
      return;
    }

    const roomId = `Stream${room}Works`;
    peerRef.current = new Peer(roomId);

    peerRef.current.on('open', (id) => {
      hideModal();
      navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then((stream) => {
          setLocalStream(stream);
          setLocalStreamToVideo(stream);
        })
        .catch((err) => {
          console.error(err);
        });

      setNotification({ msg: 'Waiting for peer to join.', type: 'warning', show: true });
      setRoomNumber(`Room Number ${room}`);
    });

    peerRef.current.on('call', (call) => {
      call.answer(localStream);
      call.on('stream', (stream) => {
        setRemoteStream(stream);
      });
      currentPeerRef.current = call;
    });
  };

  const setLocalStreamToVideo = (stream) => {
    const video = document.getElementById('local-video');
    if (video) {
      video.srcObject = stream;
      video.muted = true;
      video.play();
    }
  };

  const hideModal = () => {
    // Your hide modal logic here
  };

  const joinRoom = () => {
    const room = roomInput.trim();
    if (!room) {
      setNotification({ msg: 'Please enter room number', type: 'warning', show: true });
      return;
    }

    const roomId = `Stream${room}Works`;
    hideModal();
    peerRef.current = new Peer();

    peerRef.current.on('open', () => {
      navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then((stream) => {
          setLocalStream(stream);
          setLocalStreamToVideo(stream);
          setNotification({ msg: 'Joining peer', type: 'success', show: true });
          const call = peerRef.current.call(roomId, stream);
          call.on('stream', (remoteStream) => {
            setRemoteStream(remoteStream);
          });
          currentPeerRef.current = call;
        })
        .catch((err) => {
          console.error(err);
        });
      setRoomNumber(`Room Number ${room}`);
    });
  };

  const startScreenShare = () => {
    if (screenSharing) {
      stopScreenSharing();
    }
    navigator.mediaDevices.getDisplayMedia({ video: true })
      .then((stream) => {
        screenStreamRef.current = stream;
        const videoTrack = screenStreamRef.current.getVideoTracks()[0];
        videoTrack.onended = () => {
          stopScreenSharing();
        };
        if (peerRef.current) {
          const sender = currentPeerRef.current.peerConnection.getSenders().find((s) => (
            s.track.kind === videoTrack.kind
          ));
          sender.replaceTrack(videoTrack);
          setScreenSharing(true);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const stopScreenSharing = () => {
    if (!screenSharing) return;

    const videoTrack = localStream.getVideoTracks()[0];
    if (peerRef.current) {
      const sender = currentPeerRef.current.peerConnection.getSenders().find((s) => (
        s.track.kind === videoTrack.kind
      ));
      sender.replaceTrack(videoTrack);
    }

    screenStreamRef.current.getTracks().forEach((track) => {
      track.stop();
    });

    setScreenSharing(false);
  };

  return (
    <ChakraProvider>
      <Container maxW="xl">
        <VStack spacing={3}>
          {/* Notification */}
          {notification.show && (
            <Alert status={notification.type} variant="subtle" flexDirection="column" textAlign="left" position="fixed" top="100px" right="100px">
              <AlertIcon />
              {notification.msg}
            </Alert>
          )}

          {/* Entry Modal */}
          <Box p={5} bgImg="url(./network.jpg)" bgSize="cover" borderRadius="lg" display="flex" flexDirection="column" alignItems="center" id="entry-modal">
            <Heading as="h1" fontSize="4xl" fontWeight="bold" mt={3} mb={3}>
              Create or Join Meeting
            </Heading>
            <Text fontSize="xl" textAlign="left" mb={3}>
              <ul>
                <li>No authentication required</li>
                <li>Peer to peer in Real Time</li>
                <li>Screen Sharing is available</li>
              </ul>
            </Text>
            {/* Your form and buttons here */}
          </Box>

          {/* Meet Area */}
          <Box p={5} bg="gray.100" borderRadius="lg" id="meet-area">
            <Heading as="h1" fontSize="4xl" fontWeight="bold" mb={3} id="room-number-text">
              {roomNumber}
            </Heading>
            <VStack spacing={3} align="center">
              <Box>
                <Text>Remote Video</Text>
                <video w="100%" id="remote-video" srcObject={remoteStream} autoPlay />
              </Box>
              <Box>
                <Text>Local Video</Text>
                <video w="100%" id="local-video" srcObject={localStream} autoPlay muted />
              </Box>
            </VStack>
            {/* Your buttons here */}
          </Box>
        </VStack>
      </Container>
      {/* Your script imports here */}
    </ChakraProvider>
  );
};

export default StreamComponent;
