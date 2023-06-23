import React from 'react';

import './Select.css';

type SelectProps = {
    data: {
        number?: string,
    },
    handleChange: (e: any) => void,
}

const Select = ({ data, handleChange }: SelectProps) => (
    <label>
        Ile razy byliście w tym mieście?
        <select
            className="Select"
            name="number"
            value={data.number}
            onChange={(e => handleChange(e))}
        >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="more">więcej</option>
        </select>
    </label>
);

export default Select;
