import { ChatGroq } from "@langchain/groq";
import { PromptTemplate } from "@langchain/core/prompts";
import { investmentResearchPrompt } from "./prompts.js";
import { extractJsonFromText } from "../utils/parseJson.js";

export const runInvestmentAgent = async (company, researchContext) => {
  const model = new ChatGroq({
    apiKey: process.env.GROQ_API_KEY,
    model: "llama-3.1-8b-instant",
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