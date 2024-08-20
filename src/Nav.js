import logo from './icons_assets/Logo.svg';
import './styles.css';
import {Link} from 'react-router-dom';
import { Link as LinkSection} from 'react-scroll';

function Nav(){
    return (
    <nav>
        
        
        <ul className='box'>
        <li className='menu'><a href=""> <img src={logo} alt="Logo" style={{ width: '170px', paddingLeft:'20px' }} /></a></li>
        <li className='menu'><Link to="/">HOME</Link></li>
        <li className='menu'><LinkSection to='about'>ABOUT</LinkSection></li>
        <li className='menu'><a href="" >MENU</a></li>
        <li className='menu'><Link to="/booking">RESERVATIONS</Link></li>
        <li className='menu'><a href="" >ORDER ONLINE</a></li>
        <li className='menu'><a href="" >LOGIN</a></li>
        
        </ul>
        
        
    </nav>);
}
export default Nav;
