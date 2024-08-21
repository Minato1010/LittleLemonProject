import React, { useState } from 'react';


function BookingPage({ date, setDate, availableTimes, updateTimes }) {
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('');
    const [error, setError] = useState('');

    const handleDateChange = (e) => {
        const newDate = e.target.value;
        setDate(newDate);
        updateTimes(newDate); // Actualizar los horarios disponibles
    };

    const handleSubmit = (e) => {
        e.preventDefault();


        const selectedDate = new Date(date);
        const today = new Date();
        today.setHours(0, 0, 0, 0); 

        if (selectedDate <= today) {
            setError('La fecha seleccionada debe ser mayor que el día de hoy.');
            console.log(error)
        }else{
            setError(' ');
            setDate('');
            setTime('');
            setGuests('');
            setOccasion('');
            
        }
        console.log({ date, time, guests, occasion });
    };
    return (
        
        <div style={{display: "grid", justifyContent: "center", paddingBottom: "50px"}}>  
            <div>
                <h1 >Book a table</h1>
             </div>          |
            <form style={{display: "grid", maxWidth: "200px", gap: "20px"}} onSubmit={handleSubmit}>
                <label for="res-date">Choose a date</label>
                <input type="date" value={date} id="res-date" className="input" onChange={handleDateChange} required/>
                <label for="res-time">Choose time</label>
                <select id="res-time" value={time} onChange={(e)=>setTime(e.target.value)} className="input">
                {availableTimes.map((availableTime) => (
                    <option key={availableTime} value={availableTime}>
                        {availableTime}
                    </option>
                ))}
                </select>
                <label for="guests">Number of guests</label>
                <input type="number" value={guests} onChange={(e)=>setGuests(e.target.value)} placeholder="1" min="1" max="10" id="guests" className="input" required/>
                <label for="occasion">Occasion</label>
                <select id="occasion" value={occasion} onChange={(e)=>setOccasion(e.target.value)} className="input">
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input type="submit" value="Make your reservation" className="button"/>


            </form>

        </div>


    );

}
export default BookingPage;