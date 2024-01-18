// AiVideo.js
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./AiVideo.css";

const AiVideo = () => {
  const location = useLocation();
  const params = location.state;
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState({ unit: 1, chapter: 1, title: "" });
  useEffect(() => {
    try {
      const parsedData = JSON.parse(params.paramName);
      setData(parsedData);
      if (parsedData.length > 0 && parsedData[0].subtopics.length > 0) {
        setSelected((prevSelected) => ({
          ...prevSelected,
          title: parsedData[0].subtopics[0],
        }));
      }
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
  }, [params.paramName]);

  const handleSubtopicClick = (unit, chapter, title) => {
    setSelected({ unit, chapter, title });
  };

  return (
    <div className="aivideo-main">
      <div className="aivideo-contents">
        {data.map((item) => (
          <div
            style={{
              borderBottom: "1px solid lightgray",
              marginTop: "10px",
              padding: "0px 0 20px",
            }}
            key={item.id}
          >
            <div>Unit {item.id}</div>
            <div style={{ fontSize: "30px", fontWeight: 500 }}>
              {item.title}
            </div>

            {item.subtopics.map((subtopic, index) => (
              <li
                style={{ fontWeight: 500 }}
                key={index}
                onClick={() =>
                  handleSubtopicClick(item.id, index + 1, subtopic)
                }
                className={
                  selected.unit === item.id && selected.chapter === index + 1
                    ? "li-selected"
                    : ""
                }
              >
                {subtopic}
              </li>
            ))}
          </div>
        ))}
      </div>
      <div className="aivideo-video">
        <div>
          Unit {selected.unit} · Chapter {selected.chapter}
        </div>
        {selected.title}
      </div>
      <div className="aivideo-ques"></div>
    </div>
  );
};

export default AiVideo;
