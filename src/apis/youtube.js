import axios from 'axios';


//const KEY='AIzaSyDFKDtoRtFkrIDBJwOPK7jyBwBuBW3nDAM';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults: 5,
        key:'AIzaSyDFKDtoRtFkrIDBJwOPK7jyBwBuBW3nDAM'
    }
});