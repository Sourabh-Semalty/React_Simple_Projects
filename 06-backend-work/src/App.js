import React,{useState} from 'react';

import './App.css';
import Button from './components/UI/Button/Button';

function App() {
  const [isPara, setIsPara] = useState(false);
  const changeParaHandler = () => {
    console.log('item is clicked')
    setIsPara(prev => !prev);
  }
  return (
    <div className="app">
      <h1>Hi there!</h1>
      {isPara && <p>This is a good term where we can study a lot</p>}
      <Button onClick={changeParaHandler}>{isPara?'Hide Para': 'Show Para'}</Button>
    </div>
  );
}

export default App;
