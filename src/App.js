import HomePage	 from './HomePage';
import BookingPage from './BookingPage';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useReducer, useState } from 'react';
import Nav from './Nav';
import Footer from './Footer';

const initialTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

const timesReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            return action.payload; 
        default:
            return state;
    }
};


function App() {
    const [availableTimes, dispatch] = useReducer(timesReducer, initialTimes);
    const [date, setDate] = useState('');
    
    const updateTimes = (selectedDate) => {
        dispatch({ type: 'UPDATE_TIMES', payload: availableTimes });
    };
  return (
    <>
      
      <Router>
        
        <Nav/>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/booking' element={<BookingPage date={date}
                setDate={setDate}
                availableTimes={availableTimes}
                updateTimes={updateTimes}/>} />
           
          </Routes>
          <Footer/>
        </Router>
      
       
        
    </>

  );
}

export default App;
