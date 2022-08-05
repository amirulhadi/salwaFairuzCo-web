import * as React from 'react';
import {Routes, Route, Link} from 'react-router-dom'
import Homepage from './views/Home'
import AboutUs from './views/AboutUs';
import Home from './views/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="About" element={<AboutUs/>}/>
      </Routes>
    </div>
    
  );
}

export default App;
