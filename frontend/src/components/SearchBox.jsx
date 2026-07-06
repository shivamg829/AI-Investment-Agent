import { useState } from "react";

function SearchBox() {
  const [company, setCompany] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!company.trim()) {
      alert("Please enter a company name");
      return;
    }

    console.log("Company searched:", company);
  };

  return (
    <form className="search-box" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter company name, e.g. Infosys, Tesla, Reliance"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />

      <button type="submit">Analyze</button>
    </form>
  );
}

export default SearchBox;