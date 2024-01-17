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
import { FaFileContract } from "react-icons/fa";

const Dashboard = () => {
  const [Jobs, setJobs] = useState([
    {
      category: "Virtual assistant",
      companyName: "Apple",
      skills: "Front end",
      experience: "3",
    },
    {
      category: "Virtual assistant",
      companyName: "Google",
      skills: "Front end",
      experience: "3",
    },
    {
      category: "Virtual assistant",
      companyName: "Apple",
      skills: "Front end",
      experience: "3",
    },
  ]);
  return (
    <div
      style={{
        backgroundColor: "#f3f4f6",
        padding: "2rem",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div style={{ textAlign: "left", flex: 1 }}>
        <div
          style={{
            // marginTop: "1rem",
            marginBottom: "0.7rem",
            fontSize: "1.5rem",
            fontWeight: 725,
          }}
        >
          Good morning, Shreyans
        </div>
        <div>Here are your statistics</div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: "1rem",
            gap: "1rem",
          }}
        >
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
            boxShadow="xl"
            transition="transform 0.2s" // Add a smooth transition effect
            _hover={{ transform: "scale(1.05)" }} // Scale the card on hover
            style={{
              width: "100%",
              //   boxShadow: "inherit 100px",
            }}
          >
            <CardBody
              style={{
                textAlign: "left",
                marginTop: "-0.5rem",
                marginBottom: "-0.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <FaFileContract
                  style={{ margin: "auto" }}
                  size="2rem"
                  color="#2234da"
                />
                <div
                  style={{
                    paddingLeft: "0.2rem",
                    paddingRight: "0.2rem",
                    borderRadius: "0.2rem",
                    fontWeight: 650,
                  }}
                >
                  <div style={{ color: "#2234da" }}>Active Contracts</div>
                  <div>2</div>
                </div>
              </div>
            </CardBody>
          </Card>
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
            boxShadow="xl"
            transition="transform 0.2s" // Add a smooth transition effect
            _hover={{ transform: "scale(1.05)" }}
            style={{
              width: "100%",
              //   boxShadow: "inherit 100px",
            }}
          >
            <CardBody
              style={{
                textAlign: "left",
                marginTop: "-0.5rem",
                marginBottom: "-0.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <FaFileContract
                  style={{ margin: "auto" }}
                  size="2rem"
                  color="#2234da"
                />
                <div
                  style={{
                    paddingLeft: "0.2rem",
                    paddingRight: "0.2rem",
                    borderRadius: "0.2rem",
                    fontWeight: 650,
                  }}
                >
                  <div style={{ color: "#2234da" }}>Active Contracts</div>
                  <div>2</div>
                </div>
              </div>
            </CardBody>
          </Card>
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
            boxShadow="xl"
            transition="transform 0.2s" // Add a smooth transition effect
            _hover={{ transform: "scale(1.05)" }}
            style={{
              width: "100%",
              //   boxShadow: "inherit 100px",
            }}
          >
            <CardBody
              style={{
                textAlign: "left",
                marginTop: "-0.5rem",
                marginBottom: "-0.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <FaFileContract
                  style={{ margin: "auto" }}
                  size="2rem"
                  color="#2234da"
                />
                <div
                  style={{
                    paddingLeft: "0.2rem",
                    paddingRight: "0.2rem",
                    borderRadius: "0.2rem",
                    fontWeight: 650,
                  }}
                >
                  <div style={{ color: "#2234da" }}>Active Contracts</div>
                  <div>2</div>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            fontWeight: 625,
          }}
        >
          <div>Recommended Jobs</div>
          <div style={{ color: "#ff5045", cursor: "pointer" }}>See More</div>
        </div>
        {Jobs.map((job) => {
          return (
            <Card
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
              style={{ marginTop: "1rem" }}
              boxShadow="xl"
              transition="transform 0.3s" // Add a smooth transition effect
              _hover={{ transform: "scale(1.02)" }}
            >
              <CardBody style={{ textAlign: "left" }}>
                <Heading size="md" style={{ paddingBottom: "0.5rem" }}>
                  {job?.category}
                </Heading>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "0.5rem",
                  }}
                >
                  <Text pb="2">{job.companyName}</Text>•
                  <Text pb="2">{job?.skills}</Text>•
                  <Text pb="2">{job?.experience} years experience</Text>
                </div>
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
                      {/* <FaRegStar /> */}
                      4.5
                    </div>
                  </div>
                  <div style={{ color: "gray" }}>
                    <button
                      style={{
                        color: "#ff5045",
                        cursor: "pointer",
                        fontWeight: 700,
                        border: "1px solid gray",
                        borderRadius: "0.5rem",
                        paddingLeft: "0.5rem",
                        paddingRight: "0.5rem",
                        fontSize: "0.8rem",
                        marginRight: "0.5rem",
                      }}
                    >
                      Apply
                    </button>
                    4 days ago
                  </div>
                </div>
              </CardBody>
            </Card>
          );
        })}
      </div>
      <div style={{ flex: 0.6 }}></div>
    </div>
  );
};

export default Dashboard;
