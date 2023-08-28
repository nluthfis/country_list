import React from "react";
import { Link } from "react-router-dom";

function CountryList({ filteredCountries, startIndex, endIndex }) {
  return (
    <>
      <table className="table">
        <colgroup>
          <col style={{ width: "5%" }} />
          <col style={{ width: "50%" }} />
          <col style={{ width: "25%" }} />
          <col style={{ width: "25%" }} />
        </colgroup>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Countries</th>
            <th scope="col">Population</th>
            <th scope="col">Region</th>
          </tr>
        </thead>
        <tbody>
          {filteredCountries?.slice(startIndex, endIndex).map((item, index) => {
            const displayedIndex = startIndex + index + 1;
            return (
              <tr key={index}>
                <td>{displayedIndex}. &nbsp;</td>
                <td>
                  <Link
                    className="text-decoration-none text-dark fw-bold"
                    to={`/Details/${item.name.common}`}
                    state={{ data: item }}
                  >
                    {item.name.common}
                  </Link>
                </td>
                <td>{item.population}</td>
                <td>{item.region}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default CountryList;
