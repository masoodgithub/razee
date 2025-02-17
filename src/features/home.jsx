import { useDispatch, useSelector } from 'react-redux';
import '../../src/App.css';
import { useEffect } from 'react';
import { getExpenses, getDonations, getSalaries } from '../features/activitySlice';

const Home = () => {
  const expenses =useSelector((state)=>state.activity.expense);
  const donations =useSelector((state)=> state.activity.donation);
  const salaries = useSelector((state) => state.activity.salary);


  const dispatch =useDispatch();
  const getTotal =(e) => {
    if(e === 'ex') {
      let sum=0;
      expenses.map((item) => sum+=item.amount);
      return sum;
    }
    if(e === 'd') {
      let sum=0;
      donations.map((item) => sum+=item.amount);
      return sum;
    }
    if(e === 's') {
      let sum=0;
      salaries.map((item) => sum+=item.amount);
      return sum;
    }
  }
 
  useEffect(()=> {
    dispatch(getExpenses());
    dispatch(getDonations());
    dispatch(getSalaries());
  },[]);

return (
  <div className='app'>
      <h2 className='cmd'>Current Month Distribution</h2>
       
      <h3 className='cms'> Salary </h3>
        <h4>Current Month Salary</h4>
        <div>
          <span>Total Salary</span> 
          <span>{getTotal('s')} Tk</span>
        </div>
      <h3 className='cmdo'> Donation</h3>
        <h4>Current Month Donation</h4>
        <div>
          <span>Total Donation</span> 
          <span>{getTotal('d')} TK</span>
        </div>

      <h3 className='cmox'> Other Expence</h3>
        <h4>Current Month Other Expence</h4>
        <div>
          <span>Total Expence</span> 
          <span>{getTotal('ex')} TK</span>
        </div>

  </div>
  
)
}

export default Home;
