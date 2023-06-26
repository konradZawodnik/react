import axios from "axios";
const KEY = "AIzaSyABtp6qnuUV6G4S9gkkTDmNfn9Y1rOW9kU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 15,
    key: KEY,
  },
});
