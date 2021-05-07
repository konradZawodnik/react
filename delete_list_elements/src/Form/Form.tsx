import React from 'react';

type FormProps = {
    addItem: (e: any) => void,
    setValue: (e: any) => void,
    value?: string
}

const Form = ({ addItem, setValue, value }: FormProps) => (
    <form onSubmit={addItem}>
        <input onChange={e => setValue(e.target.value)} placeholder="Dodaj członka" type="text" value={value}>
        </input>
        <button className="Button" type="submit">Dodaj</button>
    </form>
)

export default Form;