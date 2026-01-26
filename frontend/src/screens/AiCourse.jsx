import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AiCourse.css";
import { Input, Button, Spin, message } from "antd";
import { BsStars } from "react-icons/bs";
import svg from "../assests/aicourse.svg";
import { ai, GEMINI_MODEL } from "../services/ai";

const AiCourse = () => {
  const navigate = useNavigate();
  const [inputFields, setInputFields] = useState([
    { value: "" },
    { value: "" },
  ]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const handleInputChange = (e, id) => {
    const newInputFields = [...inputFields];
    newInputFields[id].value = e.target.value;
    setInputFields(newInputFields);
  };
  const handleAddUnit = () => {
    setInputFields([...inputFields, { value: "" }]);
  };

  const handleDeleteLastUnit = () => {
    if (inputFields.length > 2) {
      const newInputFields = [...inputFields];
      newInputFields.pop();
      setInputFields(newInputFields);
    }
  };

  const handleGenerate = async () => {
    // Validate inputs
    if (!title.trim()) {
      message.error("Please enter a course title");
      return;
    }

    const filledUnits = inputFields.filter((field) => field.value.trim());
    if (filledUnits.length === 0) {
      message.error("Please enter at least one unit");
      return;
    }

    setLoading(true);
    console.log("Generating course...");

    try {
      const unitsList = filledUnits
        .map((field, index) => `Unit ${index + 1}: ${field.value}`)
        .join("\n");

      const prompt = `You are an expert course curriculum designer. Create a comprehensive course structure for "${title}".

The course should cover these units:
${unitsList}

For each unit, generate 4-6 specific, actionable subtopics that a student should learn. Each subtopic should be clear enough to search for educational videos on YouTube.

IMPORTANT: Return ONLY valid JSON, no markdown, no code blocks, no explanations.

Required JSON structure:
[
  {
    "id": 1,
    "title": "Unit title here",
    "subtopics": ["Subtopic 1", "Subtopic 2", "Subtopic 3", "Subtopic 4"]
  }
]

Rules:
- Each subtopic should be 3-8 words
- Subtopics should be searchable terms for educational content
- Order subtopics from basic to advanced within each unit
- Return ONLY the JSON array, nothing else`;

      const response = await ai.models.generateContent({
        model: GEMINI_MODEL,
        contents: prompt,
      });

      const responseText = response.text;
      console.log("AI Response:", responseText);

      // Parse and validate JSON
      const courseData = JSON.parse(responseText);

      if (!Array.isArray(courseData) || courseData.length === 0) {
        throw new Error("Invalid course structure received");
      }

      const params = {
        paramName: JSON.stringify(courseData),
      };
      navigate("/aivideo", { state: params });
    } catch (error) {
      console.error("Error generating course:", error);
      message.error("Failed to generate course. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="aicourse-page">
        <div className="aicourse-left">
          <div className="aicourse-main">AI Course Maker</div>
          <div className="aicourse-info">
            Enter in a course title, or what you want to learn about. Then enter
            a list of units, which are the specifics you want to learn. and our
            AI will generate a course for you!
          </div>
          <div className="aicourse-inputarea">
            <div className="aicourse-input-title">Title</div>
            <div>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="aicourse-input"
                placeholder="Enter the main topic of the course (e.g. 'Calculus')"
              />
            </div>
          </div>
          {inputFields.map((input, id) => (
            <div className="aicourse-inputarea" key={id}>
              <div className="aicourse-input-title">Unit {id + 1}</div>
              <div>
                <Input
                  value={input.value}
                  onChange={(e) => handleInputChange(e, id)}
                  className="aicourse-input"
                  placeholder="Enter the subtopic topic of the course"
                />
              </div>
            </div>
          ))}
          <div className="aicourse-actions">
            <Button
              className="aicourse-button"
              style={{ backgroundColor: "#16a34a", paddingTop: "0" }}
              onClick={handleAddUnit}
            >
              Add Unit <span className="aicourse-button-icon">+</span>
            </Button>
            <Button
              className="aicourse-button"
              style={{ backgroundColor: "#dc2626", paddingTop: "0" }}
              onClick={handleDeleteLastUnit}
            >
              Delete Unit <span className="aicourse-button-icon">-</span>
            </Button>
            <Button
              onClick={handleGenerate}
              disabled={loading}
              className="aicourse-button aicourse-button-generate"
              style={{
                backgroundColor: loading ? "#6b7280" : "#1d4ed8",
                paddingTop: "0",
              }}
            >
              {loading ? (
                <>
                  <Spin size="small" style={{ marginRight: "0.5rem" }} />
                  <div>Generating...</div>
                </>
              ) : (
                <>
                  <div>Generate</div>
                  <span className="aicourse-button-icon">
                    <BsStars />
                  </span>
                </>
              )}
            </Button>
          </div>
        </div>
        <div className="aicourse-right">
          <img src={svg} className="aicourse-hero" alt="" />
        </div>
      </div>
    </>
  );
};

export default AiCourse;
