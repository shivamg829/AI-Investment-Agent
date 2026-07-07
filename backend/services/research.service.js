import { runInvestmentAgent } from "../langchain/investmentAgent.js";

const buildFallbackReport = (company) => {
  return {
    company,
    decision: "WATCHLIST",
    confidence: 55,
    summary:
      "The agent could not complete a full AI analysis for this company. Please try again after checking API keys and network availability.",
    positives: [
      "The company may still have investment potential, but more research is required.",
    ],
    risks: [
      "AI analysis failed or returned incomplete output.",
      "No reliable reasoning could be generated in this run.",
    ],
    reasoning:
      "A fallback report was generated because the AI provider did not return a valid structured response.",
  };
};

export const generateResearchReport = async (company) => {
  try {
    const report = await runInvestmentAgent(company);

    return {
      company: report.company || company,
      decision: report.decision || "WATCHLIST",
      confidence: Number(report.confidence) || 60,
      summary: report.summary || "No summary available.",
      positives: Array.isArray(report.positives) ? report.positives : [],
      risks: Array.isArray(report.risks) ? report.risks : [],
      reasoning: report.reasoning || "No reasoning available.",
    };
  } catch (error) {
    console.error("AI research failed:", error.message);
    return buildFallbackReport(company);
  }
};