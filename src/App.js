import './App.css';
import ProgramList from './components/ProgramList';

function App() {

  return (
    <div className="App">
      <h1>Diepvries teller Jumbo Balen</h1> 
      <div className="container">
        <ProgramList/>
      </div>
      <footer>
        <p>Created by <a target='_blank' rel="noreferrer" href='https://rubenboone.netlify.app/'>Ruben</a></p>
      </footer>
    </div>
  );
}

export default App;
