import logo from './icons_assets/Logo.svg';
import './styles.css';
function Nav(){
    return (
    <nav>
        
        
        <ul className='box'>
        <li className='menu'><a href=""> <img src={logo} alt="Logo" style={{ width: '170px', paddingLeft:'20px' }} /></a></li>
        <li className='menu'><a href="" >HOME</a></li>
        <li className='menu'><a href="" >ABOUT</a></li>
        <li className='menu'><a href="" >MENU</a></li>
        <li className='menu'><a href="" >RESERVATIONS</a></li>
        <li className='menu'><a href="" >ORDER ONLINE</a></li>
        <li className='menu'><a href="" >LOGIN</a></li>
        
        </ul>
        
        
    </nav>);
}
export default Nav;
