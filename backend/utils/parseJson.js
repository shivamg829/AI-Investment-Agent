export const extractJsonFromText = (text) => {
  if (!text) {
    throw new Error("Invalid AI response: empty text");
  }

  const raw = typeof text === "string" ? text : JSON.stringify(text);
  const cleanedText = raw
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  const firstBrace = cleanedText.indexOf("{");
  const lastBrace = cleanedText.lastIndexOf("}");

  if (firstBrace === -1 || lastBrace === -1) {
    throw new Error(`No JSON object found in AI response: ${cleanedText.slice(0, 220)}`);
  }

  const jsonString = cleanedText.slice(firstBrace, lastBrace + 1);

  try {
    return JSON.parse(jsonString);
  } catch (parseError) {
    throw new Error(`Failed to parse JSON from AI response: ${parseError.message}. Raw response: ${jsonString}`);
  }
};