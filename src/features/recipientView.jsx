import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../Component/nav.css';
import { deleteRecipient, fetchRecipient, submitRecipient} from './recipientSlice';
import { useNavigate } from 'react-router-dom';

const RecipientsView = () => {
const users = useSelector(state=> state.users.recipient);
const dispatch = useDispatch();
const [addRecipient, setAddRecipient ]=useState(false);
const navigate = useNavigate();
const [user, setUser ] =useState({
  name:"",
  telno:"",
  acctype:"",
  amount:"",
  info:"",
});
const inputChange =(e) =>{
  setUser({
    ...user,
    [e.target.name] : e.target.value
  })
}
const AddRecipient =() =>{
  setAddRecipient(!addRecipient);
}
const userSubmit = async(e) => {
    e.preventDefault();
    dispatch(submitRecipient(user))
}

const getUserByID = async (id) => {
    dispatch(deleteRecipient(id))
}
const updateUser =(user) =>{
  const{name, telno, _id, info, amount, acctype}= user;
  navigate('/update', {state: {
    name,
    telno,
    acctype,
    _id,
    info,
    amount
  }});
}

useEffect(() => {
    dispatch(fetchRecipient());
});

  return (
      <div className="userTable"> 
      {!addRecipient ?<div><button className="btn btn-info btn-sm my-2" onClick={AddRecipient}>Add Customer</button>
      
      <table className="table table-striped">
      <thead>
        <tr>
          <th scope='col'> # </th>
          <th scope='col'>Name</th>
          <th scope='col'>Tel Number</th>
          <th scope='col' style={{width:'20%'}}>Information</th>
          <th scope='col'>Action </th>
        </tr>
      </thead>
      <tbody>
        {users?.map((item, index)=>{
          return(
          <tr>
            <td>{index + 1}</td>
          <td >{item.name}</td>
          <td >{item.telno}</td>
          <td>{item.info}</td>
          <td > 
            <button className="btn btn-info mx-2" onClick={ ()=> getUserByID(item._id)}>Delete </button>
          <button className="btn btn-info" onClick={()=>updateUser(item)}> Edit/Update</button>
          </td>
        </tr>
        )
        })}
        {users?.length ===0 ?(<tr ><td> No data  available </td></tr> ): ''}
      </tbody>
      </table>
      <button 
      className="btn btn-info btn-sm my-2" 
      onClick={AddRecipient}>Add Customer</button>
      </div>: ""}
    { addRecipient ? (
      <div className="addUserTable">
      <h3>Add new Customer</h3>
      <div className="add">
          <label  for='name'>Name:</label>
          <input type='text' name="name" onChange={inputChange}/>
        </div>
        <div className="add">
          <label  for='telno'>Tel no:</label>
          <input type='text' name='telno' onChange={inputChange}/>
      </div>
      <div className="add">
          <label  for='acctype'>Acc Type:</label>
          <input type='text' name='acctype'onChange={inputChange}/>
      </div>
      <div className="add">
          <label  for='amount'>Amount:</label>
          <input type='text' name='amount'onChange={inputChange}/>
      </div>
      <div className="add">
          <label  for='info'>Information:</label>
          <textarea type='text' rows={1} name='info'onChange={inputChange}/>
      </div>
      <button type='button' className='btn btn-sm btn-info' onClick={userSubmit}> Submit </button>
      <button className="btn btn-info btn-sm mx-2" onClick={AddRecipient}>Back to Customer List</button>
      </div>
    ) : ""}
    </div>)
}
export default RecipientsView;