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
import {loginSuccess} from './actions/userAction';


class App extends Component {


  componentWillMount() {

    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    if (user) {
      this.props.loginSuccess(user);
    }
  }

  render() {
    console.log("im at appjs");

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


const mapDispatchToProps = (dispatch) => {
  return {
    loginSuccess: (user) => { dispatch(loginSuccess(user)); },

  }
}


export default connect (null, mapDispatchToProps)(App);
