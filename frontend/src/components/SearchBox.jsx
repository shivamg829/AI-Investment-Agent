import { useState } from "react";

function SearchBox({ onSearch, loading }) {
  const [company, setCompany] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!company.trim()) {
      alert("Please enter a company name");
      return;
    }

    onSearch(company);
  };

  return (
    <form className="search-box" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter company name, e.g. Infosys, Tesla, Reliance"
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