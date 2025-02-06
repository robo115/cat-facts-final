import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Facts from './pages/Facts';
import About from './pages/About';
import ThemeContext from './context/ThemeContext';
import './styles/global.css';

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={theme}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/facts' element={<Facts />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
