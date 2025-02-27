import React, { useState } from 'react';
import './deposite.css';

const Deposite =() => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const [depositeData, setDepositeData] =useState({
        deposite,
        month,
        date: new Date()
    })
    const handleChange=(e) =>{
        e.peventDefault();
        setDepositeData({
        ...depositeData,
        [e.target.name]: e.target.value
    })

    const submitForm =() => {
        console.log(depositeData)
    }
    
    return(
        <div className='d-flex flex-column p-2 m-2 bg-secondary'>
            <form onSubmit={submitForm}>
                <label htmlFor='deposite' className='mx-4 text-white'>
                    Deposite Amount:
                </label>
                <input className='mx-4 ' type='number' name='deposite' onchange={handleChange}/>
                <select name="month" id="month" className='mx-4'>
                    <option value="">Select Month</option>
                    {months.map(mon => {
                        return (
                            <option value='mon' onChange={handleChange}>{mon}</option>
                        )
                    })}
                </select>
                <input type='submit' className='btn btn-md btn-info' value='Submit' />

            </form>
        </div>   
    )
}

export default Deposite;