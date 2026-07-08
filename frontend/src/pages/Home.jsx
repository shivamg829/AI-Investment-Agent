import { useState } from "react";
import SearchBox from "../components/SearchBox";
import ReportCard from "../components/ReportCard";
import { researchCompany } from "../services/api";
import Loading from "../components/Loading";

function Home() {
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const highlights = [
    { title: "AI-backed", desc: "Instant company context" },
    { title: "Risk-aware", desc: "Signals and red flags" },
    { title: "Actionable", desc: "Clear invest/pass guidance" },
  ];

  const handleResearch = async (company) => {
    try {
      setLoading(true);
      setError("");
      setReport(null);

      const response = await researchCompany(company);

      if (response.success) {
        setReport(response.data);
      } else {
        setError("Unable to analyze the company.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="page">
      <nav className="navbar">
        <div className="brand-block">
          <div className="brand-mark">I</div>
          <div>
            <div className="logo">InvestOnly</div>
            <p className="brand-subtitle">AI investment research</p>
          </div>
        </div>
        <div className="nav-pill">Research Agent</div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">Company research in minutes</p>

          <h1>Make sharper investment calls with AI-backed research.</h1>

          <p className="description">
            Search any company and get a clear investment view with business
            summary, key risks, recent signals, confidence score, and a final
            invest/pass recommendation.
          </p>

          <SearchBox onSearch={handleResearch} loading={loading} />

          <div className="results-panel">
            {!loading && !error && !report && (
              <div className="panel-card empty-state">
                <div className="preview-header">
                  <div>
                    <p className="muted">Ready for analysis</p>
                    <h3>Enter a company name</h3>
                  </div>
                  <span className="status">Waiting</span>
                </div>

                <div className="preview-badge-row">
                  <span>What you’ll get</span>
                  <strong>Research report</strong>
                </div>

                <div className="insight-list">
                  <p>Business summary and investment signals</p>
                  <p>Positive factors and key risks</p>
                  <p>Confidence score and decision</p>
                </div>
              </div>
            )}

            {loading && <Loading />}

            {error && <div className="error-card">{error}</div>}

            {!loading && report && <ReportCard report={report} />}
          </div>

          <div className="hero-highlights">
            {highlights.map((item) => (
              <div className="highlight-card" key={item.title}>
                <strong>{item.title}</strong>
                <span>{item.desc}</span>
              </div>
            ))}
          </div>

          <div className="hero-note">
            AI-backed research that highlights the key opportunities and risks in one page.
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
