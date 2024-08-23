import React, { useState } from 'react';


function BookingPage({ date, setDate, availableTimes, updateTimes,submitForm }) {
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('');
    const [error, setError] = useState('');

    const handleDateChange = (e) => {
        const newDate = e.target.value;
        setDate(newDate);
        updateTimes(newDate); // Actualizar los horarios disponibles
    };

    const isFormValid = () => {
        return date && time && guests >= 1 && guests <= 10 && occasion;
    };
        const handleSubmit = (event) => {
            event.preventDefault();
            const formData = new FormData(event.target); // Obtén los datos del formulario
            submitForm(formData); // Llama a la función submitForm
        };
    
    return (

        <div style={{ display: "grid", justifyContent: "center", paddingBottom: "50px" }} >
            <div>
                <h1>Book now</h1>
            </div>          |
            <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }} onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose a date</label>
            <input 
                type="date" 
                value={date} 
                id="res-date" 
                className="input" 
                onChange={handleDateChange} 
                required 
            />
            
            <label htmlFor="res-time">Choose time</label>
            <select 
                id="res-time" 
                value={time} 
                onChange={(e) => setTime(e.target.value)} 
                className="input" 
                required
            >
                {availableTimes && availableTimes.length > 0 ? (
                    availableTimes.map((availableTime) => (
                        <option key={availableTime} value={availableTime}>
                            {availableTime}
                        </option>
                    ))
                ) : (
                    <option disabled>There’s no times available</option>
                )}
            </select>
            
            <label htmlFor="guests">Number of guests</label>
            <input 
                type="number" 
                value={guests} 
                onChange={(e) => setGuests(e.target.value)} 
                placeholder="1" 
                min="1" 
                max="10" 
                id="guests" 
                className="input" 
                required 
            />
            
            <label htmlFor="occasion">Occasion</label>
            <select 
                id="occasion" 
                value={occasion} 
                onChange={(e) => setOccasion(e.target.value)} 
                className="input" 
                required
            >
                <option value="">Select an occasion</option>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            
            <input 
                type="submit" 
                value="Make your reservation" 
                className="button" aria-label='On Click'
                disabled={!isFormValid()} // Deshabilita el botón si el formulario no es válido
            />
        </form>

        </div>


    );

}
export default BookingPage;