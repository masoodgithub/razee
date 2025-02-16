import axios from 'axios';

export const ActivitySubmit= async(acct) => {
    const res = await axios
    .post('http://localhost:8000/api/ac/account', acct);
    return res;
}
export const getSalary= async() => {
    const res = await axios
    .get('http://localhost:8000/api/ac/getSalary');
    return res;
}
export const getDonation= async() => {
    const res = await axios
    .get('http://localhost:8000/api/ac/getDonation');
    return res;
}
export const getExpense= async() => {
    const res = await axios
    .get('http://localhost:8000/api/ac/getExpense');
    return res;
}
export const getAllActivitis= async() => {
    const res = await axios
    .get('http://localhost:8000/api/ac/getAllActivitis');
    return res;
}