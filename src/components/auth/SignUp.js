import React, { Component } from 'react'
import { connect } from "react-redux";
import { firestore } from "firebase";
import { handleSignUp } from "../../actions/authAction"; 


class SignUp extends Component {

    state = {
        email : '',
        password : '',
        firstName : '',
        lastName : '',

    }


    handleChange = (e) => {
        // console.log(e)
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    submitForm = (e) => {
        
        const {signUp, auth} = this.props
        e.preventDefault()
        signUp(this.state)

       
            
        // const risk = db.collection('users').doc('UEKmrFdZ6DRZmtvdKnrM7tuRGhw2').collection(diagnosis)
        // risk.get().then((doc) =>{
        //     if (doc.exists) {
        //         console.log("Document data:", doc.data());
        //     } else {
        //         // doc.data() will be undefined in this case
        //         console.log("No such document!");
        //     }
        // }).catch(function(error) {
        //     console.log("Error getting document:", error);
        // });
        // console.log('risk', risk)
        // ???????????????????????????????????????????????????????????
        // const db = firestore();

        // db.collection('users').doc('fT8VWpkcBwe9SPMUc14O7HzZd5l2').collection('predict').add({
        //     hello : 'from the other side'
        // })
        // doc.update({
                // sldkf : 'sdjkf'
        // })
        // const db = firestore();
        // let riskList = {}
        // db.collection("users").doc("UEKmrFdZ6DRZmtvdKnrM7tuRGhw2").collection("diagnosis").get()
        // .then(querySnapshot => {
            
        //     querySnapshot.forEach(doc => {
        //         console.log(doc.id, " => ", doc.data());
        //         riskList[doc.id] = doc.data()
        //         console.log('risklist', riskList)
        //     });
        //     console.log('risklist', riskList)
        //     this.setState((prev) => ({
        //         ...prev,
        //         riskList
        //     }))
        //     console.log('myState', this.state)
        // });
        // ??????????????????????????????????????????????????????????????????
        // db.collection("users/UEKmrFdZ6DRZmtvdKnrM7tuRGhw2/diagnosis").get()
        //     .then((data) => {
        //         console.log('data',data)
        //     })
       
     
        console.log('myState', this.state)
    }

    render() {

        const {authError} = this.props
        authError && console.log('error',authError)
        return (
                <div className="container">
                <div className = "container" style = {{marginTop : 100}}></div>
                <form onSubmit = {this.submitForm} className="white">
                    <h5 className = "grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id= "email" onChange = {this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>                        
                        <input  type="password" id= "password" onChange = {this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>                        
                        <input  type="text" id= "firstName" onChange = {this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>                        
                        <input  type="text" id= "lastName" onChange = {this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className = "btn pink lighten-1 z-depth-0">SignUp</button>
                        <div className="text-danger center">
                            {
                                authError ? <p>{authError}</p> : null
                            }
                        </div>
                    </div>

                </form>

                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth : state.firebase.auth,
        authError : state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp : (newUser) => dispatch(handleSignUp(newUser))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(SignUp)
