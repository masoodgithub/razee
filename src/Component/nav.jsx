
import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css';
import { Link } from 'react-router-dom';

function navbar() {
  return (
   <nav className='layout'>
   <div className='logo'>ALIF-NGO</div>
   <div>
    
      <Link to='/'>Home</Link>
      <Link to='/recipient'>Recipient</Link>
      <Link to='/activity'>Activity</Link>
      <Link to='/report'>Report</Link>
      <Link to='/help'>Help</Link>
    
    </div>
   </nav>
  );
}

export default navbar;