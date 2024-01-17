import React from "react";

import Questions from "../components/Questions";
import { Typography } from "@material-ui/core";

function ResumeBiulder() {

  return (
      <div className="App">
        <Typography
          variant="h6"
          style={{
            textAlign: "center",
            margin: "2rem",
          }}
        >
          Resume Builder
        </Typography>
        <Questions />
      </div>
    
  );
}

export default ResumeBiulder;
