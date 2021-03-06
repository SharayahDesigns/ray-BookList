
import './App.css';
import {Link, Outlet} from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>Users App</h1>
      <nav style={{
        border: '2px solid green',
      }}
      >
        <Link to='/users'>Users</Link> | {' '}
        <Link to='/about'>About</Link>
      </nav>
      <Outlet/>
    </div>
  );
}

export default App;
