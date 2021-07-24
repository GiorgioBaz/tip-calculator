import { useState } from 'react';

import logo from './logo.svg';
import './App.css';

import Card from './components/UI/Card/Card';
import Bill from './components/Bill/Bill';
import TipPercent from './components/TipPercent/TipPercent';
import PeopleNo from './components/PeopleNo/PeopleNo';
import TipCalc from './components/TipCalc/TipCalc';


function App() {
  const [bill, setBill] = useState(0)

  const handleBillChange = (billVal) => {
    setBill(billVal)
  }

  return (
    <div className='App'>
      <div className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
      </div>
      <Card>
        <div className="col1">
          <Bill value={bill} onChange={handleBillChange} />
          <TipPercent />
          <PeopleNo />
        </div>
        <div className="col2">
          <TipCalc />
        </div>
      </Card>
    </div>
  );
}

export default App;
