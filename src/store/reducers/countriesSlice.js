import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countries: "",
};

export const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    storeCountries: (state, action) => {
      state.countries = action.payload;
    },
    reset: () => initialState,
  },
});

export const { storeCountries } = countriesSlice.actions;
export default countriesSlice.reducer;
