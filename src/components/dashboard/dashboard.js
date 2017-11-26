import React, {Component} from 'react';
import { Redirect } from 'react-router';
import {connect} from 'react-redux';
import * as firebase from 'firebase';


export class dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.user = localStorage.getItem('user');
    // console.log(user);

  }





  render() {
    if (!this.user) {
      console.log(this.user);
      return <Redirect to ='/' />
    }
    console.log(this.user);
    return (<div><button type='submit' onClick='this.onClick()'>Log out</button></div>);
  }
}


const mapStateToProps = (state) => {
  return {
    user: state.userResult
  }
}


export default connect (mapStateToProps, null)(dashboard);
