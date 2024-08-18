import img from './icons_assets/restaurant.jpg';
function Footer(){
    return(
        <footer>
            <section className='sec'>
                    <div className="box">
                        <div className="column">
                            <img src={img} style={{width:"230px", height:"320px"}}/>
                        </div>
                        <div className="column">
                            <ul>
                                <li>
                                    DOORMAT NAVIGATION
                                </li><br/>
                                <li><a href="">HOME</a>
                                    
                                </li>
                                <li>
                                <a href="">ABOUT</a>
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