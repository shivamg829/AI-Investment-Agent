import { useState } from "react";
import SearchBox from "../components/SearchBox";
import ReportCard from "../components/ReportCard";
import { researchCompany } from "../services/api";
import Loading from "../components/Loading";

function Home() {
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
        <div className="logo">InvestOnly</div>
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

          <div className="hero-note">
            AI-backed research that highlights the key opportunities and risks in one page.
          </div>

          <div className="examples">
            <span>Try:</span>
            <button type="button" onClick={() => handleResearch("Infosys")}>Infosys</button>
            <button type="button" onClick={() => handleResearch("Tata Motors")}>Tata Motors</button>
            <button type="button" onClick={() => handleResearch("Tesla")}>Tesla</button>
          </div>
        </div>

        <aside className="preview-panel">
          {!loading && !error && !report && (
            <div>
              <div className="preview-header">
                <div>
                  <p className="muted">Sample decision</p>
                  <h3>Tata Motors</h3>
                </div>
                <span className="status">Watchlist</span>
              </div>

              <div className="preview-badge-row">
                <span>AI Confidence</span>
                <strong>74 / 100</strong>
              </div>

              <div className="progress">
                <div />
              </div>

              <div className="insight-list">
                <p>Strong EV and SUV growth momentum</p>
                <p>Debt reduction improving financial health</p>
                <p>Valuation and cyclicality remain key risks</p>
              </div>
            </div>
          )}

          {loading && <Loading />}

          {error && <div className="error-card">{error}</div>}

          {!loading && report && <ReportCard report={report} />}
        </aside>
      </section>
    </main>
  );
}

export default Home;
