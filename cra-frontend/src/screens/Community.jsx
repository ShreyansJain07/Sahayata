import React, { useState } from "react";
import {
  Select,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormLabel,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import { TbMessages } from "react-icons/tb";
import { IoPersonOutline } from "react-icons/io5";
import { LuClock4 } from "react-icons/lu";
import { IoCameraOutline } from "react-icons/io5";

const Community = () => {
  const [Groups, setGroups] = useState([
    {
      name: "Locomotory Disability",
      description: "Walking problem lorem5",
      posts: 100,
      messages: 699,
      forums: ["#Wealth Building", "#Estate Building"],
    },
    {
      name: "Locomotory Disability",
      description: "Walking problem lorem5",
      posts: 100,
      messages: 699,
      forums: ["#Wealth Building", "#Estate Building"],
    },
    {
      name: "Locomotory Disability",
      description: "Walking problem lorem5",
      posts: 100,
      messages: 699,
      forums: ["#Wealth Building", "#Estate Building"],
    },
  ]);

  const [meetings, setMeetings] = useState([
    {
      meetingName: "Sad",
      userName: "Shreyansi",
      hashtag: "Dsds",
      camera: "Online",
      time: "11-23-93w 72wy72 am",
    },
    {
      meetingName: "Sad22",
      userName: "Shreyansi",
      hashtag: "Dsds",
      camera: "Online",
      time: "11-23-93w 72wy72 am",
    },
    {
      meetingName: "Sad22",
      userName: "Shreyansi",
      hashtag: "Dsds",
      camera: "Online",
      time: "11-23-93w 72wy72 am",
    },
    {
      meetingName: "Sad22",
      userName: "Shreyansi",
      hashtag: "Dsds",
      camera: "Online",
      time: "11-23-93w 72wy72 am",
    },
  ]);

  // Modal
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [newMeeting, setNewMeeting] = useState({
    meetingName: "",
    userName: "",
    hashtag: "",
    camera: "",
    time: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMeeting((prevMeeting) => ({
      ...prevMeeting,
      [name]: value,
    }));
  };

  const handleAddMeeting = () => {
    // Validate the input or perform any other checks if needed
    if (newMeeting.meetingName.trim() === "") {
      alert("Please enter a meeting name");
      return;
    }

    // Add the new meeting to the meetings array
    setMeetings((prevMeetings) => [...prevMeetings, newMeeting]);

    // Reset the newMeeting state for the next input
    setNewMeeting({
      meetingName: "",
      userName: "",
      hashtag: "",
      camera: "",
      time: "",
    });
    onClose();
  };

  return (
    <div style={{ padding: "2rem", backgroundColor: "#f3f4f6" }}>
      <div>Caraousel</div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          justifyContent: "space-between",
        }}
      >
        <div style={{ flex: 1 }}>
          <div style={{ minHeight: "100vh" }}>
            <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
              <div style={{ fontSize: "1.5rem", fontWeight: 625 }}>
                Categories
              </div>
              <Select
                placeholder="Sort By"
                variant="flushed"
                // style={{ width: "fit-content" }}
              >
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </div>
            <div>
              {Groups.map((group) => {
                return (
                  <Card
                    direction={{ base: "column", sm: "row" }}
                    overflow="hidden"
                    variant="outline"
                    boxShadow="xl"
                    transition="transform 0.3s" // Add a smooth transition effect
                    _hover={{ transform: "scale(1.02)" }}
                    style={{
                      marginTop: "1rem",
                      marginBottom: "1rem",
                      cursor: "pointer",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        minWidth: "10%",
                        backgroundColor: "red",
                      }}
                    >
                      <TbMessages
                        style={{ color: "white", fontSize: "2rem" }}
                      />
                    </div>
                    <CardBody
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <div style={{ fontWeight: 650 }}>{group.name}</div>
                        <div>{group.description}</div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "0.5rem",
                            marginTop: "0.5rem",
                          }}
                        >
                          {group.forums?.map((forum) => {
                            return (
                              <div
                                style={{
                                  padding: "0.5rem",
                                  backgroundColor:
                                    forum === "#Wealth Building"
                                      ? "yellow"
                                      : forum === "#Estate Building"
                                      ? "green"
                                      : "orange",
                                  borderRadius: "10rem",
                                  fontWeight: "600",
                                  fontSize: "0.75rem",
                                  textAlign: "center",
                                }}
                              >
                                {forum}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          gap: "1rem",
                        }}
                      >
                        <div>
                          <div style={{ fontWeight: 650 }}>{group.posts}</div>
                          <div style={{ fontWeight: 500 }}>POSTS</div>
                        </div>
                        <div>
                          <div style={{ fontWeight: 650 }}>
                            {group.messages}
                          </div>
                          <div style={{ fontWeight: 500 }}>MESSAGES</div>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
        <div style={{ flex: 0.5 }}>
          <div
            style={{
              fontSize: "1.5rem",
              fontWeight: 625,
              marginBottom: "1.25rem",
            }}
          >
            Meet
          </div>
          <Button
            style={{
              backgroundColor: "white",
              color: "gray",
              margin: "auto",
              width: "100%",
              padding: "2rem",
            }}
            boxShadow="2xl"
            transition="transform 0.3s" // Add a smooth transition effect
            _hover={{ transform: "scale(1.02)" }}
            onClick={onOpen}
          >
            + Tap to add a meet
          </Button>
          <div>
            {meetings.map((meeting) => {
              return (
                <Card
                  overflow="hidden"
                  variant="outline"
                  boxShadow="xl"
                  transition="transform 0.3s" // Add a smooth transition effect
                  _hover={{ transform: "scale(1.02)" }}
                  style={{
                    marginTop: "1rem",
                    // marginBottom: "1rem",
                    cursor: "pointer",
                    // gridColumn: 1 / 2,
                  }}
                >
                  <div
                    style={{
                      padding: "0.5rem",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "1.15rem",
                        fontWeight: 625,
                        marginBottom: "1rem",
                      }}
                    >
                      {meeting.meetingName}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "0.5rem",
                        fontWeight: "520",
                      }}
                    >
                      <IoPersonOutline />
                      <div>{meeting.userName}</div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "0.9rem",
                        fontWeight: "520",
                      }}
                    >
                      <div>#</div>
                      <div>{meeting.hashtag}</div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "0.5rem",
                        fontWeight: "520",
                      }}
                    >
                      <IoCameraOutline />
                      <div>{meeting.camera}</div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "0.5rem",
                        fontWeight: "520",
                      }}
                    >
                      <LuClock4 />
                      <div>{meeting.time}</div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
      {/* // Modal  */}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormLabel style={{ paddingTop: "0.4rem" }}>Meeting Name</FormLabel>
            <Input
              type="tel"
              name="meetingName"
              value={newMeeting.meetingName}
              onChange={handleInputChange}
              placeholder="Meeting Name"
            />
            <FormLabel style={{ paddingTop: "0.4rem" }}>User Name</FormLabel>
            <Input
              type="tel"
              name="userName"
              value={newMeeting.userName}
              onChange={handleInputChange}
              placeholder="User Name"
            />
            <FormLabel style={{ paddingTop: "0.4rem" }}>Hashtag</FormLabel>
            <Input
              type="tel"
              name="hashtag"
              value={newMeeting.hashtag}
              onChange={handleInputChange}
              placeholder="Hashtag"
            />
            <FormLabel style={{ paddingTop: "0.4rem" }}>Camera</FormLabel>
            <Input
              type="tel"
              name="camera"
              value={newMeeting.camera}
              onChange={handleInputChange}
              placeholder="Camera"
            />
            <FormLabel>Time</FormLabel>
            <Input
              type="tel"
              name="time"
              value={newMeeting.time}
              onChange={handleInputChange}
              placeholder="Time"
            />
          </ModalBody>
          <ModalFooter>
            <Button
              style={{
                backgroundColor: "#ff5045",
                color: "white",
                margin: "auto",
              }}
              onClick={handleAddMeeting}
            >
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Community;
