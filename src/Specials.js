import bici from './icons_assets/bici.png';
import bruchetta from './icons_assets/bruchetta.svg';
function Specials() {
    const specials = [
        { name: "Greek Salad", img: require("./icons_assets/greek salad.jpg"), price: 12.99, description: "Is a fresh and colorful dish typical of Mediterranean cuisine. It primarily consists of tomatoes, cucumbers, red onions, bell peppers, Kalamata olives, and feta cheese, all dressed with olive oil, oregano, and sometimes a splash of vinega." },
        { name: "Bruschetta", img: bruchetta, price: 5.20, description: "Bruschetta is an Italian appetizer consisting of grilled bread topped with a variety of ingredients. The most classic version features diced tomatoes, garlic, basil, and olive oil, seasoned with salt and pepper." },
        { name: "Lemon Dessert", img: require("./icons_assets/lemon dessert.jpg"), price: 12.99, description: "A lemon dessert is a sweet treat that showcases the bright, tangy flavor of lemons. Popular options include lemon bars, which feature a buttery crust topped with a smooth, zesty lemon filling, and lemon meringue pie." },
    ];

    return (
        <>
            <br />
            <div className='box'>
                <div className='column'>
                    <h1>This week specials!</h1>
                </div>
                <div className='column'>
                    <button className='button'>Online Menu</button>
                </div>

            </div>
            {specials ? (
                <article className='box'>
                    {specials.map((special) =>
                        <div className='card'>
                            <img src={special.img} className="imgCard" />
                            <div className='box'>
                                <h3 >{special.name}</h3>
                                <h3 style={{ paddingLeft: "190px", color: "#BC8A09" }} >$ {special.price}</h3>
                            </div>
                            <p> {special.description} </p>
                            <a className="delivery" href=""> Order a delivery <img src={bici} style={{ marginLeft: "10px" }} /></a>

                        </div>
                    )};
                </article>) :
                (<div>
                    Loading
                </div>)
            }
        </>
    );
}
export default Specials;