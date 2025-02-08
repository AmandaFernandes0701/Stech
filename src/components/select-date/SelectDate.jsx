import PropTypes from "prop-types";

import { SelectContainer } from "./styles";

const SelectDate = ({ defaultValue, options, onChange }) => (
  <SelectContainer defaultValue={defaultValue} onChange={onChange}>
    {options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </SelectContainer>
);

SelectDate.propTypes = {
  defaultValue: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  onChange: PropTypes.func,
};

export default SelectDate;
