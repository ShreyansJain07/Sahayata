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
} from "@chakra-ui/react";

const BrowseTalent = () => {
  const [availableCandidates, setAvailableCandidates] = useState([
    { name: "Rishab", skills: "Front-End Dev" },
    { name: "Shreyans", skills: "Front-End Dev" },
  ]);
  return (
    <div style={{ backgroundColor: "#d3d3d3" }}>
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
          Browse Talent
        </div>
        <div>
          <Button
            variant="outline"
            style={{
              fontSize: "0.7rem",
              padding: "0.5rem",
              paddingTop: "0",
              paddingBottom: "0",
            }}
            color="#2234da"
          >
            Invite To Job
          </Button>
        </div>
      </div>
      <div>
        
      </div>
      <div>
        {availableCandidates?.map((candidate) => {
          return (
            <div style={{ padding: "1rem", paddingBottom: "0" }}>
              <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
              >
                <Image
                  objectFit="cover"
                  maxW={{ base: "100%", sm: "200px" }}
                  src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                  alt="Caffe Latte"
                />
                <Stack>
                  <CardBody style={{ textAlign: "left" }}>
                    <Heading size="md">{candidate?.name}</Heading>
                    <Text py="2">
                      Caffè latte is a coffee beverage of Italian origin made
                      with espresso and steamed milk.
                    </Text>
                    <Text pb="2">Speaks: English, Hindi</Text>
                    <Text pb="2">Skills: {candidate?.skills}</Text>
                  </CardBody>
                  <CardFooter>
                    <Button variant="outline" color="#ff5045">
                      Invite To Job
                    </Button>
                  </CardFooter>
                </Stack>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BrowseTalent;
