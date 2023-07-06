import React from "react";

import "./DescriptionOfCity.css";

type DescriptionOfCityProps = {
  handleChange: (e: any) => void;
  data: {
    text?: string;
  };
};

const DescriptionOfCity = ({ handleChange, data }: DescriptionOfCityProps) => (
  <label>
    Napisz coś o tym mieście
    <textarea
      className="TextArea"
      name="text"
      value={data.text}
      onChange={(e) => handleChange(e)}
    />
  </label>
);

export default DescriptionOfCity;
