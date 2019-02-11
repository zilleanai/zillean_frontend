// source: https://medium.com/@wlodarczyk_j/handling-multiple-checkboxes-in-react-js-337863fd284e
import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ type = 'checkbox', name, checked = false, onChange }) => (
  <input type={type} name={name} checked={checked} onChange={onChange} />
);

Checkbox.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
}

export default Checkbox;