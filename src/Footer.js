import { Link } from 'react-router-dom';

import { Link as LinkSection} from 'react-scroll';
import img from './icons_assets/restaurant.jpg';
function Footer(){
    return(
        <footer>
            <section>
                    <div className="box">
                        <div className="column">
                            <img src={img} style={{width:"230px", height:"320px"}}/>
                        </div>
                        <div className="column">
                            <ul>
                                <li>
                                    DOORMAT NAVIGATION
                                </li><br/>
                                <li><Link to="/">HOME</Link>
                                    
                                </li>
                                <li>
                                <LinkSection to="about">ABOUT</LinkSection>
                                </li>
                                <li>
                                <a href="">MENU</a>
                                </li>
                                <li>
                                <a href="">RESERVATIONS</a>
                                </li>
                                <li>
                                <a href="">ORDER ONLINE</a>
                                </li>
                                <li>
                                <a href="">LOGIN</a>
                                </li>
                            </ul>
                        </div>
                        <div className="column">
                            <ul>
                                <li>
                                    Contact
                                </li><br/>
                                <li>
                                    Adress
                                </li>
                                <li>
                                    Phone Number
                                </li>
                                <li>
                                    Email
                                </li>
                            </ul>
                        </div>
                        <div className="column">
                            <ul>
                                <li>
                                    Social Media Links
                                </li><br/>
                                <li>
                                    Adress
                                </li>
                                <li>
                                    Phone Number
                                </li>
                                <li>
                                    Email
                                </li>
                            </ul>
                        </div>
                    </div>
            </section>
        </footer>
    );
}
export default Footer;