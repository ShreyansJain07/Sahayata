import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.REACT_APP_GEMINI_API_KEY || "";
export const GEMINI_MODEL =
  process.env.REACT_APP_GEMINI_MODEL || "gemini-1.5-flash";

export const ai = new GoogleGenAI({ apiKey: API_KEY });
