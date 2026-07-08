function Loading() {
  return (
    <div className="loading-card">
      <div className="spinner-shell">
        <div className="spinner" />
      </div>

      <div className="loading-copy">
        <h3>Analyzing company data</h3>
        <p>Gathering company information, scanning risk signals, and preparing your report.</p>
      </div>

      <div className="loading-bar" aria-hidden="true">
        <div className="loading-bar-fill" />
      </div>
    </div>
  );
}

export default Loading;