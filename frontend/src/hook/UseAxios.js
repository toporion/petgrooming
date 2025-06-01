import axios from 'axios';

const UseAxios = () => { 
    const axiosPublic=axios.create({
        baseURL:'http://localhost:8080/api', // Replace with your API base URL
    }) 
    return axiosPublic;
};

export default UseAxios;