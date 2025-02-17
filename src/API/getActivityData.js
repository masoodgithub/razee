import axios from 'axios';

export const activitySubmit= async(acct) => {
    const res = await axios.post('http://localhost:8000/api/ac/account', acct);
    return res.data;
}
export const getSalary= async() => {
    const res = await axios.get('http://localhost:8000/api/ac/getTotalSalary');
    return res.data;
}
export const getDonation= async() => {
    const res = await axios.get('http://localhost:8000/api/ac/getTotalDonation');
    return res.data;
}
export const getExpense= async() => {
    const res = await axios.get('http://localhost:8000/api/ac/getTotalExpense');
    return res.data;
}
export const getAllActivitis= async() => {
    const res = await axios
    .get('http://localhost:8000/api/ac/getAllActivitis');
    return res.data;
}