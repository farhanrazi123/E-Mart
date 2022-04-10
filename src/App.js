import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar/>
    
    <Home/>
    </>

  );
}

export default App;
