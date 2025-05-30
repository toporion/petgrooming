import axios from 'axios';

const UseAxios = () => { 
    const axiosPublic=axios.create({
        baseURL:'https://petgrooming-kxs9.vercel.app/api', // Replace with your API base URL
    }) 
    return axiosPublic;
};

export default UseAxios;