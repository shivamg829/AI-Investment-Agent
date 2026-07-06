export const generateResearchReport = async (company) => {
  return {
    company,
    decision: "WATCHLIST",
    confidence: 74,
    summary: `${company} appears fundamentally strong, but additional analysis is required before making an investment recommendation.`,
    positives: [
      "Recognized market presence",
      "Healthy long-term growth outlook",
      "Consistent business operations",
    ],
    risks: [
      "Valuation concerns",
      "Competitive market",
      "Macroeconomic uncertainty",
    ],
  };
};