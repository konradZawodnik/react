import { SyntheticEvent } from "react";

type FormProps = {
  addItem: (e: SyntheticEvent) => void;
  setValue: (e: string) => void;
  value?: string;
};

const Form = ({ addItem, setValue, value }: FormProps): JSX.Element => (
  <form onSubmit={addItem} data-testid="deleteListElementsForm">
    <input
      onChange={(e) => setValue(e.target.value)}
      placeholder="Dodaj członka"
      type="text"
      value={value}
    ></input>
    <button aria-label="Dodaj" className="Button" type="submit">
      Dodaj
    </button>
  </form>
);

export default Form;
