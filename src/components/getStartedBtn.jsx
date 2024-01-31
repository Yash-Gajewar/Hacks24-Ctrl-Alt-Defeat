import React from "react";

export default function getStartedBtn(props) {
  return (
    <div className="input-block w-full">
      <label htmlFor="name" className="input-label">
        {props.title}
      </label>
      <input
        type="name"
        autoComplete="off"
        name="name"
        id="name"
        placeholder="Enter your answer"
        // value={values.name}
        // onChange={handleChange}
        // onBlur={handleBlur}
      />
    </div>
  );
}
