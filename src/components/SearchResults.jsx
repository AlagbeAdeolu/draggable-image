import React from "react";
import { Link, useLocation } from "react-router-dom";

const SearchResults = () => {
  const location = useLocation();
  const { results } = location.state;
  return (
    <div className="container mx-auto p-8">
      <div className="flex items-center justify-between mb-6">
        SEARCH RESULT
        <Link className="bg-red-200 p-2 rounded-lg" to={'/'}>Home</Link>
        
        </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 ">
        {results.map((item) => {
          return (
            <div key={item.id} className="h-[500px] border">
              <div className="h-[400px] w-full border rounded-md">
                <img
                  className="h-full w-full object-cover rounded-md"
                  src={item.largeImageURL}
                  alt={item.tags}
                />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-bold mb-4">{item.user}</p>
              </div>
              <div>
                <div className="font-semibold flex gap-2">
                  {item.tags.split(",").map((item, index) => (
                    <p
                      key={index}
                      className="text-sm font-bold border border-gray-900 rounded-lg px-2 py-1"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchResults;
