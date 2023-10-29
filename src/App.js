import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeNews from './components/HomeNews';
import SportsNews from './components/SportsNews';
import BusinessNews from './components/BusinessNews';
import EducationNews from './components/EducationalNews';
import PoliticsNews from './components/PoliticalNews';
import Footer from './components/Footer';
import InternationalNews from './components/InternationalNews';

function App() {
  return (

      <div className="App">
        
        <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<HomeNews/>} />
          <Route path="/sports" element={<SportsNews/>} />
          <Route path="/business" element={<BusinessNews/>} />
          <Route path="/education" element={<EducationNews/>} />
          <Route path="/politics" element={<PoliticsNews/>} />
          <Route path="/international" element={<InternationalNews/>} />
        </Routes> 
        <Footer/> 
    </Router>
    </div>
  );
}

export default App;
