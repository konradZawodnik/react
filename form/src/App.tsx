import React, { useState } from 'react';

import City from './City/City';
import DescriptionOfCity from './DescriptionOfCity/DescriptionOfCity';
import Email from './Email/Email';
import IsLovedComponent from './IsLovedComponent/IsLovedComponent';
import Name from './Name/Name';
import Select from './Select/Select';

import './App.css';

interface DataInterface {
    [key: string]: string|boolean,
}

const form = () => {
    const [data, handleData] = useState<DataInterface>({
        city: "",
        text: "",
        isLoved: false,
        name: "",
        number: "0"
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        if (e.target.type === "checkbox") {
            handleData({ [e.target.name]: e.target.checked });
        } else {
            handleData({ [e.target.name]: e.target.value });
        }
    }

    return (
        <>
            <form className="App">
                <Name />
                <br />
                <Email />
                <br />
                <City handleChange={handleChange} data={data} />
                <br />
                <DescriptionOfCity handleChange={handleChange} data={data} />
                <br />
                <IsLovedComponent handleChange={handleChange} data={data} />
                <br />
                <Select handleChange={handleChange} data={data} />
                <br />
                <button className="Button">
                    Zapisz się
                </button>
            </form>
        </>
    )
}

export default form;
