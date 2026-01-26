// AiVideo.js
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./AiVideo.css";
import YoutubeSearch from "../components/Transcript";

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
    if (
      selected.unit === unit &&
      selected.chapter === chapter &&
      selected.title === title
    ) {
      return;
    }
    setSelected({ unit, chapter, title });
  };

  return (
    <div className="aivideo-main">
      <aside className="aivideo-sidebar">
        <div className="aivideo-sidebar-title">Course Outline</div>
        <div className="aivideo-contents">
          {data.map((item) => (
            <div className="aivideo-unit" key={item.id}>
              <div className="aivideo-unit-label">Unit {item.id}</div>
              <div className="aivideo-unit-title">{item.title}</div>

              {item.subtopics.map((subtopic, index) => (
                <button
                  type="button"
                  key={index}
                  onClick={() =>
                    handleSubtopicClick(item.id, index + 1, subtopic)
                  }
                  className={`aivideo-subtopic${
                    selected.unit === item.id && selected.chapter === index + 1
                      ? " is-active"
                      : ""
                  }`}
                >
                  {subtopic}
                </button>
              ))}
            </div>
          ))}
        </div>
      </aside>
      <main className="aivideo-video">
        <div className="aivideo-header">
          <div className="aivideo-kicker">
            Unit {selected.unit} · Chapter {selected.chapter}
          </div>
          <div className="aivideo-title">{selected.title}</div>
        </div>
        <YoutubeSearch title={selected.title} />
      </main>
      {/* <div className="aivideo-ques"></div> */}
    </div>
  );
};

export default AiVideo;
