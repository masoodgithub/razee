import React from  'react';
import { useLocation } from 'react-router-dom';

const Donation =() => {
    const location = useLocation();
    const donation = location.state.donations;
    console.log(location.state)
    
    return (
        <div className='text-bg-primary' style={{width:"70%"}}>
            <h6>Monthly Donation</h6>
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
                    {donation && donation.map((exp) => {
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

export default Donation;