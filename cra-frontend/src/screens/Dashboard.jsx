import React, { useState, useContext } from "react";
import { auth } from "../Firebase";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Input,
  FormLabel,
  Heading,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Checkbox,
  CheckboxGroup,
  useDisclosure,
} from "@chakra-ui/react";
import { FaFileContract } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { Badge, Calendar } from "antd";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import { updateUserProfile } from "../userFirestore";

const getListData = (value) => {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        {
          type: "warning",
          content: "This is warning event.",
        },
        {
          type: "success",
          content: "This is usual event.",
        },
      ];
      break;
    case 10:
      listData = [
        {
          type: "warning",
          content: "This is warning event.",
        },
        {
          type: "success",
          content: "This is usual event.",
        },
        {
          type: "error",
          content: "This is error event.",
        },
      ];
      break;
    case 15:
      listData = [
        {
          type: "warning",
          content: "This is warning event",
        },
        {
          type: "success",
          content: "This is very long usual event......",
        },
        {
          type: "error",
          content: "This is error event 1.",
        },
        {
          type: "error",
          content: "This is error event 2.",
        },
        {
          type: "error",
          content: "This is error event 3.",
        },
        {
          type: "error",
          content: "This is error event 4.",
        },
      ];
      break;
    default:
  }
  return listData || [];
};
const getMonthData = (value) => {
  if (value.month() === 8) {
    return 1394;
  }
};

