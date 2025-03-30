import { useState } from 'react';
import './App.css';
import Box from './components/Box';

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button onClick={toggleIsOpen}>{ isOpen ? 'Fecha' : 'Abre' }</button>
      { isOpen && <Box /> }
    </>
  );
  
  function toggleIsOpen() {
    setIsOpen((x) => !x);
  }
}

export default App
