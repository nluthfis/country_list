import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { storeCountries } from "../store/reducers/countriesSlice";

function CountryFethcer({ setCountry }) {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}all`
        );
        setCountry(response?.data);
        dispatch(storeCountries(response?.data));
      } catch (error) {
        console.log(error.response);
        console.error("Failed to fetch recipes:", error);
      }
    };

    fetchCountry();
  }, [setCountry, dispatch]);

  return null;
}

export default CountryFethcer;