const Dashboard = () => {
  const { user, setUser } = useContext(UserContext);
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

  // Calendar
  const monthCellRender = (value) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };
  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };
  const cellRender = (current, info) => {
    if (info.type === "date") return dateCellRender(current);
    if (info.type === "month") return monthCellRender(current);
    return info.originNode;
  };

  // Routing
  const navigate = useNavigate();

  // Modal
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [gender, setGender] = useState("-");
  const [BloodGrp, setBloodGrp] = useState("-");
  const [Role, setRole] = useState("-");
  const [WorkExperience, setWorkExperience] = useState("-");
  const [selectedValues, setSelectedValues] = useState([]);

  const addDetails = () => {
    if (!user) {
      alert("Sign in first");
    } else {
      updateUserProfile(user.uid, gender, BloodGrp, Role, WorkExperience);
      setUser({
        ...user,
        gender: gender,
        bloodGrp: BloodGrp,
        role: Role,
        workExperience: WorkExperience,
      });
    }
    onClose();
    window.location.reload();
  };

  const handleCheckboxChange = (values) => {
    setSelectedValues(values);
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "#f3f4f6",
          padding: "2rem",
          textAlign: "left",
          //   display: "flex",
          //   flexDirection: "row",
        }}
      >
        <div
          style={{
            // marginTop: "1rem",
            marginBottom: "0.7rem",
            fontSize: "1.75rem",
            fontWeight: 725,
          }}
        >
          Good morning, {user ? user.name : "User"}
        </div>
        <div style={{ fontWeight: 625 }}>User Profile</div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "white",
            marginTop: "1rem",
            borderRadius: "1rem",
            // boxShadow: "1rem",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          <div
            style={{
              flex: 0.5,
              borderRight: "1px solid lightgray",
              padding: "1rem",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div>
              <img
                src={
                  user
                    ? user.photo
                    : "https://imgs.search.brave.com/wl_4_Dm0dj1T1xWJ2Evsc_12M3MuKTZCxQ7Q-zWY1Lk/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8wLzBmL0dy/b3NzZXJfUGFuZGEu/SlBHLzUxMnB4LUdy/b3NzZXJfUGFuZGEu/SlBH"
                }
                alt=""
                style={{
                  width: "120px",
                  margin: "auto",
                  borderRadius: "1rem",
                  marginBottom: "1rem",
                }}
              />
              <div style={{ fontWeight: 625 }}>{user ? user.name : "User"}</div>
              <div>214 rating</div>
              <div
                style={{
                  marginBottom: "0.5rem",
                }}
              >
                {user ? user.role : "Sign in to continue"}
              </div>
              <button
                style={{
                  color: "white",
                  backgroundColor: "#ff5045",
                  borderRadius: "0.5rem",
                  paddingLeft: "0.5rem",
                  paddingRight: "0.5rem",
                  paddingTop: "0.35rem",
                  paddingBottom: "0.35rem",
                  margin: "auto",
                  width: "20%",
                  fontWeight: 600,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={onOpen}
              >
                Edit
                <MdEdit style={{ marginLeft: "0.4rem" }} />
              </button>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <div
              style={{
                padding: "1rem",
                borderBottom: "1px solid lightgray",
                color: "gray",
              }}
            >
              <div>User profile</div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  Gender:{" "}
                  <a style={{ color: "black", fontWeight: 600 }}>
                    {user ? user.gender : "-"}
                  </a>
                </div>
                <div>
                  Email:{" "}
                  <a style={{ color: "black", fontWeight: 600 }}>
                    {user ? user.email : "-"}
                  </a>
                </div>
                <div>
                  Phone number:{" "}
                  <a style={{ color: "black", fontWeight: 600 }}>
                    {user ? "943739262" : "-"}
                  </a>
                </div>
              </div>
            </div>
            <div
              style={{
                padding: "1rem",
                borderBottom: "1px solid lightgray",
                color: "gray",
              }}
            >
              <div>Health Information</div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  Blood group:{" "}
                  <a style={{ color: "black", fontWeight: 600 }}>
                    {user ? user.BloodGrp : "-"}
                  </a>
                </div>
                <CheckboxGroup
                  value={selectedValues}
                  onChange={handleCheckboxChange}
                  colorScheme="orange"
                >
                  <Checkbox value="blind">Blind</Checkbox>
                  <Checkbox value="deaf">Deaf</Checkbox>
                  <Checkbox value="locomotor">Locomotor disability</Checkbox>
                  <Checkbox value="other">Other</Checkbox>
                </CheckboxGroup>
              </div>
            </div>
            <div
              style={{
                padding: "1rem",
                borderBottom: "1px solid lightgray",
                color: "gray",
              }}
            >
              <div>Disability info</div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  UIUD:{" "}
                  <a style={{ color: "black", fontWeight: 600 }}>
                    {user ? "8326732" : "-"}
                  </a>
                </div>
                <div>
                  Disability PDF:{" "}
                  <button
                    style={{
                      color: "#3261ff",
                    }}
                    onClick={() => navigate("/")}
                  >
                    Click to upload a PDF {">"}
                  </button>
                </div>
              </div>
            </div>
            <div
              style={{
                padding: "1rem",
                color: "gray",
              }}
            >
              <div>Job</div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  Role:{" "}
                  <a style={{ color: "black", fontWeight: 600 }}>
                    {user ? user.Role : "-"}
                  </a>
                </div>
                <div>
                  Work experience:{" "}
                  <a style={{ color: "black", fontWeight: 600 }}>
                    {user ? user.WorkExperience + " years" : "-"}
                  </a>
                </div>
                <div>
                  Resume:{" "}
                  <button
                    style={{
                      color: "#3261ff",
                    }}
                    onClick={() => navigate("/resumebuilder")}
                  >
                    Create / Enhance Resume {">"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#f3f4f6",
          padding: "2rem",
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          textAlign: "left",
        }}
      >
        <div style={{ flex: 0.6 }}>
          <div style={{ fontWeight: 625 }}>Here are your statistics</div>
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
              paddingLeft: "1rem",
              paddingRight: "1rem",
              backgroundColor: "white",
              borderRadius: "0.5rem",
            }}
          >
            <Calendar cellRender={cellRender} />
          </div>
        </div>
        <div style={{ textAlign: "left", flex: 0.4 }}>
          <div
            style={{
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
                          border: "1px solid lightgray",
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
      </div>

      {/* // Modal  */}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormLabel>Gender</FormLabel>
            <Input
              onChange={(e) => setGender(e.target.value)}
              type="tel"
              placeholder="Enter gender"
            />
            <FormLabel style={{ paddingTop: "0.4rem" }}>Blood group</FormLabel>
            <Input
              onChange={(e) => setBloodGrp(e.target.value)}
              type="tel"
              placeholder="Enter blood group"
            />
            <FormLabel style={{ paddingTop: "0.4rem" }}>Role</FormLabel>
            <Input
              onChange={(e) => setRole(e.target.value)}
              type="tel"
              placeholder="Enter role"
            />
            <FormLabel style={{ paddingTop: "0.4rem" }}>
              Work experience
            </FormLabel>
            <Input
              onChange={(e) => setWorkExperience(e.target.value)}
              type="tel"
              placeholder="Enter work experience in years"
            />
          </ModalBody>
          <ModalFooter>
            <Button
              style={{
                backgroundColor: "#ff5045",
                color: "white",
                margin: "auto",
              }}
              onClick={addDetails}
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Dashboard;
