import React from 'react'
import PropTypes from 'prop-types';
import './select.css';

export const Select = ({options = [], primary, size = 'medium'}) => {
  let styles = 'select';
  styles = primary ? styles.concat(' primary') : styles.concat(' secondary');
  styles = styles.concat(` ${size}`);
  console.log(styles);
  return (
    <>
    <label for="select">Click me</label>

    <select id="select" className={styles}>
      { options.map((opt, i) => (
        <option key={i} value={opt}>{opt}</option>
      ))}
    </select>
    </>
  )

}

Select.propTypes = {
  options: PropTypes.array,
  primary: PropTypes.bool,
  size: PropTypes.string
}