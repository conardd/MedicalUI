import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import './App.css';

import Detail from './pages/detail/detail';
import Landing from './pages/landing/landing';
import Login from './pages/login/login';
import Report from './pages/report/report';
import UsersManagement from './pages/usersManagement/usersManagement';
import Register from './pages/register/register';
import CustomerReports from './pages/customerReports/customerReports';


function App() {
  return (
    <div className="App">
      <header className="App-header">        
        <Router>
        <Route path='/login' component={Login}/>                     
          <Route path='/report' component={Report}/>
          <Route path='/landing' component={Landing}/>
          <Route path='/usersManagement' component={UsersManagement}/>
          <Route path='/register' component={Register}/>
          <Route path='/detail' component={Detail}/>
          <Route path='/CustomerReports' component={CustomerReports}/>     
          <Redirect from="/" to="/login" exact /> 
          
        
        </Router>
      </header>
    </div>
  );
}

export default App;
