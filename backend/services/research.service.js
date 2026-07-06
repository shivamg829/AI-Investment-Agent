import { runInvestmentAgent } from "../langchain/investmentAgent.js";

export const generateResearchReport = async (company) => {
  const report = await runInvestmentAgent(company);

  return {
    company: report.company || company,
    decision: report.decision || "WATCHLIST",
    confidence: report.confidence || 60,
    summary: report.summary || "No summary available.",
    positives: report.positives || [],
    risks: report.risks || [],
    reasoning: report.reasoning || "No reasoning available.",
  };
};