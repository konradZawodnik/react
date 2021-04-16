import React, { useCallback, useState } from 'react';

import './SearchBar.scss';

type SearchBarProps = {
    handleFormSubmit: (term?: string) => void,
    term?: string,
}

const SearchBar = ({ handleFormSubmit }: SearchBarProps) => {
    const [term, setTerm] = useState('');

    const handleChange = useCallback((event) => {
        setTerm(event.target.value);
    }, []);

    const handleSubmit = useCallback(event => {
        event.preventDefault();
        handleFormSubmit(term);
    }, [handleFormSubmit, term]);

    return (
        <div className='searchBarContainer'>
            <form className='form' onSubmit={handleSubmit} >
                <div className='inputField'>
                    <label className="label" htmlFor="video-search">Video Search</label>
                    <div className="submitContainer">
                        <input
                            className='input'
                            name='video-search'
                            onChange={handleChange}
                            placeholder="Search"
                            type="text"
                            value={term}
                        />
                        <button className="button" type="submit"><i className="fa fa-search"/></button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SearchBar;