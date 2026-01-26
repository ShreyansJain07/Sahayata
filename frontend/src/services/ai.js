import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.REACT_APP_GEMINI_API_KEY || "";
console.log(API_KEY);

export const GEMINI_MODEL = "gemini-2.5-flash-lite";

export const ai = new GoogleGenAI({ apiKey: API_KEY });
