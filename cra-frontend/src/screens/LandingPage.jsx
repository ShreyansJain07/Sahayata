import React from "react";
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
} from "@chakra-ui/react";

const LandingPage = () => {
  const containerStyle = {
    margin: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    background: "#3498db",
    overflow: "hidden",
    position: "relative",
  };

  const wavyPatternStyle = {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "300px", // Adjust the height of the waves as needed
    backgroundImage: "linear-gradient(90deg, #fff 50%, #3498db 50%)",
    animation: "wave-animation 2s infinite linear",
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: "1.5rem",
        }}
      >
        <img
          src="https://imgs.search.brave.com/1bKHf00qm0SbzKs6UoP6QSXZ6xNk9v_7PeBC320kqsU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9kaXNh/YmxlZC13b21hbi1v/ZmZpY2UtbW9kZXJu/LWNhcnRvb24tcGVv/cGxlLWNoYXJhY3Rl/cnMtaWxsdXN0cmF0/aW9uLXBlcnNvbi13/aGVlbGNoYWlyLXRh/bGtzLXRvLXlvdW5n/LWNvbGxlYWd1ZS13/b3JraW5nLTEwMDEw/MTk5NC5qcGc"
          alt=""
        />
        <div
          className="magicpatternblob"
          style={{
            height: "90vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              fontSize: "2rem",
              fontWeight: "700",
              paddingBottom: "1rem",
            }}
          >
            Unleashing Opportunities, Creating Futures – Where Every Talent
            Finds Its Stage.
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Input
              type="tel"
              style={{
                backgroundColor: "white",
                fontSize: "1.1rem",
              }}
              placeholder="Search by name or keyword"
            />
            <Button
              variant="solid"
              style={{ backgroundColor: "#ff5045", fontWeight: 655 }}
              color="white"
            >
              Search
            </Button>
          </div>
        </div>
      </div>
      <div>
        <div style={containerStyle}>
          <div style={wavyPatternStyle}>hello</div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
