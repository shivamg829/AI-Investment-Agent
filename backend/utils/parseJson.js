export const extractJsonFromText = (text) => {
  if (!text || typeof text !== "string") {
    throw new Error("Invalid AI response");
  }

  const cleanedText = text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  const firstBrace = cleanedText.indexOf("{");
  const lastBrace = cleanedText.lastIndexOf("}");

  if (firstBrace === -1 || lastBrace === -1) {
    throw new Error("No JSON object found in AI response");
  }

  const jsonString = cleanedText.slice(firstBrace, lastBrace + 1);

  return JSON.parse(jsonString);
};