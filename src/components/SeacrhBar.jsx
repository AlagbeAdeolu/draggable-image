import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();


  const handleSearch = () => {
    const apiKey = process.env.REACT_APP_API_KEY_2
    console.log(process.env)
    const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=${searchQuery}`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Update the search results
        setResults(data.hits);
        
        // Navigate to the /search route with the results in state
        navigate("/search", { state: { results: data.hits } });
      })
      .catch((error) => {
        console.error("Error searching for images:", error);
      });
  };

  return (
    <div className="flex items-center justify-center w-full gap-2">
      <input
        type="text"
        className="bg-transparent border w-[20rem] border-gray-700 rounded-lg p-2"
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
        placeholder="Search by tags"
      />
      <button className="border border-gray-300 p-2 bg-red-600 rounded-lg" onClick={handleSearch}>Submit</button>
    </div>
  );
};

export default SearchBar;
