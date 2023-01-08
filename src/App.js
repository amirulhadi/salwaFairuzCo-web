import * as React from 'react';
import {Routes, Route, Link} from 'react-router-dom'
import Homepage from './views/Home'
import AboutUs from './views/AboutUs';
import Home from './views/Home';
import ProductSvc from './views/ProductServices'
import Career from './views/Career';
import Contact from './views/ContactUs';
import Bulletin from './views/Bulletin';
import './App.css'

function App() {
  return (
    <div className='grey-bg '>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="About" element={<AboutUs/>}/>
        <Route path="ProductSvc" element={<ProductSvc/>}/>
        <Route path="Career" element={<Career/>}/>
        <Route path="Contact" element={<Contact/>}/>
        <Route path="Bulletin" element={<Bulletin/>}/>
      </Routes>
    </div>
    
  );
}

export default App;
