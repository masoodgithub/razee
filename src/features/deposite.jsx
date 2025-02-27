import React, { useState } from 'react';
import './deposite.css';
import { useDispatch } from 'react-redux';

const Deposite =() => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const [depositeData, setDepositeData] =useState({
        deposite:'deposite',
        month: 'month',
        date: new Date()
    });
    const dispatch = useDispatch();

    const handleChange=(e) =>{
        e.preventDefault();
        setDepositeData({
        ...depositeData,
        [e.target.name]: e.target.value
    })
    }
    
    const submitForm =() => {
        dispatch();
    }
    
    return(
        <div className='d-flex flex-column p-2 m-2 bg-secondary'>
            <form onSubmit={submitForm}>
                <label htmlFor='deposite' className='mx-4 text-white'>
                    Deposite Amount:
                </label>
                <input className='mx-4' type='number' name='deposite' onChange={handleChange}/>
                <select id="month" name="month" className='mx-4' onChange={handleChange}>
                    <option value="">Select Month</option>
                    {months.map(mon => {
                        return (
                            <option value={mon}>{mon}</option>
                        )
                    })}
                </select>
                <input type='submit' className='btn btn-md btn-info' value='Submit' />

            </form>
        </div>   
    )
}

export default Deposite;