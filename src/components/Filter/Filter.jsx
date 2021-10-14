import PropTypes from 'prop-types';

export default function Filter({ value, onChange }) {
  return (
    <label>
      Find contacts by name
      <input type="text" name="filter" value={value} onChange={onChange}  />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};