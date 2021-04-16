import React from 'react';

import SearchBar from '../SearchBar/Searchbar';

import './Header.scss';

type HeaderProps = {
    handleFormSubmit: (termFromSearchBar: any) => void,
}

const Header = ({ handleFormSubmit }: HeaderProps) => (
    <header className='header'>
        <SearchBar handleFormSubmit={handleFormSubmit} />
    </header>
);

export default Header;
