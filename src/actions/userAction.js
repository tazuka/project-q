import * as firebase from 'firebase';

export const loginSuccess = (user) => {
  console.log('action 2');
  return {
    type: 'USER_LOGIN_SUCCESS',
    user
  }
}

export const authState = () => {
  type: 'AUTH_STATE_VALID'
}


export const firebaseLogin = (username, password) => {
  console.log('action firebase');
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(username, password)
      .then((response) => {
        firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        localStorage.setItem('user', user);
        dispatch(loginSuccess(user));
      }
    });


    })
      .catch((error)=> {
        console.error("Login Unsuccessful")

    });
  }

}
