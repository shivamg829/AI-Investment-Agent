function ReportCard({ report }) {
  if (!report) return null;

  const confidenceColor =
    report.confidence >= 80
      ? "#16a34a"
      : report.confidence >= 60
        ? "#f59e0b"
        : "#dc2626";

  return (
    <section className="report-card">
      <div className="report-header">
        <div>
          <p className="section-title">Investment Report</p>
          <h2>{report.company}</h2>
        </div>

        <span className={`decision ${report.decision.toLowerCase()}`}>
          {report.decision}
        </span>
      </div>

      <div className="confidence-card">
        <div
          className="confidence-circle"
          style={{ borderColor: confidenceColor }}
        >
          {report.confidence}
        </div>

        <div>
          <h3>Confidence Score</h3>
          <p>
            Overall confidence generated using AI analysis and our investment
            scoring engine.
          </p>
        </div>
      </div>

      <div className="summary-card">
        <h3>Summary</h3>

        <p>{report.summary}</p>
      </div>

      <div className="grid-two">
        <div className="card">
          <h3>Positive Factors</h3>

          <ul>
            {report.positives.map((item, index) => (
              <li key={index}>✅ {item}</li>
            ))}
          </ul>
        </div>

        <div className="card">
          <h3>Risk Factors</h3>

          <ul>
            {report.risks.map((item, index) => (
              <li key={index}>⚠️ {item}</li>
            ))}
          </ul>
        </div>
      </div>

      {report.reasoning && (
        <div className="card">
          <h3>AI Reasoning</h3>

          <p>{report.reasoning}</p>
        </div>
      )}

      {report.sources?.length > 0 && (
        <div className="card">
          <h3>Sources</h3>

          <ul>
            {report.sources.map((source, index) => (
              <li key={index}>
                <a href={source.url} target="_blank" rel="noreferrer">
                  {source.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

export default ReportCard;
