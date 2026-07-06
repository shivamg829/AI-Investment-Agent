function ReportCard({ report }) {
  if (!report) return null;

  return (
    <section className="report-card">
      <div className="report-top">
        <div>
          <p className="muted">Research result</p>
          <h2>{report.company}</h2>
        </div>

        <span className={`decision ${report.decision.toLowerCase()}`}>
          {report.decision}
        </span>
      </div>

      <div className="confidence-box">
        <div className="score-row">
          <span>Confidence Score</span>
          <strong>{report.confidence}/100</strong>
        </div>

        <div className="progress">
          <div style={{ width: `${report.confidence}%` }}></div>
        </div>
      </div>

      <p className="report-summary">{report.summary}</p>

      <div className="report-grid">
        <div>
          <h3>Positive Points</h3>
          {report.positives.map((item, index) => (
            <p key={index} className="point positive">
              {item}
            </p>
          ))}
        </div>

        <div>
          <h3>Risks</h3>
          {report.risks.map((item, index) => (
            <p key={index} className="point risk">
              {item}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ReportCard;