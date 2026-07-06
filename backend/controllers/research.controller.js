export const researchCompany = async (req, res) => {
  try {
    const { company } = req.body;

    if (!company || !company.trim()) {
      return res.status(400).json({
        success: false,
        message: "Company name is required",
      });
    }

    const report = {
      company,
      decision: "WATCHLIST",
      confidence: 74,
      summary: `${company} looks interesting, but more research is needed before making a strong investment decision.`,
      positives: [
        "Strong brand presence",
        "Good long-term business potential",
        "Positive market interest",
      ],
      risks: [
        "Valuation may be expensive",
        "Market conditions can impact performance",
        "Competition remains high",
      ],
    };

    return res.status(200).json({
      success: true,
      data: report,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong while researching the company",
    });
  }
};