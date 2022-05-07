import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Andrija Kostic Frontend Test Netlify.
        </p>
        <Link to='/episodes'>
          Learn How to Play WoW
        </Link>
      </header>
    </div>
  );
}

export default App;
