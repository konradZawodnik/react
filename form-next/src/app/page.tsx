"use client"; // This is a client component
import React, { useState } from 'react';

import City from './components/City/City';
import DescriptionOfCity from './components/DescriptionOfCity/DescriptionOfCity';
import Email from './components/Email/Email';
import IsLovedComponent from './components/IsLovedComponent/IsLovedComponent';
import Name from './components/Name/Name';
import Select from './components/Select/Select';

import styles from './page.module.css'

interface DataInterface {
    [key: string]: string|boolean,
}

const Form = () => {
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
            <form className={styles.App}>
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
                <button className={styles.Button}>
                    Zapisz się
                </button>
            </form>
        </>
    )
}

export default Form;
