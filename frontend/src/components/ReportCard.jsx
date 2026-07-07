function ReportCard({ report }) {
  if (!report) return null;

  const positives = Array.isArray(report.positives) ? report.positives : [];
  const risks = Array.isArray(report.risks) ? report.risks : [];
  const sources = Array.isArray(report.sources) ? report.sources : [];

  const decisionText = (report.decision ?? "Review").toString();

  const confidence = Number.isFinite(report.confidence) ? report.confidence : 0;

  const confidenceColor =
    confidence >= 80
      ? "#16a34a"
      : confidence >= 60
      ? "#f59e0b"
      : "#dc2626";

  const decisionClass = `decision ${decisionText.toLowerCase()}`;

  return (
    <section
      className="report-card"
      aria-label={`Investment report for ${report.company}`}
    >
      <div className="report-header">
        <div>
          <p className="section-title">Investment Report</p>
          <h2>{report.company}</h2>
        </div>

        <span className={decisionClass}>{decisionText}</span>
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
            The confidence rating is based on company data, risk signals, and
            our AI research process.
          </p>
        </div>
      </div>

      <div className="summary-card">
        <h3>Summary</h3>
        <p>{report.summary || "No summary available."}</p>
      </div>

      <div className="grid-two">
        <div className="card">
          <h3>Positive Factors</h3>
          {positives.length > 0 ? (
            <ul>
              {positives.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>No positive factors provided.</p>
          )}
        </div>

        <div className="card">
          <h3>Risk Factors</h3>
          {risks.length > 0 ? (
            <ul>
              {risks.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>No risk factors provided.</p>
          )}
        </div>
      </div>

      {report.reasoning && (
        <div className="card">
          <h3>AI Reasoning</h3>
          <p>{report.reasoning}</p>
        </div>
      )}

      {sources.length > 0 && (
        <div className="card">
          <h3>Sources</h3>
          <ul>
            {sources.map((source, index) => (
              <li key={index}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {source.title || source.url}
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
