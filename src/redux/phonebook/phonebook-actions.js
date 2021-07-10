import shortid from "shortid";
import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("contacts/add", ({ name, number }) => ({
  payload: {
    id: shortid.generate(),
    name: name,
    number: number,
  },
}));

const deleteContact = createAction("contacts/delete");
const filterByName = createAction("contacts/filterByName");

export default { addContact, deleteContact, filterByName };
