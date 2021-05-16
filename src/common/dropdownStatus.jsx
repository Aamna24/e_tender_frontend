import React from "react";

const Dropdown = ({ name, label, error, value1, value2, ...rest }) => {
  return (
    <div className="form-group">
      <div className="row">
        <div className="col">
          <select {...rest} name={name} id={name} className="form-control">
            <option>{value1}</option>
            <option>{value2}</option>
          </select>
        </div>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Dropdown;
