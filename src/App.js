import React, { useState } from 'react';
import './App.css';

import Home from './Pages/Home';
import Skills from './Pages/Skills';

const App = () => {
  const [theme, setTheme] = useState('light');

  const handleThemeChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`App ${theme}`}>
      <Home handleThemeChange={handleThemeChange} theme={theme}/>
      <Skills />
    </div>
  );
}

export default App;
