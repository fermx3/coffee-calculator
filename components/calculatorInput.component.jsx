import { Fragment } from "react";

const CalculatorInput = ({
  label,
  name,
  value,
  onChange,
  lockedGroup,
  selector,
  defaultChecked,
  selectorOnChange,
  readOnly,
}) => {
  return (
    <Fragment>
      {label && <label>{label}</label>}
      <input
        name={name}
        type="number"
        min="1"
        value={value}
        onChange={onChange}
        readOnly={readOnly}
      />
      {selector && (
        <input
          type="radio"
          name={lockedGroup}
          value={selector}
          checked={defaultChecked}
          onChange={selectorOnChange}
        />
      )}
    </Fragment>
  );
};

export default CalculatorInput;
