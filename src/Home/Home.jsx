import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="App">
      <div className="centered-container">
        <ul className="centered-list">
          <li><Link to="/test1">Test 1</Link></li>
          <li><Link to="/test2">Test 2</Link></li>
          <li>Test 3</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;