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
      <Route path='*' element={<Home />} />
     </Routes>
  
    </Provider>
  );
}

export default App;
