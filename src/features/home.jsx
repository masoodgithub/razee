import { useDispatch, useSelector } from 'react-redux';
import '../../src/App.css';
import { useEffect, useState } from 'react';
import { getExpenses, getDonations, getSalaries } from '../features/activitySlice';
import { Link } from 'react-router-dom';

const Home = () => {
  const [exp, setExp] = useState(0);
  const [don, setDon ]= useState(0);
  const [sal, setSal]= useState(0);

  const expenses =useSelector((state)=>state.activity.expense);
  const donations =useSelector((state)=> state.activity.donation);
  const salaries = useSelector((state) => state.activity.salary);
  const dispatch =useDispatch();

  const getTotal =() => {
      let x=0;
      expenses.forEach((item) => x+=item.amount);
      setExp(x);
      let y=0;
      donations.forEach((item) => y+=item.amount);
      setDon(y);
      let z=0;
      salaries.forEach((item) => z+=item.amount);
      setSal(z); 
  }
  useEffect(()=>{
    getTotal();
  },[expenses, donations, salaries])
 
  useEffect(()=> {
    dispatch(getExpenses());
    dispatch(getDonations());
    dispatch(getSalaries());
  },[]);

return (
  <div className='app'>
    <h2 className=''>Current Month Distribution</h2>
    <div className='py-4'>
        <h5>Current Month Salary</h5>
        <div className='py-4'>
          <span>Total Salary</span> 
          <span>{sal} Tk</span> 
          <span className='px'><Link to='/salary' state={{salaries}} >Details</Link></span>
        </div>
    </div>
    <div className='py-4'>
      
        <h5>Current Month Donation</h5>
        <div className='py-4'>
          <span>Total Donation</span> 
          <span>{don} TK</span>
          <span className='px'><Link to='/donation' state={{donations}}>Details</Link></span>
        </div>
    </div>
    <div className='py-4'>
      
        <h5>Current Month Other Expence</h5>
        <div className='py-4'>
          <span>Total Expence</span> 
          <span>{exp} TK</span>
          <span className='px' ><Link to="/expense" state={{expenses}}>Details</Link></span>
        </div>
    </div>
    <h4 className='py-4'>Total monthly expenditure: {exp+don+sal}</h4>
  </div>
  
)
}

export default Home;
