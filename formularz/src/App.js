import React, { useState } from 'react';
import './App.css';

const form = () => {
    const [data, handleData] = useState({
        city: "Londyn",
        text: "",
        isLoved: true,
        number: "0"
    })
    const handleChange = e => {
        if (e.target.type === "checkbox") {
            handleData({ [e.target.name]: e.target.checked });
        } else {
            handleData({ [e.target.name]: e.target.value });
        }
    }
    return (
        <>
            <form>
                <label>
                    Podaj imię:
                    <input
                        type="text"
                        name="name"
                    />
                </label>
                <br />
                <label>
                    Podaj email:
                   <input
                        type="email"
                        name="email"
                    />
                </label>
                <br />
                <label>
                    Podaj miasto
                    <input
                        name="city"
                        value={data.city}
                        onChange={(e => handleChange(e))}
                        type="text"
                    />
                </label>
                <br />
                <label>Napisz coś o tym mieście
                    <textarea
                        name="text"
                        value={data.text}
                        onChange={(e => handleChange(e))}
                    />
                </label>
                <br />
                <label>
                    Czy lubisz to miasto?
                    <input
                        name="isLoved"
                        type="checkbox"
                        checked={data.isLoved}
                        onChange={(e => handleChange(e))}
                    />
                </label>
                <label>
                    Ile razy byliście w tym mieście?
                       <select
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
                <button>
                    Zapisz się
                </button>
            </form>
        </>
    )
}

export default form;
