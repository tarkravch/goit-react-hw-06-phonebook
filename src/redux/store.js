import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./phonebook/phonebook-reducer";

const middleware = [logger];

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

export default store;
