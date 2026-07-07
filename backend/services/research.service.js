import { runInvestmentAgent } from "../langchain/investmentAgent.js";
import { searchCompanyNews } from "./search.service.js";

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
    recentSignals: [],
    sources: [],
    reasoning:
      "A fallback report was generated because the AI provider or research service did not return a valid response.",
  };
};

const formatResearchContext = (newsItems) => {
  if (!newsItems.length) {
    return "No recent web research context found.";
  }

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

    return {
      company: report.company || company,
      decision: report.decision || "WATCHLIST",
      confidence: Number(report.confidence) || 60,
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