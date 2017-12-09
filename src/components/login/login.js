import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Redirect } from 'react-router';
import {firebaseLogin} from '../../actions/userAction';
import {connect} from 'react-redux';
import * as firebase from 'firebase';

import './login.css';

export class login extends React.Component {
  constructor(props) {
    super(props);
    //Initialize starting state
    this.state = {
      username:"",
      password:"",
      user: false,
      isAdmin: false
    }
  }

  componentWillMount() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      this.setState({user: true})
    }


  }


//Onchange event to capture user input
  handleUser = (e) => {
    let username = e.target.value;
    this.setState({username: username});
    console.log(username);
  }
//Onchange event to capture password input
  handlePassword = (e) => {
    let password = e.target.value;
    this.setState({password: password});
    console.log(password);
  }

//OnClick event to submit login credentials to firebase
  onClick = (e) => {
    firebase.auth().signInWithEmailAndPassword(this.state.username, this.state.password)
      .then((response) => {
        console.log(response);
        if (response) {
          localStorage.setItem('user', JSON.stringify(response));
          this.setState({user: true});
          const user = JSON.parse(localStorage.getItem('user'));
          console.log(user.email);
          if (user.email === 'admin@qord.com'){
            this.setState({isAdmin: true});
          }
        }

      })
      .catch((error)=> {
        console.error("Login Unsuccessful")
      });
  }



  render() {
    console.log(this.state.user);
    if (this.state.user === true && this.state.isAdmin === false) {
      return <Redirect to ='/dashboard' />
    } else if (this.state.user === true && this.state.isAdmin === true){
      return <Redirect to ='/admindashboard' />
    }
    return (<div>
              <h1>QordX - No more waiting time!</h1>
              <div id='wrapper'>
                <h2>Login here!</h2>
                <div id='loginFields'>
                  <p>User Name:<br />
                    <input type='email' onChange={this.handleUser}/>
                  </p>
                  <p>Password:<br />
                    <input type='Password' onChange={this.handlePassword}/>
                  </p>
                  <button type='button' className='buttons' onClick={this.onClick}>Login</button>
                  <button type='button'><Link to='/signup' className='buttons'>Sign Up</Link></button>
                </div>
              </div>


            </div>);
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userResult
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    firebaseLogin: (username, password) => { dispatch(firebaseLogin(username, password)); },

  }
}


export default connect (mapStateToProps, mapDispatchToProps)(login);
