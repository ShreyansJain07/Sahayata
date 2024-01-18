import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Divider,
  ButtonGroup,
} from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa";

const VirtualAssistant = () => {
  const [Applicants, setApplicants] = useState([
    { name: "Rishab", skills: "Front-End Dev" },
    { name: "Shreyans", skills: "Front-End Dev" },
    { name: "Varun", skills: "Front-End Dev" },
    { name: "Ritnonjan", skills: "Front-End Dev" },
  ]);
  const [Interviewers, setInterviewers] = useState([
    { name: "Shreyans", skills: "Front-End Dev" },
    { name: "Varun", skills: "Front-End Dev" },
    { name: "Ritnonjan", skills: "Front-End Dev" },
  ]);
  const [Offered, setOffered] = useState([
    { name: "Ritnonjan", skills: "Front-End Dev" },
    { name: "Varun", skills: "Front-End Dev" },
    { name: "Rishab", skills: "Front-End Dev" },
  ]);
  return (
    <div style={{ backgroundColor: "#f3f4f6", paddingBottom: "2rem" }}>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "1rem",
        }}
      >
        <div style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
          Virtual Assistant
        </div>
        <div>
          <Button
            variant="outline"
            boxShadow="xl"
            transition="transform 0.2s" // Add a smooth transition effect
            _hover={{ transform: "scale(1.05)" }}
            style={{
              fontSize: "0.7rem",
              padding: "0.5rem",
              paddingTop: "0",
              paddingBottom: "0",
            }}
            color="#2234da"
          >
            Meeting in 15 mins
          </Button>
          <Button
            variant="solid"
            boxShadow="xl"
            transition="transform 0.2s" // Add a smooth transition effect
            _hover={{ transform: "scale(1.05)" }}
            style={{
              fontSize: "0.7rem",
              padding: "0.5rem",
              paddingTop: "0",
              paddingBottom: "0",
              marginLeft: "0.5rem",
            }}
            backgroundColor="#ff5045"
            color="white"
          >
            Update Interview Availability
          </Button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "0.5rem",
          padding: "1rem",
        }}
      >
        <div
          style={{
            width: "fit-content",
            fontWeight: "bold",
            flex: "1",
            textAlign: "left",
          }}
        >
          Total Candidates: 20
        </div>
        <InputGroup style={{ flex: "1" }} boxShadow="xl">
          <InputLeftElement pointerEvents="none">
            <CiSearch />
          </InputLeftElement>
          <Input
            type="tel"
            style={{ backgroundColor: "white", fontSize: "0.7rem" }}
            placeholder="Search by name or keyword"
          />
        </InputGroup>
      </div>
      <hr />
      <div style={{ display: "flex", marginTop: "1rem" }}>
        <div>
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
            style={{
              marginLeft: "1rem",
              marginRight: "1rem",
              borderTop: "4px solid #2234da",
            }}
          >
            <CardBody
              style={{
                textAlign: "left",
                marginTop: "-0.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div>Applicants</div>
                <div
                  style={{
                    marginLeft: "auto",
                    width: "fit-content",
                    backgroundColor: "lightskyblue",
                    paddingLeft: "0.2rem",
                    paddingRight: "0.2rem",
                    borderRadius: "0.2rem",
                  }}
                >
                  10
                </div>
              </div>
            </CardBody>
          </Card>
          {Applicants?.map((candidate) => {
            return (
              <div style={{ padding: "1rem", paddingBottom: "0" }}>
                <Card
                  direction={{ base: "column", sm: "row" }}
                  overflow="hidden"
                  boxShadow="xl"
                  transition="transform 0.2s" // Add a smooth transition effect
                  _hover={{ transform: "scale(1.05)" }}
                  variant="outline"
                >
                  <Stack>
                    <CardBody style={{ textAlign: "left" }}>
                      <Heading size="md">{candidate?.name}</Heading>
                      <Text py="2">
                        A forward-thinking front-end developer, I specialize in
                        architecting innovative and intuitive user interfaces.
                        My skill set encompasses cutting-edge technologies,
                        allowing me to transform design visions into captivating
                        and user-centric web experiences.
                      </Text>
                      <Text pb="2">Speaks: English, Hindi</Text>
                      <Text pb="2">Skills: {candidate?.skills}</Text>
                      <hr />
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          paddingTop: "0.5rem",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "left",
                            gap: "0.5rem",
                          }}
                        >
                          <div>Rs 800/hr</div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              gap: "0.25rem",
                            }}
                          >
                            <FaRegStar />
                            4.5
                          </div>
                        </div>
                        <div style={{ color: "gray" }}>4 days ago</div>
                      </div>
                    </CardBody>
                  </Stack>
                </Card>
              </div>
            );
          })}
        </div>
        <div>
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
            style={{
              marginLeft: "1rem",
              marginRight: "1rem",
              borderTop: "4px solid #ff5045",
            }}
          >
            <CardBody
              style={{
                textAlign: "left",
                marginTop: "-0.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div>Interviewers</div>
                <div
                  style={{
                    marginLeft: "auto",
                    width: "fit-content",
                    backgroundColor: "orange",
                    paddingLeft: "0.2rem",
                    paddingRight: "0.2rem",
                    borderRadius: "0.2rem",
                  }}
                >
                  10
                </div>
              </div>
            </CardBody>
          </Card>
          {Interviewers?.map((candidate) => {
            return (
              <div style={{ padding: "1rem", paddingBottom: "0" }}>
                <Card
                  direction={{ base: "column", sm: "row" }}
                  overflow="hidden"
                  boxShadow="xl"
                  transition="transform 0.2s" // Add a smooth transition effect
                  _hover={{ transform: "scale(1.05)" }}
                  variant="outline"
                >
                  <Stack>
                    <CardBody style={{ textAlign: "left" }}>
                      <Heading size="md">{candidate?.name}</Heading>
                      <Text py="2">
                        With a passion for interactivity, I excel in crafting
                        web interfaces that go beyond static presentations.
                        Proficient in JavaScript and popular frameworks, I bring
                        websites to life with dynamic elements, enhancing user
                        engagement and overall satisfaction.
                      </Text>
                      <Text pb="2">Speaks: English, Hindi</Text>
                      <Text pb="2">Skills: {candidate?.skills}</Text>
                      <hr />
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          paddingTop: "0.5rem",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "left",
                            gap: "0.5rem",
                          }}
                        >
                          <div>Rs 800/hr</div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              gap: "0.25rem",
                            }}
                          >
                            <FaRegStar />
                            4.5
                          </div>
                        </div>
                        <div style={{ color: "gray" }}>4 days ago</div>
                      </div>
                    </CardBody>
                  </Stack>
                </Card>
              </div>
            );
          })}
        </div>
        <div>
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
            style={{
              marginLeft: "1rem",
              marginRight: "1rem",
              borderTop: "4px solid yellow",
            }}
          >
            <CardBody
              style={{
                textAlign: "left",
                marginTop: "-0.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div>Offered</div>
                <div
                  style={{
                    marginLeft: "auto",
                    width: "fit-content",
                    backgroundColor: "lightyellow",
                    paddingLeft: "0.2rem",
                    paddingRight: "0.2rem",
                    borderRadius: "0.2rem",
                  }}
                >
                  10
                </div>
              </div>
            </CardBody>
          </Card>
          {Offered?.map((candidate) => {
            return (
              <div style={{ padding: "1rem", paddingBottom: "0" }}>
                <Card
                  direction={{ base: "column", sm: "row" }}
                  overflow="hidden"
                  variant="outline"
                  boxShadow="xl"
                  transition="transform 0.2s" // Add a smooth transition effect
                  _hover={{ transform: "scale(1.05)" }}
                >
                  <Stack>
                    <CardBody style={{ textAlign: "left" }}>
                      <Heading size="md">{candidate?.name}</Heading>
                      <Text py="2">
                        As a dedicated front-end developer, I bring a wealth of
                        expertise in crafting seamless and visually captivating
                        user experiences. Proficient in the core technologies of
                        front-end development, I excel in translating design
                        concepts into responsive and interactive web interfaces.
                      </Text>
                      <Text pb="2">Speaks: English, Hindi</Text>
                      <Text pb="2">Skills: {candidate?.skills}</Text>
                      <hr />
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          paddingTop: "0.5rem",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "left",
                            gap: "0.5rem",
                          }}
                        >
                          <div>Rs 800/hr</div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              gap: "0.25rem",
                            }}
                          >
                            <FaRegStar />
                            4.5
                          </div>
                        </div>
                        <div style={{ color: "gray" }}>4 days ago</div>
                      </div>
                    </CardBody>
                  </Stack>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default VirtualAssistant;
