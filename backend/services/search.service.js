export const searchCompanyNews = async (company) => {
  try {
    if (!process.env.TAVILY_API_KEY) {
      return [];
    }

    const response = await fetch("https://api.tavily.com/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.TAVILY_API_KEY}`,
      },
      body: JSON.stringify({
        query: `${company} latest financial performance news investment outlook`,
        search_depth: "basic",
        max_results: 5,
      }),
    });

    if (!response.ok) {
      return [];
    }

    const data = await response.json();

    return (data.results || []).map((item) => ({
      title: item.title,
      url: item.url,
      content: item.content,
    }));
  } catch (error) {
    console.error("Tavily search failed:", error.message);
    return [];
  }
};