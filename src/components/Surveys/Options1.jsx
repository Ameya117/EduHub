import React from "react";
import { useState } from "react";

const Options1 = ({onChange}) => {
  const [answer, setAnswer] = useState(""); // State to store the selected answer

  // Function to handle the change event of the checkboxes
  const handleCheckboxChange = (value) => {
    setAnswer(value);
    onChange(value);
  };
  return (
    <>
      <div className="flex flex-col m-3">
        {["Very Often", "Often", "Rare", "Very Rare", "Never"].map((value) => (
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

export default Options1;