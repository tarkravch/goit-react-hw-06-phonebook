import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import initialContacts from "../../components/contactArr.json";
import actions from "./phonebook-actions";

const items = createReducer(initialContacts, {
  [actions.addContact]: (state, action) => [...state, action.payload],
  [actions.deleteContact]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});

const filter = createReducer("", {
  [actions.filterByName]: (state, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
});
