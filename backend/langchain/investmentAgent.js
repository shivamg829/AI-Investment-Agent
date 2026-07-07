import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { PromptTemplate } from "@langchain/core/prompts";
import { investmentResearchPrompt } from "./prompts.js";
import { extractJsonFromText } from "../utils/parseJson.js";

export const runInvestmentAgent = async (company, researchContext) => {
  const model = new ChatGoogleGenerativeAI({
    model: "gemini-1.5-flash",
    apiKey: process.env.GEMINI_API_KEY,
    temperature: 0.2,
  });

  const prompt = PromptTemplate.fromTemplate(investmentResearchPrompt);

  const formattedPrompt = await prompt.format({
    company,
    researchContext,
  });

  const response = await model.invoke(formattedPrompt);

  return extractJsonFromText(response.content);
};