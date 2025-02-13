import './App.css';
import Navbar from './Component/nav';
import RecipientsView from './features/recipientView';
import store from './App/Store';
import { Provider } from 'react-redux';
import UpdateUser from './features/update';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <Navbar />
     <UpdateUser />
    </div>
    </Provider>
  );
}

export default App;
