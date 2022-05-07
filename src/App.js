import { Link } from 'react-router-dom';

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
        <p>Andrija Kostic Frontend Test Netlify.</p>
        <Link to='/episodes'>Learn How to Play WoW</Link>
    </div>
  );
}

export default App;
