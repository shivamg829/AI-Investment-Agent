import SearchBox from "../components/SearchBox";

function Home() {
  return (
    <main className="page">
      <nav className="navbar">
        <div className="logo">InvestIQ</div>
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

          <SearchBox />

          <div className="examples">
            <span>Try:</span>
            <button>Infosys</button>
            <button>Tata Motors</button>
            <button>Tesla</button>
          </div>
        </div>

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
      </section>
    </main>
  );
}

export default Home;