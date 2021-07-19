
import logo from './logo.svg';
import './App.css';

import Card from './components/UI/Card/Card';


function App() {
  return (
    <div className='App'>
      <div className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
      </div>
      <Card>
        <div>
          <p></p>
          <p></p>
        </div>
      </Card>
    </div>
  );
}

export default App;
