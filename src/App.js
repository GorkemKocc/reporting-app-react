import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Login from './layouts/Login';
import SingedOut from './layouts/SingedOut';
import Dashboard from './layouts/Dashboard';

function App() {
  return (
    <div className="App">
      <Dashboard/>
    </div>
  );
}

export default App;
