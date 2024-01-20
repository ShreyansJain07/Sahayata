import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Heading, Text, Checkbox, Stack, Center } from "@chakra-ui/react";

const YoutubeSearch = ({ title }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [videos, setVideos] = useState([]);
  const [videoSummary, setVideoSummary] = useState("");

  const [ques, setques] = useState([]);

  const API_KEY = "AIzaSyBrdsClFkrQokGYbdXCVSbUTtcOanxUFBM"; // Replace with your actual YouTube API key
  const OPENAI_API_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiOGZjMDdiMWItZDVhYS00MDEwLWJjMzEtYjRjMGJjNmNmOWJkIiwidHlwZSI6ImFwaV90b2tlbiJ9.FRpoCr6xHdRLkoW_ysOWdzAqW7gS-blH9cdHAo3NAaY";

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&q=${title}&videoDuration=medium&videoEmbeddable=true&type=video&maxResults=5`
      );

      setVideos(response.data.items);

      if (response.data.items.length > 0) {
        const videoId = response.data.items[0].id.videoId;
        const summary = await summarizeVideo(videoId);
        setVideoSummary(summary);
      }
    } catch (error) {
      console.error("Error fetching YouTube data:", error);
    }
  };

  const summarizeVideo = async (videoId) => {
    try {
      // const videoUrl = https://www.youtube.com/embed/${videoId};
      const response = await fetch(
        "https://api.edenai.run/v2/text/generation",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${OPENAI_API_KEY}`,
          },
          body: JSON.stringify({
            providers: "google",
            text: `Write a random paragraph about the YouTube video related to ${title}.`,
            temperature: 0.2,
            max_tokens: 500,
            fallback_providers: "",
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      generateQuestionsAndAnswers(data.google.generated_text);
      return data.google.generated_text;
    } catch (error) {
      console.error("Error generating summary:", error);
      return "";
    }
  };

  const generateQuestionsAndAnswers = async (summary) => {
    try {
      const response = await fetch(
        "https://api.edenai.run/v2/text/generation",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${OPENAI_API_KEY}`,
          },
          body: JSON.stringify({
            providers: "openai",
            //   text: ` generate 5 ques on ${videoSummary} with 4 options answers the answers options should not exceed the number the response  \n\n exapmle reponse should be in format of html with tags ,display
            //  `,
            text: `Based on the video summary provided, generate 5 multiple-choice questions related to the content. Each question should have four possible answers. The output should be structured in JSON format, similar to the example provided. 

          Video Summary: '${summary}'
          Examle JSON :-
          [
            {
              "id": 1,
              "question": "What is the role of React components in web development?",
              "answer": ["Option A", "Option B", "Option C", "Option D"],
              "correctAns": "Correct Answer"
            },
            {
              "id": 2,
              "question": "What are the fundamental building blocks of React components?",
              "answer": ["Option A", "Option B", "Option C", "Option D"],
              "correctAns": "Correct Answer"
            }
          ]`,
            temperature: 0.2,
            max_tokens: 500,
            fallback_providers: "",
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      const jsonObject = JSON.parse(data.openai.generated_text);
      setques(jsonObject);
    } catch (error) {
      console.error("Error generating summary:", error);
      return "";
    }
  };

  return (
    <div>
      {/* <input
        type="text"
        placeholder="Enter your search query"
        value={title}
        // onChange={(e) => setSearchQuery(e.target.value)}
      /> */}
      <button onClick={handleSearch}>Search</button>

      {/* <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          justifyContent: "space-between",
        }}
      >
        <div style={{ flex: 1 }}>
          {videos.length > 0 && (
            <div>
              {videos[0].id.videoId && (
                <iframe
                  title={
                    videos[0].snippet && videos[0].snippet.title
                      ? videos[0].snippet.title
                      : "Video"
                  }
                  width="500"
                  height="315"
                  style={{
                    margin: "1rem",
                    marginLeft: 0,
                    borderRadius: "1rem",
                  }}
                  src={`https://www.youtube.com/embed/${videos[0].id.videoId}`}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          )}

          <div
            style={{
              marginTop: "1.5rem",
            }}
          >
            <h2
              style={{
                marginBottom: "1rem",
                fontSize: "1.35rem",
                fontWeight: 590,
              }}
            >
              Summary for the First Video
            </h2>
            <p>{videoSummary}</p>
          </div>
        </div>

        <div style={{ flex: 1 }}>
          <h2
            style={{
              marginBottom: "0.5rem",
              fontSize: "1.35rem",
              fontWeight: 590,
              minWidth: "33%",
              flex: 1,
            }}
          >
            Questions and Answers
          </h2>
          {console.log(typeof ques)}
          {Array.isArray(ques) ? (
            ques.map((question) => (
              <div key={question.id} style={{ marginTop: "1rem" }}>
                <div style={{ fontWeight: 550 }}>{question.question}</div>
                <div>
                  {question.answer.map((option, index) => (
                    <div key={index}>
                      <input
                        type="checkbox"
                        name=""
                        style={{ marginRight: "0.5rem", color: "#ff5045" }}
                        id=""
                        color="#ff5045"
                      />
                      {option}
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p>Invalid data structure for ques</p>
          )}
        </div>
      </div> */}
      {/* <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            flex: 1,
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "1rem",
            overflow: "hidden",
          }}
        >
          {videos.length > 0 && (
            <div>
              {videos[0].id.videoId && (
                <iframe
                  title={
                    videos[0].snippet && videos[0].snippet.title
                      ? videos[0].snippet.title
                      : "Video"
                  }
                  width="100%"
                  height="315"
                  style={{ borderRadius: "1rem" }}
                  src={`https://www.youtube.com/embed/${videos[0].id.videoId}`}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          )}

          <div style={{ marginTop: "1.5rem", padding: "1rem" }}>
            <h2
              style={{
                marginBottom: "1rem",
                fontSize: "1.5rem",
                fontWeight: 600,
              }}
            >
              Summary for the First Video
            </h2>
            <p>{videoSummary}</p>
          </div>
        </div>

        <div
          style={{
            flex: 1,
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "1rem",
            overflow: "hidden",
          }}
        >
          <h2
            style={{
              marginBottom: "1rem",
              fontSize: "1.5rem",
              fontWeight: 600,
              minWidth: "33%",
              flex: 1,
              padding: "1rem",
            }}
          >
            Questions and Answers
          </h2>

          {Array.isArray(ques) ? (
            ques.map((question) => (
              <div
                key={question.id}
                style={{ marginTop: "1rem", padding: "1rem" }}
              >
                <div style={{ fontWeight: 600 }}>{question.question}</div>
                <div style={{ marginTop: "0.5rem" }}>
                  {question.answer.map((option, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "0.5rem",
                      }}
                    >
                      <input
                        type="checkbox"
                        name=""
                        style={{ marginRight: "0.5rem", color: "#ff5045" }}
                        id=""
                      />
                      <label htmlFor="">{option}</label>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p style={{ padding: "1rem" }}>Invalid data structure for ques</p>
          )}
        </div>
      </div> */}
      <Stack direction="row" spacing="1rem" justifyContent="space-between">
        <Box flex="1" boxShadow="xl" borderRadius="xl" overflow="hidden">
          {videos.length > 0 && (
            <Box>
              {videos[0].id.videoId && (
                <Center>
                  <iframe
                    title={
                      videos[0].snippet && videos[0].snippet.title
                        ? videos[0].snippet.title
                        : "Video"
                    }
                    width="500"
                    height="315"
                    style={{ borderRadius: "1rem" }}
                    src={`https://www.youtube.com/embed/${videos[0].id.videoId}`}
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </Center>
              )}
            </Box>
          )}

          <Box mt="1rem" p="1rem">
            <Heading mb="1rem" fontSize="xl" fontWeight="bold">
              Summary for the First Video
            </Heading>
            <Text>{videoSummary}</Text>
          </Box>
        </Box>

        <Box flex="1" boxShadow="xl" borderRadius="xl" overflow="hidden">
          <Box p="1rem">
            <Heading mb="0.5rem" fontSize="xl" fontWeight="bold">
              Questions and Answers
            </Heading>

            {Array.isArray(ques) ? (
              ques.map((question) => (
                <Box
                  key={question.id}
                  mt="1rem"
                  p="1rem"
                  borderBottom="1px solid #ccc"
                >
                  <Text fontWeight="bold">{question.question}</Text>
                  <Stack mt="0.5rem" spacing="0.5rem">
                    {question.answer.map((option, index) => (
                      <Box key={index} display="flex" alignItems="start">
                        <Checkbox colorScheme="red" mr="0.5rem" mt="0.3rem" />
                        <Text>{option}</Text>
                      </Box>
                    ))}
                  </Stack>
                </Box>
              ))
            ) : (
              <Text p="1rem">Invalid data structure for ques</Text>
            )}
          </Box>
        </Box>
      </Stack>
    </div>
  );
};

export default YoutubeSearch;
