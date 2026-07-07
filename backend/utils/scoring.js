const clampScore = (score) => {
  return Math.max(0, Math.min(100, Math.round(score)));
};

const countMatches = (text, keywords) => {
  const lowerText = text.toLowerCase();

  return keywords.reduce((count, keyword) => {
    return lowerText.includes(keyword) ? count + 1 : count;
  }, 0);
};

export const calculateInvestmentScore = ({ positives, risks, recentSignals }) => {
  const allText = [
    ...(positives || []),
    ...(risks || []),
    ...(recentSignals || []),
  ].join(" ");

  let score = 50;

  score += countMatches(allText, [
    "growth",
    "profit",
    "strong",
    "revenue",
    "margin",
    "cash flow",
    "market leader",
    "expansion",
  ]) * 5;

  score -= countMatches(allText, [
    "debt",
    "loss",
    "decline",
    "competition",
    "risk",
    "lawsuit",
    "slowdown",
    "valuation",
  ]) * 4;

  return clampScore(score);
};

export const getDecisionFromScore = (score) => {
  if (score >= 80) return "INVEST";
  if (score >= 60) return "WATCHLIST";
  return "PASS";
};