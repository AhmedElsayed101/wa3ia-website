import React, { Component } from 'react'
import { connect } from "react-redux";
// import { firestore } from "firebase";
import { handleSignUp } from "../../actions/authAction"; 
import { handleCreateDiagnosis } from "../../actions/diagnosisAction";
import diagnosisReducer from '../../reducers/diagnosisReducer';
import { Redirect } from "react-router-dom";

class DiagnosisPage extends Component {

    state = {
        texture_worst : '',
        radius_se : '',
        radius_worst : '',
        area_se : '',
        area_worst : '',
        concave_point_mean : '',
        concave_point_worst : '',
    }


    handleChange = (e) => {
        // console.log(e)
        this.setState({
            [e.target.id] : parseFloat(e.target.value) 
        })
    }

    submitForm = (e) => {
        
        const {createDiagnosis, auth} = this.props
        e.preventDefault()
        createDiagnosis(this.state)

        console.log('props', this.props)
    }

    render() {

        const {authError,diagnosisResult, auth} = this.props
        authError && console.log('error',authError)
        console.log('result', diagnosisResult)

        if(!auth.uid) return <Redirect to = '/signin'/>

        return (
                <div className="container">
                <div className = "container" style = {{marginTop : 100}}></div>
                <form onSubmit = {this.submitForm} className="white">
                    <h5 className = "grey-text text-darken-3">Diagnosis</h5>
                    <div className="input-field">
                        <label htmlFor="texture_worst">Texture-worst</label>
                        <input type="number" step="0.0001" id= "texture_worst" onChange = {this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="radius_se">radius-se</label>                        
                        <input  type="number" step="0.0001" id= "radius_se" onChange = {this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="radius_worst">radius-worst</label>                        
                        <input  type="number" step="0.0001" id= "radius_worst" onChange = {this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="area_se">area-se</label>                        
                        <input  type="number" step="0.0001" id= "area_se" onChange = {this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="area_worst">area-worst</label>                        
                        <input  type="number" step="0.0001" id= "area_worst" onChange = {this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="concave_point_mean">concave-points-mean</label>                        
                        <input  type="number" step="0.0001" id= "concave_point_mean" onChange = {this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="concave_point_worst">concave-points-worst</label>                        
                        <input  type="number" step="0.0001" id= "concave_point_worst" onChange = {this.handleChange}/>
                    </div>
                    <h1 className="input-field " style = {{marginBottom : 100}}>
                    <h1 className="red-text center" style ={{margin : 50}}>
                            {   
                                diagnosisResult ? <h1>Your result is  {diagnosisResult}</h1> : null
                            }
                        </h1>
                        <button className = "btn pink lighten-1 z-depth-0">Diagnose</button>
                    </h1>
                </form>
               
                
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth : state.firebase.auth,
        authError : state.auth.authError,
        diagnosis : state.diagnosis,
        diagnosisResult : state.diagnosisResult ? state.diagnosisResult.result : null
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp : (newUser) => dispatch(handleSignUp(newUser)),
        createDiagnosis : (diagnosis) => dispatch(handleCreateDiagnosis(diagnosis))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(DiagnosisPage)
