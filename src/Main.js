
import chef from './icons_assets/restauranfood.jpg';
import greekSalad from './icons_assets/greek salad.jpg';
import bici from './icons_assets/bici.png';
import bruschetta from './icons_assets/bruchetta.svg';
import dessert from './icons_assets/lemon dessert.jpg';
import marioA from './icons_assets/Mario and Adrian A.jpg';
function Main(){
    return(
        <main>
            <section className='sec'>
                <div className='box'>
                <div className='column'>
                
                <h1 style={{color: "#F4CE14"}}>Little Lemon</h1>
                
                
                <h3>Chicago</h3>                
                
                    <p className='textblock' style={{color: "white"}}>We are a family owned Mediterranean restaurant, focused on traditional 
                    recipes served with a modern twist.</p>
                    <button className='button'>Reserve a table</button>
                </div>
                <div className='column'>
                    <img src={chef} style={{width: "350px", height: "450px", borderRadius: "30px"}}/>
                </div>
                </div>
                
                
            </section>
            
            <section>
            <br/><br/><br/><br/><br/><br/><br/>
                <div className='box'>
                    <div className='column'>
                    <h1>This week specials!</h1>
                    </div>
                    <div className='column'>
                        <button className='button'>Online Menu</button>
                    </div>
                    
                </div>
                <article className='box'>
                        <div className='card'>
                        <img src={greekSalad} className="imgCard"/>
                        <div className='box'>
                            <h3 >Greek Salad</h3>
                            <h3 style={{paddingLeft: "190px", color: "#BC8A09"}} >$12.99</h3>
                        </div>

                        <p>Is a fresh and colorful dish typical of Mediterranean cuisine. It primarily consists of tomatoes, cucumbers, red onions, bell peppers, Kalamata olives, and feta cheese, all dressed with olive oil, oregano, and sometimes a splash of vinegar</p>
                       
                        <a className="delivery" href="">Order a delivery <img src={bici} style={{marginLeft:"10px"}}/></a>
                        </div>
                        <div className='card'>
                        <img src={bruschetta} className="imgCard"/>
                        <div className='box'>
                            <h3 >Bruschetta</h3>
                            <h3 style={{paddingLeft: "190px", color: "#BC8A09"}} >$5.20</h3>
                        </div>
                        <p>Bruschetta is an Italian appetizer consisting of grilled bread topped with a variety of ingredients. The most classic version features diced tomatoes, garlic, basil, and olive oil, seasoned with salt and pepper.</p>
                        <a className="delivery" href="">Order a delivery <img src={bici} style={{marginLeft:"10px"}}/></a>
                        
                        </div>
                        <div className='card'>
                        <img src={dessert} className="imgCard"/>
                        <div className='box'>
                            <h3 >Lemon Dessert</h3>
                            <h3 style={{paddingLeft: "190px", color: "#BC8A09"}} >$5.20</h3>
                        </div>
                        <p>A lemon dessert is a sweet treat that showcases the bright, tangy flavor of lemons. Popular options include lemon bars, which feature a buttery crust topped with a smooth, zesty lemon filling, and lemon meringue pie.</p>
                        
                        <a className="delivery" href="">Order a delivery <img src={bici} style={{marginLeft:"10px"}}/></a>
                        </div>

                    </article>
                
            </section>
            <section className='sec'>
                <br/>
                <h1 style={{textAlign: "center"}}>Testimonials</h1>
                <div className='box'>
                    <div className='test'>
                        <h3>
                            Rating
                        </h3>
                        <div><img className='user' src=""/>     NAME</div>
                        <p>Review</p>
                    </div>
                    <div className='test'>
                        <h3>
                            Rating
                        </h3>
                        <div><img className='user' src=""/>     NAME</div>
                        <p>Review</p>
                    </div>
                    <div className='test' >
                        <h3>
                            Rating
                        </h3>
                        <div><img className='user' src=""/>     NAME</div>
                        <p>Review</p>
                    </div>
                    <div className='test'>
                        <h3>
                            Rating
                        </h3>
                        <div><img className='user' src=""/>     NAME</div>
                        <p>Review</p>
                    </div>
                </div>
                

            </section>
            <section>
                <div className='box'>
                    <div className='column'>
                    <h1>Little Lemon</h1>                
                    <h3>Chicago</h3>
                    <br/><br/>
                    <p className='textblock'>Lorem iasp asopf asodpas daspdo ad iadpado asda dadas ddda sdasd asdas das dasdas dasdas das dasdas dasd dasdas das dasdas dasda dadas ddda sdasd asdas das dasdas dasdas das dasdas das </p> 
                    </div>
                    
                        <img src={marioA} style={{ width: "350px", height: "450px", borderRadius: "30px"}}/>
                    
                </div>
            
            </section>
        </main>
    );
}
export default Main;