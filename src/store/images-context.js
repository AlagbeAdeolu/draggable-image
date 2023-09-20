import { createContext } from "react"
import { useEffect, useState } from "react"

const initialState = {
    results: []
}

export const ImageContext = createContext(initialState)

const ImageContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    useEffect(() => {
        const apiKey = "39559354-a54d6d460a1baed9da791cf32";
        const query = "birds"; // Replace with your desired search query
        const perPage = 20; // Number of results per page
    
        // Create the API URL
        const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=${query}&per_page=${perPage}`;
        fetch(apiUrl)
          .then((res) => res.json())
          .then((data) => setResults(data.hits));
      }, []);
      const contextValue = {
        results: results
      }
    return (
        <ImageContext.Provider value={contextValue}>
            {children}
        </ImageContext.Provider>)
}

export default ImageContextProvider