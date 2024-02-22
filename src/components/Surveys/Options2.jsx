import React from "react";
import { useState } from "react";

const Options2 = () => {
  const [answer, setAnswer] = useState(0); // State to store the selected answer

  // Function to handle the change event of the checkboxes
  const handleCheckboxChange = (value) => {
    setAnswer(value);
  };
  return (
    <>
      <div className="flex flex-col m-3">
        {["1  (LOW)","2","3","4","5 (HIGH)"].map((value) => (
          <label key={value} className="inline-flex items-center">
            <input required
              type="checkbox"
              className="form-checkbox h-6 w-6 text-blue-500"
              checked={value === answer}
              onChange={() => handleCheckboxChange(value)}
            />
            <span className="ml-2 text-lg">{value}</span>
          </label>
        ))}
      </div>
    </>
  );
};

export default Options2;