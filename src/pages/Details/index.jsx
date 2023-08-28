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
          <div className="card text-center m-3">
            <div className="card-body">
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
                Region : {countriesData?.region ? countriesData?.region : "-"}
              </li>
              <li className="list-group-item">
                Population :&nbsp;
                {countriesData?.population ? countriesData?.population : "-"}
              </li>
              <li className="list-group-item d-flex justify-content-center">
                Capital : &nbsp;
                {countriesData &&
                countriesData.capital !== "" &&
                countriesData.capital !== null &&
                countriesData.capital !== undefined ? (
                  countriesData.capital.map((capital, key) => (
                    <div key={key}>
                      {capital ? <p>{capital}&nbsp;</p> : <p>-</p>}
                    </div>
                  ))
                ) : (
                  <p>-</p>
                )}
              </li>
              <li className="list-group-item d-flex justify-content-center">
                Borders : &nbsp;
                {countriesData &&
                countriesData.borders !== "" &&
                countriesData.borders !== null &&
                countriesData.borders !== undefined ? (
                  countriesData.borders.map((borders, key) => (
                    <div key={key}>
                      {borders ? <p>{borders}&nbsp;</p> : <p>-</p>}
                    </div>
                  ))
                ) : (
                  <p>-</p>
                )}
              </li>

              <li className="list-group-item d-flex justify-content-center">
                Currencies : &nbsp;
                {countriesData &&
                countriesData.currencies &&
                Object.keys(countriesData.currencies).length > 0 ? (
                  Object.keys(countriesData.currencies).map((currencyCode) => (
                    <div key={currencyCode}>
                      {countriesData.currencies[currencyCode].name}&nbsp;(
                      {currencyCode})&nbsp;
                    </div>
                  ))
                ) : (
                  <p>-</p>
                )}
              </li>
              <li className="list-group-item d-flex justify-content-center">
                Languages : &nbsp;
                {countriesData &&
                countriesData.languages &&
                Object.keys(countriesData.languages).length > 0 ? (
                  Object.keys(countriesData.languages).map((langCode) => (
                    <div key={langCode}>
                      {countriesData.languages[langCode]}&nbsp;(
                      {langCode.toUpperCase()})&nbsp;
                    </div>
                  ))
                ) : (
                  <p>-</p>
                )}
              </li>

              <Maps data={countriesData?.latlng} />

              <li className="list-group-item">
                Time Zone : {countriesData?.timezones[0]}
              </li>
            </ul>
            <div className="card-body">
              <a href={countriesData?.maps.googleMaps} className="card-link">
                GoogleMaps Link
              </a>
              <a
                href={countriesData?.maps.openStreetMaps}
                className="card-link"
              >
                OpenStreetMaps Link
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
