import React, { Component } from 'react';
import './App.css';
import { Redirect } from 'react-router';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import {connect} from 'react-redux';
import Login from './components/login/login';
import SignUp from './components/signup/signup';
import Dashboard from './components/dashboard/dashboard';
import AdminDashboard from './components/admindashboard/admindashboard';
import Vendor from './components/vendor/vendor';




class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/admindashboard' component={AdminDashboard} />
            <Route exact path='/admindashboard/:id' component={Vendor} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}


export default App;
