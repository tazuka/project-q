import React, {Component} from 'react';
import { Redirect } from 'react-router';
import * as firebase from 'firebase';


export class signup extends React.Component {
  constructor(props) {
    super(props);

    //Initialize starting state
    this.state = {
      username:"",
      password:"",
      redirect: false,
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

//OnClick event to submit sign up credentials to firebase
  onClick = (e) => {
    firebase.auth().createUserWithEmailAndPassword(this.state.username, this.state.password)
      .then((result, error) => {
        if (error){
          console.log(error)
        } else {
          this.setState({redirect: true})
        }

  })
}

  render() {
    if (this.state.redirect === true) {
      return <Redirect to ='/' />
    }
    return (<div>
              <h1>Become our partner!</h1>
              <div id='wrapper'>
                <h2>Sign Up Here!</h2>
                <div id='loginFields'>
                  <p>User Name:<br />
                    <input type='email' onChange={this.handleUser}/>
                  </p>
                  <p>Password:<br />
                    <input type='Password' onChange={this.handlePassword}/>
                  </p>
                  <button type='button' onClick={this.onClick}>Sign Up</button>
                </div>
              </div>

            </div>);

  }
}



export default signup;
