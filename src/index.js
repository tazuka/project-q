import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { initStore } from './store/store'
import firebase from 'firebase';
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBD5YQdbXN61sK0JpnLSsaHAP0KDp9M1yo",
    authDomain: "project-q-ac6e9.firebaseapp.com",
    databaseURL: "https://project-q-ac6e9.firebaseio.com",
    projectId: "project-q-ac6e9",
    storageBucket: "project-q-ac6e9.appspot.com",
    messagingSenderId: "755380509557"
  };
  firebase.initializeApp(config);


const store = initStore();
store.subscribe( () => {
  const state = store.getState();

})

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();
