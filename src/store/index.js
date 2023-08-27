import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
// import { counterSlice } from "./reducers/counterSlice";
import countriesSlice from "../store/reducers/countriesSlice";

import { persistStore, persistReducer } from "redux-persist";
// import { encryptTransform } from "redux-persist-transform-encrypt";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  // transforms: [
  //   encryptTransform({
  //     secretKey: process.env.NEXT_PUBLIC_SECRET_KEY,
  //     onError: function (error) {
  //       console.log(error);
  //     },
  //   }),
  // ],
};

const rootReducer = combineReducers({
  countries: countriesSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
