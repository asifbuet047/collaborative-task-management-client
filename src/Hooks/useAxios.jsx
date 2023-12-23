import axios from 'axios';

//https://collaborative-task-management-server-gold.vercel.app/
//http://localhost:5000/
const instance = axios.create({
    baseURL: 'https://collaborative-task-management-server-gold.vercel.app/'
});

function useAxios() {
    return instance;
}

export default useAxios;