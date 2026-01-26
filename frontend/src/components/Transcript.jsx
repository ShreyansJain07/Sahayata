import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import {
  Box,
  Heading,
  Text,
  Checkbox,
  Stack,
  Center,
  Spinner,
  Button,
} from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import { ai, GEMINI_MODEL } from "../services/ai";

const YoutubeSearch = ({ title }) => {
  const lastSearchedTitleRef = useRef("");
  const [videos, setVideos] = useState([]);
  const [videoSummary, setVideoSummary] = useState("");
  const [ques, setques] = useState([]);
  const [loading, setLoading] = useState(false);
  const [summaryLoading, setSummaryLoading] = useState(false);

  const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY; // YouTube Data API v3 key

  const handleSearch = async (queryTitle = title) => {
    if (!queryTitle) {
      return;
    }
    if (lastSearchedTitleRef.current === queryTitle) {
      return;
    }
    lastSearchedTitleRef.current = queryTitle;
    setLoading(true);
    setVideoSummary("");
    setques([]);

    try {
      if (!API_KEY) {
        console.error("Missing REACT_APP_YOUTUBE_API_KEY");
        return;
      }
      const response = await axios.get(
        "https://www.googleapis.com/youtube/v3/search",
        {
          params: {
            key: API_KEY,
            part: "snippet",
            q: queryTitle,
            type: "video",
            videoEmbeddable: "true",
            videoDuration: "medium",
            maxResults: 5,
          },
        },
      );

      setVideos(response.data.items);

      if (response.data.items.length > 0) {
        const videoTitle = response.data.items[0].snippet?.title || queryTitle;
        setSummaryLoading(true);
        const summary = await summarizeVideo(videoTitle);
        setVideoSummary(summary);
      }
    } catch (error) {
      console.error("Error fetching YouTube data:", error);
    } finally {
      setLoading(false);
    }
  };

  const summarizeVideo = async (videoTitle) => {
    try {
      const prompt = `You are an educational content expert. Write a comprehensive, informative summary about the topic "${title}" as it would be covered in an educational video titled "${videoTitle}".

The summary should:
- Be 150-200 words
- Explain key concepts clearly
- Be educational and engaging
- Cover the main points a student should understand

Write only the summary paragraph, no headers or formatting.`;

      const response = await ai.models.generateContent({
        model: GEMINI_MODEL,
        contents: prompt,
      });

      const summary = response.text;
      await generateQuestionsAndAnswers(summary);
      setSummaryLoading(false);
      return summary;
    } catch (error) {
      console.error("Error generating summary:", error);
      setSummaryLoading(false);
      return "Unable to generate summary. Please try again.";
    }
  };

  const generateQuestionsAndAnswers = async (summary) => {
    try {
      const prompt = `You are an educational quiz generator. Based on the following summary, create exactly 5 multiple-choice questions to test understanding.

Summary: "${summary}"

IMPORTANT: Return ONLY valid JSON, no markdown, no code blocks, no explanations.

Required JSON structure:
[
  {
    "id": 1,
    "question": "Clear, specific question about the content?",
    "answer": ["Option A", "Option B", "Option C", "Option D"],
    "correctAns": "The correct option text"
  }
]

Rules:
- Create exactly 5 questions
- Each question must have exactly 4 options
- correctAns must match one of the answer options exactly
- Questions should test understanding, not just memorization
- Options should be plausible but only one correct
- Return ONLY the JSON array`;

      const response = await ai.models.generateContent({
        model: GEMINI_MODEL,
        contents: prompt,
        config: {
          responseMimeType: "application/json",
        },
      });

      const responseText = response.text;
      console.log("Questions response:", responseText);

      let questions;
      try {
        questions = JSON.parse(responseText);
      } catch (parseError) {
        const match = responseText.match(/\[[\s\S]*\]/);
        if (!match) {
          throw parseError;
        }
        questions = JSON.parse(match[0]);
      }

      setques(Array.isArray(questions) ? questions : []);
    } catch (error) {
      console.error("Error generating questions:", error);
      setques([]);
    }
  };

  useEffect(() => {
    handleSearch(title);
  }, [title]);

  return (
    <div>
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
              Summary for the Video
            </Heading>
            {summaryLoading ? (
              <Center py="2rem">
                <Spinner size="lg" color="blue.500" />
                <Text ml="1rem">Generating summary...</Text>
              </Center>
            ) : (
              <Box className="aivideo-summary">
                <ReactMarkdown
                  remarkPlugins={[remarkMath]}
                  rehypePlugins={[rehypeKatex]}
                >
                  {videoSummary}
                </ReactMarkdown>
              </Box>
            )}
          </Box>
        </Box>

        <Box flex="1" boxShadow="xl" borderRadius="xl" overflow="hidden">
          <Box p="1rem">
            <Heading mb="0.5rem" fontSize="xl" fontWeight="bold">
              Questions and Answers
            </Heading>

            {summaryLoading ? (
              <Center py="2rem">
                <Spinner size="lg" color="blue.500" />
                <Text ml="1rem">Generating questions...</Text>
              </Center>
            ) : Array.isArray(ques) && ques.length > 0 ? (
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
              <Text p="1rem" color="gray.500">
                Click "Search & Generate Content" to generate questions
              </Text>
            )}
          </Box>
        </Box>
      </Stack>
    </div>
  );
};

export default YoutubeSearch;
