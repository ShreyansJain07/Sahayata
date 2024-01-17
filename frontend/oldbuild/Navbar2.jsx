import { Box, Flex, HStack,
        IconButton, Avatar, Stack,AvatarBadge,
        Text, Spacer, Button, useToast, 
        Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, VStack 
      } from "@chakra-ui/react";
import { Search2Icon, EmailIcon, BellIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { useState } from "react"; 

export default function Navbar() {
  const toast = useToast();
  const [isNotificationDrawerOpen, setIsNotificationDrawerOpen] = useState(false); 

  const handleLogout = () => {
    
    toast({
      title: "Logged out successfully",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleNotificationDrawerOpen = () => {
    setIsNotificationDrawerOpen(true); 
  };

  const handleNotificationDrawerClose = () => {
    setIsNotificationDrawerOpen(false); 
  };

  return (
    <Box
      width="100%"
      position="sticky"
      top={0}
      zIndex={1}
      backgroundColor="transparent"
      borderBottom="1px solid"
      borderColor="gray.200"
    >
      <Flex as="nav" p="10px" alignItems="center">
        <HStack spacing="20px" alignItems="center">
          <Box
            bg="gray.200"
            p="8px"
            borderRadius="md"
            display="flex"
            alignItems="center"
            height={10}
          >
            <IconButton icon={<Search2Icon />} bg="gray.200" />
            <Text as="h1" fontSize="1em">
              Search option
            </Text>
          </Box>
          <Spacer flexGrow={{ base: 1, md: 0 }} />
          <HStack spacing="20px">
            <IconButton icon={<EmailIcon />} bg="transparent" color="blue.600" fontSize="1.5rem" />
            <IconButton
              icon={<BellIcon />}
              bg="transparent"
              color="blue.600"
              fontSize="1.5rem"
              onClick={handleNotificationDrawerOpen} 
            />
            <Menu>
              <MenuButton
                as={Avatar}
                src="https://bit.ly/broken-link"
                cursor="pointer"
                bg="blue.500"
                boxSize="30px"
              />
              <MenuList>
                <MenuItem>Edit Profile</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </MenuList>
            </Menu>
          </HStack>
        </HStack>
      </Flex>
      
     
      <Drawer placement="right" onClose={handleNotificationDrawerClose} isOpen={isNotificationDrawerOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Notifications</DrawerHeader>
          <DrawerBody>
         
           <VStack padding={5} align={"left"}>
            <HStack direction='row' spacing={4}>
              <Avatar>
              <AvatarBadge boxSize='1.25em' bg='green.500' />
               </Avatar>
                <Text>Notification 1</Text>
                </HStack>
                <HStack direction='row' spacing={4}>
              <Avatar>
              <AvatarBadge boxSize='1.25em' bg='green.500' />
               </Avatar>
                <Text>Notification 2</Text>
                </HStack>
                <HStack direction='row' spacing={4}>
              <Avatar>
              <AvatarBadge borderColor='papayawhip' bg='tomato' boxSize='1.25em' />
               </Avatar>
                <Text>Notification 3</Text>
                </HStack>
             </VStack>
           
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
