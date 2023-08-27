import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { storeCountries } from "../store/reducers/countriesSlice";

function RegionFether({ setRegion }) {
  //   const dispatch = useDispatch();
  useEffect(() => {
    const fetchRegion = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}region/oceania`
        );
        console.log(response?.data);
        setRegion(response?.data);
        // dispatch(storeCountries(response?.data));
      } catch (error) {
        console.log(error.response);
        console.error("Failed to fetch recipes:", error);
      }
    };

    fetchRegion();
  }, [setRegion]);

  return null;
}

export default RegionFether;
