import logo from './logo.svg';
import './App.css';
import API from './api/Api';
import ProgramList from './components/ProgramList';

function App() {

  return (
    <div className="App">
      <h1>Diepvries teller Jumbo Balen</h1> 
      <div className="container">
        <ProgramList/>
      </div>
    </div>
  );
}

export default App;
