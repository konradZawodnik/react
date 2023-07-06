import React from "react";

type IsLovedComponentProps = {
  data: {
    isLoved?: boolean;
  };
  handleChange: (e: any) => void;
};

const IsLovedComponent = ({ data, handleChange }: IsLovedComponentProps) => (
  <label className="IsLovedComponentLabel">
    Czy lubisz to miasto?
    <input
      className="Input"
      name="isLoved"
      type="checkbox"
      checked={data.isLoved}
      onChange={(e) => handleChange(e)}
    />
  </label>
);

export default IsLovedComponent;
