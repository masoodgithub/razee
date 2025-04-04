import React, { useEffect, useState } from 'react';
import '../Component/nav.css';
import { useDispatch, useSelector } from 'react-redux';
import { activitySubmits } from './activitySlice';
import {fetchRecipient} from './recipientSlice';
import { useNavigate } from 'react-router-dom';

const Activity =() => {
    const users = useSelector((state)=> state.users.recipient);
    console.log(users)
    const navigate =useNavigate();
    const dispatch = useDispatch()
    const [tel, setTel ]=useState();
    const [pers, setPers ]= useState({
      name:'',
      telno:'',
      acctype:'',
      amount:'',
      cdt: new Date(),
    });
const handleNameChange = (n) =>{ 
    users?.forEach((user) => {
      if(user.name === n) {
        setTel(user.telno);
        setPers({ 
          ...pers, 
          name: n, 
          telno : user.telno 
        })
      }
    })
  }
const handleAcctTypeChange =(n)=>{
    if (n === "Donation" || n === "Salary" ||
        n === "Expense" || n === "Zakat") {
          setPers({ ...pers, acctype : n })
      }  
      else {
        setPers({ ...pers, amount : n })
      }  
 }

const accountSubmit = async(e) => {
  if(pers.amount ==="" || pers.amount === undefined)return;
  e.preventDefault();
  dispatch(activitySubmits(pers));  
  navigate('/', {replace: true})
}
const goToDepositePage =() => {
  navigate('/Deposite')
}

  useEffect(()=>{
    dispatch(fetchRecipient())
  });
  
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
            <th style={{width: "30%"}}>Name</th>
            <th style={{width: "10%"}}>Tel No</th>
            <th style={{width: "30%"}}>Acc Type</th>
            <th>Amount</th>
            <th style={{width: "10%"}}>Action</th>
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
                  <option value="Zakat">Zakat</option>
                  <option value="Expense">Other Expense</option>
                </select></td>
            <td >
              <input type='number' name="amount"
              onChange={(e)=>handleAcctTypeChange(e.target.value)}/>
            </td>
            <td >
              
              <button className='btn btn-primary mx-1' 
              disabled = {pers.amount.length <= 3}
              onClick={accountSubmit}> Submit </button>
              <button className='btn btn-primary mx-1' 
              onClick={goToDepositePage}> Deposite Activity </button>
      
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    )
}
 export default Activity;