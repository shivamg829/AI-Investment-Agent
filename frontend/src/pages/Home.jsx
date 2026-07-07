import { useState } from "react";
import SearchBox from "../components/SearchBox";
import ReportCard from "../components/ReportCard";
import { researchCompany } from "../services/api";

function Home() {
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleResearch = async (company) => {
    try {
      setLoading(true);
      setReport(null);

      const response = await researchCompany(company);
      setReport(response.data);
    } catch (error) {
      alert("Unable to research company. Please try again.");
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
            invest/pass decision.
          </p>

          <SearchBox onSearch={handleResearch} loading={loading} />

          <div className="examples">
            <span>Try:</span>
            <button onClick={() => handleResearch("Infosys")}>Infosys</button>
            <button onClick={() => handleResearch("Tata Motors")}>
              Tata Motors
            </button>
            <button onClick={() => handleResearch("Tesla")}>Tesla</button>
          </div>
        </div>

        {!report && (
          <aside className="preview-card">
            <div className="preview-header">
              <div>
                <p className="muted">Sample decision</p>
                <h3>Tata Motors</h3>
              </div>
              <span className="status">Watchlist</span>
            </div>

            <div className="score-row">
              <span>Confidence</span>
              <strong>74/100</strong>
            </div>

            <div className="progress">
              <div></div>
            </div>

            <div className="insight-list">
              <p>Strong EV and SUV growth momentum</p>
              <p>Debt reduction improving financial health</p>
              <p>Valuation and cyclicality remain key risks</p>
            </div>
          </aside>
        )}

        {report && <ReportCard report={report} />}
      </section>
    </main>
  );
}

export default Home;