import { render, screen,fireEvent } from '@testing-library/react';

import BookingPage from './BookingPage';
import { timesReducer, date,setDate,updateTimes } from './App';
import { initializeTimes } from './App';





const availableTimes = initializeTimes();

describe('BookingForm Validation', () => {
  test('form is valid when all fields are filled correctly', () => {
      render(<BookingPage />);

      fireEvent.change(screen.getByDisplayValue(/Choose a date/i), { target: { value: '2024-08-23' } });
      fireEvent.change(screen.getByDisplayValue(/Choose time/i), { target: { value: '18:00' } });
      fireEvent.change(screen.getByDisplayValue(/Number of guests/i), { target: { value: '2' } });
      fireEvent.change(screen.getByDisplayValue(/Occasion/i), { target: { value: 'Birthday' } });

      const submitButton = screen.getByRole('button', { name: /Make your reservation/i });
      expect(submitButton).not.toBeDisabled();
  });
});

describe('BookingForm', () => {
    test('should have required attributes on inputs', () => {
        render(<BookingPage />);

        const dateInput = screen.getByLabelText(/choose a date/i);
        expect(dateInput).toHaveAttribute('required');

        const timeSelect = screen.getByLabelText(/choose time/i);
        expect(timeSelect).toHaveAttribute('required');

        const guestsInput = screen.getByLabelText(/number of guests/i);
        expect(guestsInput).toHaveAttribute('required');
        expect(guestsInput).toHaveAttribute('min', '1');
        expect(guestsInput).toHaveAttribute('max', '10');

        const occasionSelect = screen.getByLabelText(/occasion/i);
        expect(occasionSelect).toHaveAttribute('required');
    });
});



describe('Pruebas para initializeTimes', () => {
  test('initializeTimes devuelve el valor esperado', async () => {
      const availableTimes = ['10:00', '11:00', '12:00']; // Horarios de reserva simulados
      fetch(availableTimes); // Simula la respuesta de fetchAPI

      const result = await initializeTimes(); // Asegúrate de manejar la promesa
      expect(result).toEqual(availableTimes);
  });
});
describe('Pruebas para updateTimes', () => {
  test('updateTimes actualiza los horarios según la fecha seleccionada', async () => {
      const selectedDate = '2024-08-23'; // Fecha preseleccionada
      const availableTimes = ['10:00', '11:00', '12:00']; // Horarios de reserva simulados
      fetch(availableTimes); // Simula la respuesta de fetchAPI

      const result = await updateTimes(selectedDate); // Asegúrate de manejar la promesa
      expect(result).toEqual(availableTimes);
  });
});

  test('timesReducer actualiza los tiempos correctamente', () => {
      const action = { type: 'UPDATE_TIMES', payload: availableTimes };
      const newState = timesReducer(availableTimes, action);
      expect(newState).toEqual(availableTimes); // Asegúrate de que la lógica se ajuste a la prueba
  });

test('Renders the bookingform heading', ()=>{
render(<BookingPage date={date} 
  setDate={setDate} 
  availableTimes={availableTimes} 
  updateTimes={updateTimes} submitForm={null}/>);
const headingElement = screen.getByText("Book now");
  expect(headingElement).toBeInTheDocument();

});
