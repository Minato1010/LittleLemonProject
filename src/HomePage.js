
import chef from './icons_assets/restauranfood.jpg';
import marioA from './icons_assets/Mario and Adrian A.jpg';
import Customers from './CustomersSay';
import Specials from './Specials';

function Main() {
    

    return (
       
        
        <>
            
            <section className='sec'>
                <div className='box'>
                    <div className='column'>

                        <h1 style={{ color: "#F4CE14" }}>Little Lemon</h1>


                        <h3>Chicago</h3>

                        <p className='textblock' style={{ color: "white" }}>We are a family owned Mediterranean restaurant, focused on traditional
                            recipes served with a modern twist.</p>
                        <button className='button'>Reserve a table</button>
                    </div>
                    <div className='column'>
                        <img src={chef} style={{ width: "350px", height: "450px", borderRadius: "30px" }} />
                    </div>
                </div>


            </section>

            <section>
                <br />
                <Specials />

            </section>
            <section className='sec'>
                <Customers />
            </section>
            <section id="about">
                
                <div className='box'>
                    <div className='column'>
                        <h1 style={{color: "#F4CE14"}}>Little Lemon</h1>
                        <h3>Chicago</h3>
                        <br /><br />
                        <p className='textblock'>Lorem iasp asopf asodpas daspdo ad iadpado asda dadas ddda sdasd asdas das dasdas dasdas das dasdas dasd dasdas das dasdas dasda dadas ddda sdasd asdas das dasdas dasdas das dasdas das </p>
                    </div>

                    <img src={marioA} style={{ width: "350px", height: "450px", borderRadius: "30px" }} />

                </div>
                


            </section>
            
        </>
    );
}
export default Main;