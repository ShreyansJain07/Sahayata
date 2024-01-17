import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const AiVideo = () => {
  const location = useLocation();
  const params = location.state;
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      const parsedData = JSON.parse(params.paramName);
      setData(parsedData);
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
  }, [params.paramName]);

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <div style={{ fontSize: "30px" }}>{item.title}</div>
          <ul>
            {item.subtopics.map((subtopic, index) => (
              <li key={index}>{subtopic}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default AiVideo;
