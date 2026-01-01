
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { Message } from "../types";
import { APEX_BIO } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getApexResponse = async (history: Message[], userInput: string): Promise<string> => {
  try {
    const contents = history.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));
    
    // Add current user input
    contents.push({ role: 'user', parts: [{ text: userInput }] });

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: contents,
      config: {
        systemInstruction: `You are the AI assistant for "Apex", a senior developer. 
        Apex's Bio: ${APEX_BIO}
        Your goal is to answer questions about Apex's experience, skills, and projects in a professional, slightly tech-savvy, and helpful tone.
        Always refer to Apex in the third person or as "my creator".
        If someone asks how to contact Apex, mention Discord: apex.xyz.
        Keep responses concise and engaging.`,
        temperature: 0.7,
      },
    });

    return response.text || "I'm having trouble connecting to Apex's database right now.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The uplink is down. Please try again later.";
  }
};
