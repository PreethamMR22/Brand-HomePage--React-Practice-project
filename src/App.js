import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import { useState } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
function App() {
  const [login,setLogin]=useState(false);
  return (
    <>
    <Router>
    
    <Header login={login} setLogin={setLogin} />
    <Hero login={login}/>
    </Router>

    </>
  );
}

export default App;
