import axios from 'axios';

//https://collaborative-task-management-server-gold.vercel.app/
//http://localhost:5000/
const instance = axios.create({
    baseURL: 'http://localhost:5000/'
});

function useAxios() {
    return instance;
}

export default useAxios;