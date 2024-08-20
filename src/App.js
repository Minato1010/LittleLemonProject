import HomePage	 from './HomePage';
import BookingPage from './BookingPage';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';


function App() {
  return (
    <>
      
      <Router>
        
        <Nav/>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/booking' element={<BookingPage />} />
           
          </Routes>
          <Footer/>
        </Router>
      
       
        
    </>

  );
}

export default App;
