import { useState } from "react";

function SearchBox({ onSearch, loading }) {
  const [company, setCompany] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = company.trim();
    if (!trimmed) return;

    onSearch(trimmed);
    setCompany("");
  };

  return (
    <form className="search-box" onSubmit={handleSubmit}>
      <label htmlFor="company-search" className="sr-only">
        Company name
      </label>
      <input
        id="company-search"
        type="text"
        placeholder="Infosys, Tesla, Reliance..."
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />

      <button type="submit" disabled={loading}>
        {loading ? "Analyzing..." : "Analyze"}
      </button>
    </form>
  );
}

export default SearchBox;
