
import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css';
import { Link } from 'react-router-dom';

function navbar() {
  return (
   <nav className='layout'>
   <div className='logo'>ALIF-NGO</div>
   <div> 
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/recipient'>Recipient</Link></li>
        <li><Link to='/activity'>Activity</Link></li>
        <li><Link to='/rep'>Report</Link></li>
        <li><Link to='/helpuser'>Help</Link> </li>
      </ul> 
    </div>
   </nav>
  );
}

export default navbar;