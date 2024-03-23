import React, { useState } from 'react';
import './App.css';

import Home from './Pages/Home';

const App = () => {
  const [theme, setTheme] = useState('dark');

  const handleThemeChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`App ${theme}`}>
      <Home handleThemeChange={handleThemeChange} theme={theme}/>
    </div>
  );
}

export default App;
