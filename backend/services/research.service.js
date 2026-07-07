import { runInvestmentAgent } from "../langchain/investmentAgent.js";
import { searchCompanyNews } from "./search.service.js";
import {
  calculateInvestmentScore,
  getDecisionFromScore,
} from "../utils/scoring.js";

const buildFallbackReport = (company) => {
  return {
    company,
    decision: "WATCHLIST",
    confidence: 60,
    summary: `${company} requires further research before making a strong investment decision. The current report is generated using fallback logic because the AI provider quota was unavailable.`,
    positives: [
      "Company may have long-term business potential.",
      "Further analysis of financials and recent news can improve confidence.",
      "A watchlist decision avoids making an aggressive recommendation without complete AI analysis.",
    ],
    risks: [
      "Live AI analysis could not be completed due to provider quota limits.",
      "Recent news and financial context may be incomplete.",
      "Investment decision should not be made without deeper research.",
    ],
    recentSignals: [],
    sources: [],
    reasoning:
      "The system returned a conservative WATCHLIST decision because the Gemini API quota was exceeded during analysis.",
  };
};

const formatResearchContext = (newsItems) => {
  if (!newsItems.length) return "No recent web research context found.";

  return newsItems
    .map(
      (item, index) =>
        `${index + 1}. Title: ${item.title}\nURL: ${item.url}\nContext: ${item.content}`
    )
    .join("\n\n");
};

export const generateResearchReport = async (company) => {
  try {
    const newsItems = await searchCompanyNews(company);
    const researchContext = formatResearchContext(newsItems);

    const report = await runInvestmentAgent(company, researchContext);

    const confidence = calculateInvestmentScore({
      positives: report.positives,
      risks: report.risks,
      recentSignals: report.recentSignals,
    });

    return {
      company: report.company || company,
      decision: getDecisionFromScore(confidence),
      confidence,
      summary: report.summary || "No summary available.",
      positives: Array.isArray(report.positives) ? report.positives : [],
      risks: Array.isArray(report.risks) ? report.risks : [],
      recentSignals: Array.isArray(report.recentSignals)
        ? report.recentSignals
        : [],
      sources: newsItems.map((item) => ({
        title: item.title,
        url: item.url,
      })),
      reasoning: report.reasoning || "No reasoning available.",
    };
  } catch (error) {
    console.error("Research generation failed:", error.message);
    return buildFallbackReport(company);
  }
};