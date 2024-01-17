import "./App.css";
import RootLayout from "./layouts/RootLayout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/SignUp";
import BrowseTalent from "./screens/BrowseTalent";
import ResumeBuilder from "./screens/ResumeBuilder";
import Blog from "./components/Blog";
import SpeechtoText from "./components/SpeechtoText";
import React, { useEffect, useState } from "react";
import AppContext from "./AppContext";
import questionsArray from "./constants/questionsArray";
import VirtualAssistant from "./screens/VirtualAssistant";
import Dashboard from "./screens/Dashboard";

function App() {
  let [questions, setQuestions] = useState([]);
  let [answers, setAnswers] = useState([]);
  let [questionAnswer, setQuestionAnswer] = useState({});
  let [questionCompleted, setQuestionCompleted] = useState(false);

  useEffect(() => {
    setQuestions(questionsArray);
    setQuestionAnswer(questionsArray[0]);
  }, []);

  let handleChangeInput = (e) => {
    setQuestionAnswer({
      ...questionAnswer,
      answer: e.target.value,
    });
  };

  let nextQuestion = (e) => {
    e.preventDefault();
    questions.map((question) => {
      if (question.resumeFieldId == questionAnswer.resumeFieldId) {
        setAnswers([
          ...answers,
          { ...question, answer: questionAnswer.answer },
        ]);
      }
    });

    questions.map((qa, index) => {
      if (index <= questions.length) {
        if (qa.resumeFieldId === questionAnswer.resumeFieldId) {
          setQuestionAnswer(questions[index + 1]);
        }
      } else {
        setQuestionCompleted(true);
      }
    });
  };
  return (
    <>
      <AppContext.Provider
        value={{
          state: {
            questionAnswer,
            questionCompleted,
            questions,
            answers,
          },
          function: {
            handleChangeInput: handleChangeInput,
            nextQuestion: nextQuestion,
          },
        }}
      >
        <div className="App">
          <Routes>
            <Route path="/" element={<RootLayout />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/browse" element={<BrowseTalent />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/virtualassistant" element={<VirtualAssistant />} />
            <Route path="/resumebuilder" element={<ResumeBuilder />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/speech" element={<SpeechtoText />} />
          </Routes>
        </div>
      </AppContext.Provider>
    </>
  );
}

export default App;
