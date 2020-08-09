import React, { Component, Fragment } from 'react'
import { connect } from "react-redux";
import firebase from "firebase/app";
import { handleSignIn, signIn } from "../../actions/authAction";

class SignIn extends Component {

    state = {
        email : '',
        password : ''
    }

    submitForm = (e) => {
        // console.log(e)
        const {signIn} = this.props
        e.preventDefault()
        signIn(this.state)
        console.log(this.state)
      
    }

    handleChange = (e) => {
        // console.log(e)
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    google () {
        let provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          }).then(() => {
            firebase.auth().currentUser.sendEmailVerification()
        })
    }
    render() {

        const {authError} = this.props

        return (

            <Fragment>
            <div className="container">
            <div className = "container" style = {{marginTop : 100}}>
                <form onSubmit = {this.submitForm} className="white">
                    <h5 className = "grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id= "email" onChange = {this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>                        
                        <input  type="password" id= "password" onChange = {this.handleChange}/>
                    </div>
                    <div className="input-field center">
                        <button className = "btn pink lighten-1 z-depth-0 ">Login</button>
                        <p className="text-danger">
                            {authError ? <p>{authError}</p> : null }
                            
                        </p>
                        {/* <p class="text-primary">.text-primary</p> */}
                    </div>
                </form>
                <button onClick = {this.google} className = "btn pink lighten-1 z-depth-0 ">Sign in with google</button>

                </div>
                </div> 
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('state', state)
    return {
        authError : state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        signIn : (creds) => dispatch (handleSignIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (SignIn)
// export default SignIn