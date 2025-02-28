import axios from 'axios';

export const submitDeposite = async(amt)=> {
    const res = await axios.post('http://localhost:8000/api/d/deposite', amt);
    return res.data;
}

export const getDeposite = async() => {
    const res = await axios.get('http://localhost:8000/api/d/getDeposites');
    return res.data;
}