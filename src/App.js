import React, { useState } from 'react';
import './App.css';

import Home from './Pages/Home';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import Footer from './Pages/Footer';

const App = () => {
  const [theme, setTheme] = useState('light');

  const handleThemeChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`App ${theme}`}>
      <Home handleThemeChange={handleThemeChange} theme={theme}/>
      <Skills />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}

export default App;
