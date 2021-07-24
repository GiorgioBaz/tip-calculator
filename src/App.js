
import logo from './logo.svg';
import './App.css';

import Card from './components/UI/Card/Card';
import Bill from './components/Bill/Bill';
import TipPercent from './components/TipPercent/TipPercent';
import PeopleNo from './components/PeopleNo/PeopleNo';


function App() {
  return (
    <div className='App'>
      <div className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
      </div>
      <Card>
        <div className="col">
          <Bill />
          <TipPercent />
          <PeopleNo />
        </div>
        <div className="col">
          <p>hi</p>
        </div>
      </Card>
    </div>
  );
}

export default App;
