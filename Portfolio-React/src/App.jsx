import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Experience from './Components/Experience/Experience';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
    </div>
  );
}

export default App;