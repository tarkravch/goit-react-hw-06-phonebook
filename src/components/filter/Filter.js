import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import contactActions from "../../redux/phonebook/phonebook-actions";

const Filter = ({ value, onChange }) => (
  <div>
    <label>
      <input type="text" value={value} onChange={onChange} />
    </label>
  </div>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => {
    dispatch(contactActions.filterByName(e.target.value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
