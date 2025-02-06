import { Link } from 'react-router-dom';
import '../styles/navbar.css'

const Navbar = () => (
  <nav className='navbar'>
    <ul className='list'>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/facts'>Facts</Link></li>
      <li><Link to='/about'>About</Link></li>
    </ul>
  </nav>
);

export default Navbar;