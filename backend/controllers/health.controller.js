export const healthCheck = (req, res) => {
  res.status(200).json({
    success: true,
    message: "AI Investment Research Agent backend is running",
  });
};