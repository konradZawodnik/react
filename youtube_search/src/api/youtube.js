import axios from 'axios';
const KEY = 'AIzaSyCZvXl680ep5K2FPdGdqbRVVfM-mbCQXLI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 15,
        key: KEY
    }
})