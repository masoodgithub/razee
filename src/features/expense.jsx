import React from 'react';
import { useLocation } from 'react-router-dom';
import '../Component/nav.css';

const Expense =() => {
    const location = useLocation();
    const expense = location.state.expenses;
    console.log(location.state)
    
    return (
        <div className='text-bg-primary' style={{width:"70%"}}>
            <h6>Monthly Expense</h6>
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
                    {expense && expense.map((exp) => {
                        return (
                        <tr>
                        <td>{exp.name}</td>
                        <td>{exp.telno}</td>
                        <td>{exp.acctype}</td>
                        <td>{new Date(exp.cdt).toDateString()}</td>
                        <td>{exp.amount}</td>
                    </tr>)})}
                </tbody>
            </table>
        </div>
    )
}

export default Expense;