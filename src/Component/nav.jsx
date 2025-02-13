
import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css';
import { NavLink } from 'react-bootstrap';

function navbar() {
  return (
   <nav className='layout'>
   <div className='logo'>ALIF-NGO</div>
   <div>
    <ul>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/recipient'>Recipient</NavLink></li>
      <li><NavLink to='/activity'>Activity</NavLink></li>
      <li><NavLink to='/report'>Report</NavLink></li>
      <li><NavLink to='/help'>Help</NavLink></li>
    </ul>
    </div>
   </nav>
  );
}

export default navbar;