import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateRecipient } from './recipientSlice';
import { useLocation } from 'react-router-dom';

const UpdateUser =() => {
    const users = useSelector((state)=> state.users.user);
    const pers = useLocation();
    const { name, telno, acctype, amount, info,_id }= pers.state;
    console.log(users);
    const dispatch = useDispatch();
    const [user, setUser ] =useState({
        name,
        telno,
        acctype,
        amount,
        info,
        _id
      });
    
    const inputChange =(e) =>{
        setUser({
          ...user,
          [e.target.name] : e.target.value
        })
    }
    
    const userSubmit = (e) => {
    e.preventDefault();
    dispatch(updateRecipient(user))    
    }
    return (
        <div className="addUserTable">
      <h3>Update Recipient</h3>
      <div className="update">
          <label  htmlFor='name'>Name:</label>
          <input type='text' name="name" defaultValue={name}onChange={inputChange}/>
        </div>
        <div className="update">
          <label  htmlFor='telno'>Tel no:</label>
          <input type='text' name='telno' defaultValue={telno} onChange={inputChange}/>
      </div>
      <div className="update">
          <label  htmlFor='acctype'>Acc Type:</label>
          <input type='text' name='acctype' defaultValue={acctype} onChange={inputChange}/>
      </div>
      <div className="update">
          <label  htmlFor='amount'>Amount:</label>
          <input type='text' name='amount' defaultValue={amount} onChange={inputChange}/>
      </div>
      <div className="update">
          <label  htmlFor='info'>Information:</label>
          <textarea type='text' rows={5} name='info' defaultValue={info} onChange={inputChange}/>
      </div>
      <button type='button' className='btn btn-sm btn-info' onClick={userSubmit}> Submit </button>
      </div>
    )
}

export default UpdateUser;