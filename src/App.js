import { useState, useEffect } from 'react';

import logo from './logo.svg';
import './App.css';

import Card from './components/UI/Card/Card';
import Bill from './components/Bill/Bill';
import TipPercent from './components/TipPercent/TipPercent';
import PeopleNo from './components/PeopleNo/PeopleNo';
import TipCalc from './components/TipCalc/TipCalc';


function App() {
  const [bill, setBill] = useState(0)
  const [inputPercent, setInputPercent] = useState('')
  const [btnPercent, setBtnPercent] = useState('')
  const [people, setPeople] = useState(0)
  const [tipAmount, setTipAmount] = useState(0)
  const [totalAmount, setTotalAmount] = useState(0)

  const handleBillChange = (billVal) => {
    setBill(billVal)
  }

  const handleTipChange = (tipVal, type) => {
    if (type === 'input') {
      setInputPercent(tipVal)
    } else if (type === "btn") {
      setBtnPercent(tipVal)
    }
  }

  const handlePeopleChange = (peopleVal) => {
    setPeople(peopleVal)
  }

  const handleTipCalculator = () => {
    if (+people <= 0) {
      return
    }

    const inputVal = (inputPercent / 100)
    const tipPercent = +btnPercent === 0 ? inputVal : btnPercent
    const tipCalc = ((+bill * +tipPercent)) / +people
    const totalCalc = ((+bill * +tipPercent) + +bill) / +people

    setTipAmount(tipCalc)
    setTotalAmount(totalCalc)
  }

  useEffect(handleTipCalculator, [btnPercent, inputPercent, bill, people])

  const handleSetTip = (tip) => {
    setBill(tip)
    setPeople(tip)
    setBtnPercent(tip)
    setInputPercent(tip)
    setTipAmount(tip)
    setTotalAmount(tip)
  }

  return (
    <div className='App'>
      <div className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
      </div>
      <Card>
        <div className="col1">
          <Bill value={bill} onChange={handleBillChange} />
          <TipPercent value={inputPercent} setTip={handleTipChange} />
          <PeopleNo value={people} setPeople={handlePeopleChange} />
        </div>
        <div className="col2">
          <TipCalc total={totalAmount} tip={tipAmount} setTip={handleSetTip} />
        </div>
      </Card>
    </div>
  );
}

export default App;
