import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore, compose } from "redux";
import { Provider, useSelector } from "react-redux";
import rootReducer from "./reducers";
import middleware from "./middleware"

import { reduxFirestore, createFirestoreInstance } from "redux-firestore";
import { ReactReduxFirebaseProvider, isLoaded } from "react-redux-firebase";

import fbConfig from "./config/fbConfig";

import Preloader from "./components/home/components/Preloader";

const store = createStore(rootReducer,
  compose(
      middleware,
      reduxFirestore(fbConfig),
      // reactReduxFirebase(fbConfig),
    )
  
  )

const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
    // attachAuthIsReady : true
    // enableClaims: true // Get custom claims along with the profile
  }

const rrfProps = {
    firebase :fbConfig,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance // <- needed if using firestore
  }
  
// function AuthIsLoaded({ children }) {
//   const auth = useSelector(state => state.firebase.auth)
//   if (!isLoaded(auth))
//     return <div>
//       loading
//       </div>;
//       return children
// }

ReactDOM.render(

  <Provider store = {store}> 
    <ReactReduxFirebaseProvider {...rrfProps}>
      {/* <AuthIsLoaded> */}
        <App />
      {/* </AuthIsLoaded> */}
    </ReactReduxFirebaseProvider>
  </Provider> 
  ,
  document.getElementById('root')
);

