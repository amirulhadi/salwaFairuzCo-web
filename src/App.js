import * as React from 'react';
import {Routes, Route, Link} from 'react-router-dom'
import Homepage from './views/Home'
import AboutUs from './views/AboutUs';
import Home from './views/Home';
import ProductSvc from './views/ProductServices'
import Career from './views/Career';
import Contact from './views/ContactUs';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="About" element={<AboutUs/>}/>
        <Route path="ProductSvc" element={<ProductSvc/>}/>
        <Route path="Career" element={<Career/>}/>
        <Route path="Contact" element={<Contact/>}/>
      </Routes>
    </div>
    
  );
}

export default App;
