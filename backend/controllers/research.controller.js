import { generateResearchReport } from "../services/research.service.js";

export const researchCompany = async (req, res) => {
  try {
    const { company } = req.body;

    if (!company?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Company name is required",
      });
    }

    const report = await generateResearchReport(company);

    return res.status(200).json({
      success: true,
      data: report,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};