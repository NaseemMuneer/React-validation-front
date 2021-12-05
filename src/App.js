import { Route, Switch } from 'react-router';
import './App.css';
import HomePage from './component/home/HomePage'
import Login from './component/login/Login'
import Register from './component/register/Register';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      {/* <HomePage /> */}
      <Login />
      {/* <Register/> */}
    </div>
  );
}

export default App;
