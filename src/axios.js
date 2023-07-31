import axios from "axios";

export const makeRequest = axios.create({
    // baseURL:"http://192.168.1.101:8800/api/",
    baseURL:"https://pupcb-api2-73ce947d432d.herokuapp.com/api/",
    withCredentials: true,
    
});