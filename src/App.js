import HomePage from './HomePage';
import BookingPage from './BookingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useReducer, useState, useEffect } from 'react';
import Nav from './Nav';
import Footer from './Footer';


const initialTimes = []; // Inicialmente vacío

export const timesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return action.payload;
    default:
      return state;
  }
};

export const initializeTimes = async () => {
  const today = new Date().toISOString().split('T')[0];
  const times = await fetch(today);
  return times;
};
export const submitAPI = async (formData) => {
  try {
    const response = await fetch('https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Error en la solicitud');
    }

    const data = await response.json();
    return data.success; // Suponiendo que la API devuelve un objeto con una propiedad 'success'
  } catch (error) {
    console.error('Error al enviar el formulario:', error);
    return false; // Devuelve false si hay un error
  }
};

function App() {
  const [availableTimes, dispatch] = useReducer(timesReducer, initialTimes);
  const [date, setDate] = useState('');


  const submitForm = async (formData) => {
    const response = await submitAPI(formData);

  };


  const updateTimes = async (selectedDate) => {

    const times = await fetch(selectedDate); // Llama a la API con la fecha seleccionada

    dispatch({ type: 'UPDATE_TIMES', payload: times });
  };
  useEffect(() => {
    const loadInitialTimes = async () => {
      const times = await initializeTimes();

      dispatch({ type: 'UPDATE_TIMES', payload: times });
    };
    loadInitialTimes();
  }, []);

  return (
    <>

      <Router>

        <Nav />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/booking' element={<BookingPage date={date}
            setDate={setDate}
            availableTimes={availableTimes}
            updateTimes={updateTimes} submitForm={submitForm} />} />

        </Routes>
        <Footer />
      </Router>



    </>

  );
}

export default App;
