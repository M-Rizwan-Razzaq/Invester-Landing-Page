import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/menus/Home';      
import About from './Components/menus/About';    
import FAQs from './Components/menus/FAQs';      
import Preview from './Components/menus/Preview';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/preview" element={<Preview />} />
  
      </Routes>
    </Router>
  );
}

export default App;
