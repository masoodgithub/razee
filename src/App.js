import './App.css';
import Navbar from './Component/nav';
import RecipientsView from './features/recipientView';
import store from './App/Store';
import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Home from './features/home';

function App() {
  return (
    <Provider store={store}>
   
     <Navbar />
     <Routes >
      <Route path='/' element={<Home />} />
      <Route path='/recipient' element={<RecipientsView />} />
      <Route path='*' element={<Home />} />
     </Routes>
  
    </Provider>
  );
}

export default App;
