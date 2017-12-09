import React, {Component} from 'react';
import { Redirect } from 'react-router';
import {connect} from 'react-redux';
import * as firebase from 'firebase';
import {logoutSuccess} from '../../actions/userAction';


import './dashboard.css';


export class dashboard extends React.Component {

  onClick = (e) => {
      firebase.auth().signOut()
        .then((response) => {
          localStorage.removeItem('user');
          const user = "";
          this.props.logoutSuccess(user);
        })
        .catch(function(error) {

        });
}


  render() {
    console.log('log out')
    console.log(this.props.user);
    if (this.props.user.isLoggedIn === "") {
      console.log(this.props.user);
      return <Redirect to ='/' />
    }
    return (
      <div>
        <div id='topBar'>
          Qord
          <div id='logoutBtn'>
            Welcome {this.props.user.isLoggedIn.email}
            <button type='submit' onClick={this.onClick}>Log out</button>

          </div>
        </div>
        <div id='sideBar'>
          <ul>
            <li>Sales Summary</li>
            <li>Menu</li>
          </ul>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    user: state.userResult

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logoutSuccess: (user) => { dispatch(logoutSuccess(user)); },

  }
}


export default connect (mapStateToProps, mapDispatchToProps)(dashboard);
