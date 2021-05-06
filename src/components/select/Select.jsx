import React from 'react'
import PropTypes from 'prop-types';
import './select.css';

export const Select = ({options}) => {

  return (
    <select className="select">
      { options.map((opt, i) => (
        <option key={i} value={opt}>{opt}</option>
      ))}
    </select>
  )

}

Select.propTypes = {
  options: PropTypes.array
}