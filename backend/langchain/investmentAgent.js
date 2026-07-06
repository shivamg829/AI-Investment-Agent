import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { PromptTemplate } from "@langchain/core/prompts";
import { investmentResearchPrompt } from "./prompts.js";

const cleanJsonResponse = (text) => {
  return text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();
};
export const runInvestmentAgent = async (company) => {
  const model = new ChatGoogleGenerativeAI({
    model: "gemini-1.5-flash",
    apiKey: process.env.GEMINI_API_KEY,
    temperature: 0.3,
  });
  const prompt = PromptTemplate.fromTemplate(investmentResearchPrompt);
  const formattedPrompt = await prompt.format({
    company,
  });
  const response = await model.invoke(formattedPrompt);
  const cleaned = cleanJsonResponse(response.content);
  return JSON.parse(cleaned);
};