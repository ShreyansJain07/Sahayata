import React, { useState, useEffect } from "react";
import axios from "axios";

const YoutubeSearch = ({ title }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [videos, setVideos] = useState([]);
  const [videoSummary, setVideoSummary] = useState("");

  const [ques, setques] = useState("");

  const API_KEY = "AIzaSyBrdsClFkrQokGYbdXCVSbUTtcOanxUFBM"; // Replace with your actual YouTube API key
  const OPENAI_API_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiOGZjMDdiMWItZDVhYS00MDEwLWJjMzEtYjRjMGJjNmNmOWJkIiwidHlwZSI6ImFwaV90b2tlbiJ9.FRpoCr6xHdRLkoW_ysOWdzAqW7gS-blH9cdHAo3NAaY";
  console.log(title);
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
            text: ` generate json of 5 ques on ${summary} with 4 options answers the answers options should not exceed the number the response should be in json format strictly \n\n exapmle reponse should be in format [
            {
              "question": "What is the main idea of the video?",
              "options": ["Option A", "Option B", "Option C", "Option D"]
            },
            {
              "question": "Who is the presenter of the video?",
              "options": ["Option A", "Option B", "Option C", "Option D"]
            },
            {
              "question": "What is the video's publication date?",
              "options": ["Option A", "Option B", "Option C", "Option D"]
            },
            {
              "question": "Where was the video filmed?",
              "options": ["Option A", "Option B", "Option C", "Option D"]
            },
            {
              "question": "What is the significance of the video?",
              "options": ["Option A", "Option B", "Option C", "Option D"]
            }
          ]
           `,
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
      setques(data.openai.generated_text);
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

      {videos.length > 0 && (
        <div>
          <h2>Details for the First Video</h2>
          {videos[0].id.videoId && (
            <iframe
              title={
                videos[0].snippet && videos[0].snippet.title
                  ? videos[0].snippet.title
                  : "Video"
              }
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${videos[0].id.videoId}`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          )}
        </div>
      )}

      <div>
        <h2>Summary for the First Video</h2>
        <p>{videoSummary}</p>
      </div>

      <div>
        <h2>Questions and Answers</h2>
        {ques}
      </div>
    </div>
  );
};

export default YoutubeSearch;
