import React from "react";
import { Link } from "react-router-dom";

function CountryList({ filteredCountries, startIndex, endIndex }) {
  return (
    <>
      {filteredCountries?.slice(startIndex, endIndex).map((item, index) => {
        const displayedIndex = startIndex + index + 1;
        return (
          <div key={index} className="d-flex  ms-5">
            <p>{displayedIndex}. &nbsp; </p>
            <Link
              className="text-decoration-none text-dark fw-bold"
              to={`/Details/${item.name.common}`}
              state={{ data: item }}
            >
              <p>{item.name.common}</p>
            </Link>
          </div>
        );
      })}
    </>
  );
}

export default CountryList;
