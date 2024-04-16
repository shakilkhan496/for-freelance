import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = event => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://backend-jokair.vercel.app/api/stuff?searchTerm=${searchTerm}`);
        setSearchResults(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [searchTerm]);

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleInputChange} />
      <ul>
        {searchResults.map(result => (
          <li key={result._id}>
            {result.title} - {result.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
