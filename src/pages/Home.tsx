import "./css/HomePage.css";
import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const runSearch = (e: React.FormEvent) => {
    e.preventDefault(); // stop page reload
    if (query.trim()) {
      navigate("/search/" + query);
    }
  };

  return (
    <>
      <div className="header">
        <h1 className="home-title">Home</h1>
      </div>
      <div>
        <a href="/settings">Settings</a>
      </div>
      <div className="search-container">
        <form onSubmit={runSearch} id="search-form">
          <table className="search-table">
            <thead>
              <tr>
                <th colSpan={2}>Search</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    placeholder="Search"
                    id="search-input"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </td>
                <td>
                  <button type="submit">Search</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
      <div className="search-results">
        <Outlet />
      </div>
    </>
  );
}