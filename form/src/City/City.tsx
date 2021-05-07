import React from 'react';

import './City.css';

type CityProps = {
    data: {
        city?: string,
    },
    handleChange: (e: any) => void,
}

const City = ({ data, handleChange }: CityProps) => (
    <label>
        Podaj miasto
        <input
            className="Input"
            name="city"
            value={data.city}
            onChange={(e => handleChange(e))}
            type="text"
        />
    </label>
)

export default City;
