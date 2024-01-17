import React, { useState } from "react";
import "./AiCourse.css";
import { Input, Button } from "antd";

const AiCourse = () => {
  const [inputFields, setInputFields] = useState([{ value: "" }]);
  const [title, setTitle] = useState("");
  const handleInputChange = (e, id) => {
    const newInputFields = [...inputFields];
    newInputFields[id].value = e.target.value;
    setInputFields(newInputFields);
  };
  const handleAddUnit = () => {
    setInputFields([...inputFields, { value: "" }]);
  };

  const handleDeleteLastUnit = () => {
    if (inputFields.length > 1) {
      const newInputFields = [...inputFields];
      newInputFields.pop();
      setInputFields(newInputFields);
    }
  };

  const handleGenerate = async () => {
    console.log("pressed");
    // const data = await searchYoutube(inputFields[0].value);
    // console.log(data);
  };

  return (
    <>
      <div className="aicourse-main">AI Course Maker</div>
      <div className="aicourse-info">
        Enter in a course title, or what you want to learn about. Then enter a
        list of units, which are the specifics you want to learn. and our AI
        will generate a course for you!
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
      <Button className="aicourse-button" onClick={handleAddUnit}>
        Add Unit <span style={{ color: "green", fontSize: "20px" }}>+</span>
      </Button>
      <Button className="aicourse-button" onClick={handleDeleteLastUnit}>
        Delete Unit <span style={{ color: "red", fontSize: "20px" }}>-</span>
      </Button>
      <Button onClick={handleGenerate} className="aicourse-button">
        Generate <span style={{ color: "lightblue", fontSize: "20px" }}>↓</span>
      </Button>
    </>
  );
};

export default AiCourse;
