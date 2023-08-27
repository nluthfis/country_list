import React from "react";
import { useLocation } from "react-router";
import Maps from "../../components/Details/maps";

function Index() {
  const location = useLocation();
  const countriesData = location.state.data;
  const countryFlag = countriesData.flags.png;
  console.log(countriesData);
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="card text-center">
            <div className="card-body ">
              <div className="card-title text-center fs-1 fw-bold m-2">
                {countriesData?.name.common}
              </div>
            </div>
            <div className="card-img-top d-flex justify-content-center">
              <img className="img-fluid m-3" src={countryFlag} alt="flags" />
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                Official Name : {countriesData?.name.official}
              </li>
              <li className="list-group-item">
                Region : {countriesData?.region}
              </li>
              <li className="list-group-item">
                Population : {countriesData?.population}
              </li>
              <li className="list-group-item d-flex justify-content-center">
                Capital : &nbsp;
                {countriesData?.capital.map((item, key) => (
                  <div key={key}>
                    <p> {item} </p>
                  </div>
                ))}
              </li>
              <li className="list-group-item d-flex justify-content-center">
                Currencies : &nbsp;
                {Object.keys(countriesData.currencies).map((currencyCode) => (
                  <div key={currencyCode}>
                    {countriesData.currencies[currencyCode].name}&nbsp;(
                    {currencyCode})
                  </div>
                ))}
              </li>
              <li className="list-group-item d-flex justify-content-center">
                Languages :
                {Object.keys(countriesData.languages).map((langCode) => (
                  <div key={langCode}>
                    &nbsp;{countriesData.languages[langCode]} &nbsp;(
                    {langCode.toUpperCase()})
                  </div>
                ))}
              </li>

              <Maps data={countriesData?.latlng} />

              <li className="list-group-item">
                Time Zone : {countriesData?.timezones[0]}
              </li>
            </ul>
            <div className="card-body">
              <a href="#" className="card-link">
                Card link
              </a>
              <a href="#" className="card-link">
                Another link
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
