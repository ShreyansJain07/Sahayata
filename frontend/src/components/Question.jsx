import React, { useContext } from "react";
import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AppContext from "../AppContext";
import { ArrowRight } from "@material-ui/icons";
import { BsStars } from "react-icons/bs";
import { UserContext } from "../App";
import { ai, GEMINI_MODEL } from "../services/ai";

const useStyles = makeStyles((theme) => ({
  buttonContainer: {
    display: "block",
    marginTop: "1rem",
  },
  button: {
    background: "white",
  },
}));
function Question() {
  const classes = useStyles();
  const value = useContext(AppContext);
  const { user, setUser } = useContext(UserContext);

  let { questionAnswer } = value.state;
  let { handleChangeInput, nextQuestion } = value.function;

  const [enhancedAnswer, setEnhancedAnswer] = React.useState("");
  const [isEnhancing, setIsEnhancing] = React.useState(false);

  const fetchData = async () => {
    if (!questionAnswer.answer?.trim()) {
      return;
    }

    setIsEnhancing(true);
    try {
      const prompt = `You are a professional resume writer. Enhance the following answer to make it more professional, impactful, and suitable for a resume.

Question: "${questionAnswer.question}"
Original Answer: "${questionAnswer.answer}"

Rules:
- Keep it concise (2 short paragraphs maximum)
- Use action verbs and quantifiable achievements where possible
- Maintain a professional tone
- Do not add any asterisks, markdown formatting, or special characters
- Just provide the enhanced text directly`;

      const response = await ai.models.generateContent({
        model: GEMINI_MODEL,
        contents: prompt,
      });

      const enhancedText = response.text.replace(/\*/g, " ").trim();
      setEnhancedAnswer(() => {
        handleChangeInput({ target: { value: enhancedText } });
        return enhancedText;
      });
      setUser((prev) => {
        const now = prev;
        now.resume = [...now.resume, enhancedText];
        return now;
      });
      console.log(enhancedText);
    } catch (error) {
      console.error("Fetch Error:", error);
    } finally {
      setIsEnhancing(false);
    }
  };

  React.useEffect(() => {
    setUser((prev) => ({ ...prev, resume: [] }));
  }, []);

  React.useEffect(() => {
    // Whenever the questionAnswer.answer changes, reset enhancedAnswer
    setEnhancedAnswer("");
  }, [questionAnswer.answer]);

  return (
    <div>
      <form noValidate autoComplete="on" onSubmit={nextQuestion}>
        <TextField
          id="standard-basic"
          label={questionAnswer.question}
          name={questionAnswer.resumeFieldId}
          value={enhancedAnswer || questionAnswer.answer || ""}
          onChange={handleChangeInput}
          style={{ width: "30rem" }}
        />
        <div className={classes.buttonContainer}>
          <Button
            type="submit"
            variant="contained"
            color="default"
            className={classes.button}
            endIcon={<ArrowRight />}
          >
            Next
          </Button>
          <Button
            onClick={() => fetchData()}
            disabled={isEnhancing}
            style={{
              color: "white",
              backgroundColor: isEnhancing ? "#999" : "#ff5045",
              marginLeft: "1rem",
              fontWeight: 620,
            }}
            className={classes.button}
          >
            {isEnhancing ? "Enhancing..." : "Enhance with AI"}
            <BsStars style={{ marginLeft: "0.35rem" }} />
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Question;
