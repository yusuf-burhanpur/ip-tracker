import axios from "axios";

export default axios.create({
    baseURL: `https://ip-geolocation.whoisxmlapi.com/api/v1?apiKey=${process.env.API_KEY}&`,
   
});
