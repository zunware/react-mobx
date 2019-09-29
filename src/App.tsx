import React from 'react';
import './App.css';
import { CountButton } from './components/CountButton';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <div>
        <CountButton />
      </div>
    </div>
  );
}

export default App;
