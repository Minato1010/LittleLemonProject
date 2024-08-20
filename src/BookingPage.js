

function BookingPage() {

    return (

        <div className="column">            |
            <form className="booking">
                <div className="column">
                    <h1>Reserve a table</h1>
                    <br/>
                    <label for="name">Enter your name</label>
                    <input type="text" id="name" name="nnam" />
                    <br />
                    <label for="em">Enter your email</label>
                    <input type="email" id="em" name="nmem" />
                    <br />

                    <label for="dtbook">Enter date booking</label>
                    <input type="date" id="dtbook" name="dtname" />
                    <br />

                    <label for="numpeople">Number of people</label>
                    <input type="number" id="numpeople" name="numnamepp" min="1" max="8" />
                    <br />

                    <label for="idcbox">I agree to the cancellation policy</label>
                    <input type="checkbox" id="idcbox" name="namecbox"  />
                    <br />
                    <button type="submit" className="button">Book Now</button>
                </div>


            </form>
        </div>


    );

}
export default BookingPage;