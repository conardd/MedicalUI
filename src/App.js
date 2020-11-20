import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import Detail from './pages/detail/detail';
import Landing from './pages/landing/landing';
import Login from './pages/login/login';
import Report from './pages/report/report';
import User from './pages/user/user';
import Register from './pages/register/register';
import UserReport from './pages/userreport/userreport';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <Router>
        <Route path='/login' component={Login}/>
          <Route path='/report' component={Report}/>
          <Route path='/landing' component={Landing}/>
          <Route path='/user' component={User}/>
          <Route path='/register' component={Register}/>
          <Route path='/detail' component={Detail}/>
          <Route path='/userreport' component={UserReport}/>
          
        </Router> 
      </header>
    </div>
  );
}

export default App;
