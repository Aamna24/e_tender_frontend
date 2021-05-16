import React from "react";

const AutoInput = ({ name, label, value, error, ...rest }) => {
  return (
    <div className="form-group">
      <div className="row">
        <div className="col">
          <input
            {...rest}
            name={name}
            id={name}
            value={value}
            className="form-control"
          />
        </div>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default AutoInput;
