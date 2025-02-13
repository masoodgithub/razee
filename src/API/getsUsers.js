import axios from 'axios';

export const getUser= async() => {
    const res = await axios
    .get('http://localhost:8000/api/users');
    return res.data;
}
export const postUser= async(user) => {
    const res = await axios
    .post('http://localhost:8000/api/user', user);
    return res;
}
export const deleteUser= async(id) => {
    const res = await axios
    .delete('http://localhost:8000/api/delete/user/'+ id);
    return res;
}
export const updateUser= async(user) => {
    const res = await axios
    .update('http://localhost:8000/api/delete/user', user);
    return res;
}