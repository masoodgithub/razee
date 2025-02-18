import React from 'react';
import { useLocation } from 'react-router-dom';

const Salary =() => {
    const location = useLocation();
    const salary = location.state.salaries;
    console.log(location.state)
    
    return (
        <>
        <h1>Monthly Salary</h1>
        <div className='text-bg-primary' style={{width:"70%"}}>
            
            <table className="table table-striped">
                <thead style={{color: "red"}}>
                    <tr>
                        <td>Name</td>
                        <td>Telephone #</td>
                        <td>Account</td>
                        <td>Date</td>
                        <td>Amount in Taka</td>
                    </tr>
                </thead>
                <tbody>
                    {salary && salary.map((exp) => {
                        return (
                        <tr>
                        <td>{exp.name}</td>
                        <td>{exp.telno}</td>
                        <td>{exp.acctype}</td>
                        <td>{new Date(exp.cdt).toLocaleString()}</td>
                        <td>{exp.amount}</td>
                    </tr>)})}
                </tbody>
            </table>
        </div>
        </>
    )
}

export default Salary;