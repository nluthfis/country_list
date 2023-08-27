import React, { useState } from "react";
import CountryFetcher from "../../Api/CountryFethcer";
import { useSelector } from "react-redux";
import CountryList from "../../components/Home/CountryList";
import CountryFlags from "../../components/Home/CountryFlags";
import RegionFether from "../../Api/RegionFethcer";

function Index() {
  const [country, setCountry] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const [showFlags, setShowFlags] = useState(false);
  const [region, setRegion] = useState([]);

  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  const countries = useSelector((state) => state?.countries);
  console.log(countries);
  let sortedCountry = [];
  if (countries && countries.countries) {
    sortedCountry = [...countries.countries].sort((a, b) => {
      if (a.name.common < b.name.common) {
        return -1;
      }
      if (a.name.common > b.name.common) {
        return 1;
      }
      return 0;
    });
  }

  const filteredCountries = sortedCountry.filter((item) =>
    item.name.common.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = filteredCountries
    ? Math.ceil(filteredCountries.length / itemsPerPage)
    : 0;

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = filteredCountries
    ? Math.min(startIndex + itemsPerPage, filteredCountries.length)
    : 0;

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const toggleView = () => {
    setShowFlags(!showFlags);
  };

  return (
    <div className="container">
      <CountryFetcher setCountry={setCountry} />
      <RegionFether setRegion={setRegion} />
      <div className="row">
        <div className="col">
          <h1 className="fw-bold mt-5">List of Countries </h1>
          <p> This is all ordered list of the countries of the world.</p>
          <button className="btn btn-dark mb-3" onClick={toggleView}>
            View by Flags
          </button>
          <div className="d-flex justify-content-center">
            <input
              className="form-control text-center w-50 border border-dark mb-5"
              type="text"
              value={searchQuery}
              onChange={handleSearchQueryChange}
              placeholder="Search by country name"
            />
          </div>

          {showFlags ? (
            <CountryFlags
              filteredCountries={filteredCountries}
              startIndex={startIndex}
              endIndex={endIndex}
            />
          ) : (
            <CountryList
              filteredCountries={filteredCountries}
              startIndex={startIndex}
              endIndex={endIndex}
            />
          )}
        </div>
      </div>
      <div>
        {currentPage > 1 && (
          <div className="btn" onClick={handlePrevPage}>
            Prev
          </div>
        )}
        {currentPage > 2 && (
          <div className="btn" onClick={() => setCurrentPage(currentPage - 1)}>
            {currentPage - 1}
          </div>
        )}
        <div
          className="btn"
          onClick={() => setCurrentPage(currentPage)}
          disabled
        >
          {currentPage}
        </div>
        {currentPage < totalPages && (
          <div className="btn" onClick={() => setCurrentPage(currentPage + 1)}>
            {currentPage + 1}
          </div>
        )}
        {currentPage < totalPages && (
          <div className="btn" onClick={() => setCurrentPage(currentPage + 2)}>
            {currentPage + 2}
          </div>
        )}
        {currentPage < totalPages && (
          <div className="btn" onClick={handleNextPage}>
            Next
          </div>
        )}
      </div>
    </div>
  );
}

export default Index;
