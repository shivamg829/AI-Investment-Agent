import { tavily } from "@tavily/core";

const client = tavily({
  apiKey: process.env.TAVILY_API_KEY,
});

export const searchCompanyNews = async (company) => {
  const response = await client.search(`${company} latest business news financial performance investment outlook`, {
    maxResults: 5,
    searchDepth: "basic",
  });

  return response.results.map((item) => ({
    title: item.title,
    url: item.url,
    content: item.content,
  }));
};