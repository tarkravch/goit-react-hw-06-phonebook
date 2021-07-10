import React from "react";
import { connect } from "react-redux";
import contactActions from "../../redux/phonebook/phonebook-actions";
import styles from "../contact-list/ContactList.module.css";
import PropTypes from "prop-types";

const ContactList = ({ contacts, onDeleteContact }) => (
  <div>
    <ul className={styles.list}>
      {contacts.map((itemName) => (
        <li key={itemName.id} className={styles.list__item}>
          {itemName.name}: {itemName.number}
          <button
            onClick={() => onDeleteContact(itemName.id)}
            className={styles.list__btn}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  </div>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => {
  return {
    contacts: getVisibleContacts(items, filter),
  };
};

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (id) => dispatch(contactActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
