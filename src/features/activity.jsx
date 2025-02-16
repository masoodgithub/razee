import React, { useEffect, useState } from 'react';
import '../Component/nav.css';
import { useDispatch, useSelector } from 'react-redux';
import { ActivitySubmits } from './activitySlice';
import {fetchRecipient} from './recipientSlice';

const Activity =() => {
    const users = useSelector((state)=> state.users.recipient);
    console.log(users)
    const dispatch = useDispatch()
  const [tel, setTel ]=useState();
const [pers, setPers ]= useState({
  telno:'',
  acctype:'',
  amount:'',
  cdt: new Date(),
});
const handleNameChange = (n) =>{ 
    users?.filter((user) => {
      if(user.name === n) {
        setTel(user.telno);
        setPers({ ...pers, telno : user.telno })
      }
    })
  }
const handleAcctTypeChange =(n)=>{
    if (n === "Donation" || n === "Salary" ||
        n === "Expense") {
          setPers({ ...pers, acctype : n })
      }  
      else {
        setPers({ ...pers, amount : n })
      }  
 }

const accountSubmit = async() => {
  if(pers.amount ==="" || pers.amount === undefined)return;
  dispatch(ActivitySubmits(pers));  
}
  useEffect(()=>{
    dispatch(fetchRecipient())
  },[]);
  
  return (
        <div style={{
            display: "flex",
            flexDirection: 'column',
            justifyContent: "centre",
            alignItems: "centre",
        }}> 
        <table>
        <thead>
          <tr>
            <th style={{width: "20%"}}>Name</th>
            <th style={{width: "20%"}}>Tel No</th>
            <th>Acc Type</th>
            <th>Amount</th>
            <th style={{width: "20%"}}>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <select onChange={(e)=>handleNameChange(e.target.value)}>
              <option>Select Name</option>
                {users?.map((item, index) => 
                  <option key={index} value={item.name} >
                     {item.name}</option>
                  )
                }
               </select></td>
            <td >{ tel }</td>
            <td ><select onChange={(e)=>handleAcctTypeChange(e.target.value)}>
                  <option >Select Account Type</option>
                  <option value='Donation'>Donation</option>
                  <option value='Salary'>Salary </option>
                  <option value="Expense">Other Expense</option>
                </select></td>
            <td >
              <input type='number' name="amount"
              onChange={(e)=>handleAcctTypeChange(e.target.value)}/>
            </td>
            <td >
              
              <button className='btn btn-primary mx-1' 
              disabled = {pers.amount.length !== 4}
              onClick={accountSubmit}> Submit </button>
      
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    )
}
 export default Activity;