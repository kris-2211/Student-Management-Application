import axios from 'axios';
const BASE_URL='http://localhost:3000/student';

export const getAllStudents=()=>axios.get(BASE_URL)

export const getStudent=(id)=>{return axios.get(BASE_URL+'-get/'+id)}

export const deleteStudent=(id)=> {return axios.delete(BASE_URL+'/'+id)}

export const updateStudent=(id,student)=> {
    return axios.put(BASE_URL+'/'+id,student)} 

export const postStudent=(student)=>{return axios.post(BASE_URL,student)}


