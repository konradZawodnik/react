import { ReactNode } from "react";

import "./Input.css";

type InputProps = {
  amount: string;
  handleChange: (e: any) => void;
  insertSuffix: (e: any) => ReactNode;
  product: string;
};

const Input = ({ amount, handleChange, insertSuffix, product }: InputProps) => (
  <label>
    <input
      className="Input"
      type="number"
      value={amount}
      onChange={handleChange}
    />
    {insertSuffix(product)}
  </label>
);

export default Input;
