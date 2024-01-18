import React, { useState } from "react";
import {
  Select,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import { TbMessages } from "react-icons/tb";

const Community = () => {
  const [Groups, setGroups] = useState([
    {
      name: "Locomotory Disability",
      description: "Walking problem lorem5",
      posts: 100,
      messages: 699,
    },
    {
      name: "Locomotory Disability",
      description: "Walking problem lorem5",
      posts: 100,
      messages: 699,
    },
    {
      name: "Locomotory Disability",
      description: "Walking problem lorem5",
      posts: 100,
      messages: 699,
    },
  ]);
  return (
    <div style={{ padding: "2rem" }}>
      <div>Caraousel</div>
      <div style={{ minHeight: "100vh" }}>
        <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
          <div style={{ fontSize: "1.5rem", fontWeight: 625 }}>Categories</div>
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
                  <TbMessages style={{ color: "white", fontSize: "2rem" }} />
                </div>
                <CardBody
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <div style={{ fontWeight: 650 }}>{group.name}</div>
                    <div>{group.description}</div>
                    <div
                      style={{ display: "flex", flexDirection: "row" }}
                    >
                        
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
                      <div style={{ fontWeight: 650 }}>{group.messages}</div>
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
  );
};

export default Community;
