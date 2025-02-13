import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateRecipient } from './recipientSlice';

const UpdateUser =() => {
    const users = useSelector((state)=> state.users.user);
    const [user, setUser ] =useState({
        name:"",
        telno:"",
        acctype:"",
        amount:"",
        info:"",
      });
    const dispatch = useDispatch();
    
    const inputChange =(e) =>{
        setUser({
          ...user,
          [e.target.name] : e.target.value
        })
    }
    
    const userSubmit = (e) => {
    e.preventDefault();
    dispatch(updateRecipient())    
    }
    return (
        <div className="addUserTable">
      <h3>Update Recipient</h3>
      <div className="update">
          <label  for='name'>Name:</label>
          <input type='text' name="name" onChange={inputChange}/>
        </div>
        <div className="update">
          <label  for='telno'>Tel no:</label>
          <input type='text' name='telno' onChange={inputChange}/>
      </div>
      <div className="update">
          <label  for='acctype'>Acc Type:</label>
          <input type='text' name='acctype'onChange={inputChange}/>
      </div>
      <div className="update">
          <label  for='amount'>Amount:</label>
          <input type='text' name='amount'onChange={inputChange}/>
      </div>
      <div className="update">
          <label  for='info'>Information:</label>
          <textarea type='text' rows={1} name='info'onChange={inputChange}/>
      </div>
      <button type='button' className='btn btn-sm btn-info' onClick={userSubmit}> Submit </button>
      </div>
    )
}

export default UpdateUser;