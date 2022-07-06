import logo from './logo.svg';
import './App.css';
import ThemeDecider from './components/ThemeDecider';
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import Navbar from './components/Navbar';

function App() {
  const {isLight} = useContext(ThemeContext);
  return (
    <div  className={`App ${isLight ? "light":"dark"}`}>
     <Navbar/>
    </div>
  );
}

export default App;
