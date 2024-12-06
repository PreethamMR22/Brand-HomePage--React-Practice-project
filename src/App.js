import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import { useState } from 'react';
function App() {
  const [login,setLogin]=useState(false);
  return (
    <>
    <Header login={login} setLogin={setLogin} />
    <Hero login={login}/>
    </>
  );
}

export default App;
