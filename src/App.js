import './App.css';
import Navbar from './Component/nav';
import RecipientsView from './features/recipientView';
import store from './App/Store';
import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Home from './features/home';
import UpdateUser from './features/update';
import AddUser from './features/addUser'
import Activity from './features/activity';
import HelpUser from './features/help';
import Report from './features/report';
import Expense from './features/expense';
import Donation from './features/donation';
import Salary from './features/salary';
function App() {
  return (
    <Provider store={store}>
   
     <Navbar />
     <Routes >
      <Route path='/' element={<Home />} />
      <Route path='/recipient' element={<RecipientsView />} /> 
      <Route path='/activity' element={<Activity />}  /> 
      <Route path='/rep' element={<Report/>} />
      <Route path='/helpuser' element={<HelpUser />} />
      <Route path='/update' element={<UpdateUser />} />
      <Route path='/add' element={<AddUser />} />
      <Route path='/expense' element={<Expense />} />
      <Route path="/donation" element={<Donation />} />
      <Route path='/salary' element={<Salary />} />
      <Route path='/report' element={<Report />} />
      <Route path='*' element={<Home />} />
     </Routes>
  
    </Provider>
  );
}

export default App;
