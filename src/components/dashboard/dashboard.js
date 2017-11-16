import React, {Component} from 'react';
import { Redirect } from 'react-router';
import {connect} from 'react-redux';

export class dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.user.isLoggedIn === false) {
      return <Redirect to ='/' />
    }
    return (<div>MyComponent</div>);
  }
}


const mapStateToProps = (state) => {
  return {
    user: state.userResult
  }
}

export default connect (mapStateToProps, null)(dashboard);
