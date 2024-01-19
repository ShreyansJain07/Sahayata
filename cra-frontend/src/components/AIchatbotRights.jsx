import React, { useState } from "react";
import axios from "axios";
import { Button } from "@chakra-ui/react";
import { BsStars } from "react-icons/bs";

const AIchatbotRights = () => {
  const [promptString, setPromptString] = useState("");
  const [generatedText, setGeneratedText] = useState("");

  const handleGenerateText = async () => {
    try {
      const headersList = {
        Accept: "/",
        // "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        "Content-Type": "application/json",
      };

      const bodyContent = {
        promptString: promptString,
      };

      const response = await axios.post(
        "https://ai-endpoint-git-main-ritojnan.vercel.app/generatetext",
        bodyContent,
        {
          headers: headersList,
        }
      );

      setGeneratedText(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div style={{ minHeight: "60vh", marginTop: "1.3rem" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "1.25rem",
          maxWidth: "80vw",
        }}
      >
        <label>
          {/* Enter prompt string: */}
          <input
            type="text"
            value={promptString}
            onChange={(e) => setPromptString(e.target.value)}
            placeholder="Enter "
            style={{
              border: "4px solid #2234da",
              padding: "0.7rem",
              borderRadius: "1rem",
              width: "100%",
            }}
          />
        </label>
        <Button
          onClick={handleGenerateText}
          className="aicourse-button"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#2234da",
            padding: "0.35rem",
            color: "white",
          }}
        >
          <div>Ask with AI </div>
          <span
            style={{ color: "", fontSize: "1.15rem", marginLeft: "0.5rem" }}
          >
            <BsStars />
          </span>
        </Button>
      </div>
      <div>
        <strong>Generated Text:</strong>
        <p>{generatedText}</p>
      </div>
    </div>
  );
};

export default AIchatbotRights;
