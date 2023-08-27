import React from "react";
import { Link } from "react-router-dom";

function CountryFlags({ filteredCountries, startIndex, endIndex }) {
  return (
    <div className="row d-flex justify-content-center">
      {filteredCountries?.slice(startIndex, endIndex).map((item, index) => (
        <div key={index} className="col-2  m-2">
          <Link
            className="text-decoration-none text-dark fw-bold"
            to={`/Details/${item.name.common}`}
            state={{ data: item }}
          >
            <img
              className="img-fluid m-3"
              src={item.flags.png}
              alt="flags"
              style={{ height: "15vh" }}
            />
            <p className="text-center">{item.name.common}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default CountryFlags;
