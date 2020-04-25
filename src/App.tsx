import React, { useEffect } from 'react';
import './App.css';
import {Input} from './components/main/input'
import { Label } from './components/main/label';

const App: React.FC = () => {
  useEffect(() => {

  }, [])

  return (
    <div className="App">
      <header>
        <h1>Casa Nova App</h1>
      </header>

      <main>
        <Label text='Nome do valor' targeting='inputname' />
        <Input />
      </main>
    </div>
  );
}

export default App;
