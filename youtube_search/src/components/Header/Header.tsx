import { useEffect, useState } from 'react';

import SearchBar from '../SearchBar/Searchbar';

import './Header.scss';

type HeaderProps = {
    handleFormSubmit: (termFromSearchBar?: string) => void,
}

const useMedia = (query: string) => {
    const [matches, setMatches] = useState<boolean>(false);
    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = () => {
            setMatches(media.matches);
        };
        media.addListener(listener);
        return () => media.removeListener(listener);
    }, [matches, query]);

    return matches;
}

const Header = ({ handleFormSubmit }: HeaderProps) => {
    const large = useMedia("(min-width: 768px)");
    return (
        <header className='header'>
            <div className="youtubeIcon">
                <div className="youtubeIconContainer"><i className="fa fa-youtube-play red-color" aria-hidden="true" /></div>
                {large &&
                    <div className="logo">
                        <span className="you">YouTube</span>
                    </div>}
            </div>
            <SearchBar
                handleFormSubmit={handleFormSubmit}
            />
        </header>
    );
}

export default Header;
