import React, { Component } from 'react'
import { connect } from "react-redux";
// import { firestore } from "firebase";
import { handleSignUp } from "../../actions/authAction"; 
import { handleCreateRisk } from "../../actions/riskAction";
import diagnosisReducer from '../../reducers/diagnosisReducer';
import { Redirect } from "react-router-dom";

class RiskPage extends Component {

    state = {
        question1 : '',
        question2 : '',
        question3 : '',
        question4 : '',
        question5 : '',
        question6 : '',
        question7 : '',
        question8 : '',
        question9 : '',
    }


    handleChange = (e) => {
        // console.log(e)
        this.setState({
            [e.target.name] : (e.target.value) 
        })
        console.log('name', e.target.name)
        console.log('value', e.target.value)

    }

    submitForm = (e) => {
        
        const {createRisk, auth} = this.props
        e.preventDefault()
        // createDiagnosis(this.state)
        let q1 = true
        let q2 = true
        let q3 = true
        if (this.state.question1 === 'no'){
            q1 = false
        }
        if (this.state.question2 === 'no'){
            q2 = false
        }
        if (this.state.question3 === 'no'){
            q3 = false
        }

        const request1 = ({
            question1 : q1,
            question2 : q2,
            question3 : q3,
            question4 : parseInt(this.state.question4),
            question5 : parseInt(this.state.question5),
            question6 : parseInt(this.state.question6),
            question7 : parseInt(this.state.question7),
            question8 : parseInt(this.state.question8),
            question9 : parseInt(this.state.question9),
        })

        createRisk(request1)

        console.log('props', this.state)
        console.log('req', request1)

    }

    render() {

        const {authError,riskResult, auth} = this.props
        authError && console.log('error',authError)
        // console.log('result', diagnosisResult)

        if(!auth.uid) return <Redirect to = '/signin'/>

        return (
                <div className="container">
                <div className = "container" style = {{marginTop : 100}}></div>
                <form onSubmit = {this.submitForm} className="white">
                    <h1 className = "grey-text text-darken-3">Diagnosis</h1>
                    <div className="input-field">
                        
                        <h4 className = "grey-text text-darken-3">Have you ever had breast cancer or received radiation therapy to your chest?</h4>

                        <label htmlFor="texture_worst">yes</label>
                        <input 
                            type="radio"
                            name="question1"
                            id= "texture_worst"
                            value = "yes"
                            checked = {this.state.question1 === "yes"}
                            onChange = {this.handleChange}
                            style = {{margin : 10}}
                        />
                        <label htmlFor="texture_worst">No</label>
                        <input 
                            type="radio"
                            name="question1"
                            id= "texture_worst"
                            value = "no"
                            checked = {this.state.question1 === "no"}
                            onChange = {this.handleChange}
                            style = {{margin : 10}}
                        />
                    </div>
                    <div className="input-field">
                        
                        <h4 className = "grey-text text-darken-3">Have you ever been tested positive for breast cancer genes BRCA1 or BRCA2?</h4>

                        <label htmlFor="texture_worst">yes</label>
                        <input 
                            type="radio"
                            name="question2"
                            id= "texture_worst"
                            value = "yes"
                            checked = {this.state.question2 === "yes"}
                            onChange = {this.handleChange}
                            style = {{margin : 10}}
                        />
                        <label htmlFor="texture_worst">No</label>
                        <input 
                            type="radio"
                            name="question2"
                            id= "texture_worst"
                            value = "no"
                            checked = {this.state.question2 === "no"}
                            onChange = {this.handleChange}
                            style = {{margin : 10}}
                        />
                    </div>
                    <div className="input-field">
                        
                        <h4 className = "grey-text text-darken-3">Are you greater than 35 ? </h4>

                        <label htmlFor="texture_worst">yes</label>
                        <input 
                            type="radio"
                            name="question3"
                            id= "texture_worst"
                            value = "yes"
                            checked = {this.state.question3 === "yes"}
                            onChange = {this.handleChange}
                            style = {{margin : 10}}
                        />
                        <label htmlFor="texture_worst">No</label>
                        <input 
                            type="radio"
                            name="question3"
                            id= "texture_worst"
                            value = "no"
                            checked = {this.state.question3 === "no"}
                            onChange = {this.handleChange}
                            style = {{margin : 10}}
                        />
                    </div>
                    <div className="input-field">
                        
                        <h4 className = "grey-text text-darken-3">At what age did your menstrual periods start ?</h4>

                        <label htmlFor="texture_worst">Unknown</label>
                        <input 
                            type="radio"
                            name="question4"
                            id= "texture_worst"
                            value = "3"
                            checked = {this.state.question4 === "3"}
                            onChange = {this.handleChange}
                            style = {{margin : 10}}
                        />
                        <label htmlFor="texture_worst">7 to 11</label>
                        <input 
                            type="radio"
                            name="question4"
                            id= "texture_worst"
                            value = "1"
                            checked = {this.state.question4 === "1"}
                            onChange = {this.handleChange}
                            style = {{margin : 10}}
                        />
                        <label htmlFor="texture_worst">12 to 13</label>
                        <input 
                            type="radio"
                            name="question4"
                            id= "texture_worst"
                            value = "0"
                            checked = {this.state.question4 === "0"}
                            onChange = {this.handleChange}
                            style = {{margin : 10}}
                        />
                        <label htmlFor="texture_worst">Greater than 14</label>
                        <input 
                            type="radio"
                            name="question4"
                            id= "texture_worst"
                            value = "2"
                            checked = {this.state.question4 === "2"}
                            onChange = {this.handleChange}
                            style = {{margin : 10}}
                        />
                    </div>
                    <div className="input-field">
                        
                        <h4 className = "grey-text text-darken-3">What was your age when you had your first baby ?</h4>

                        <label htmlFor="texture_worst">Unknown</label>
                        <input 
                            type="radio"
                            name="question5"
                            id= "texture_worst"
                            value = "5"
                            checked = {this.state.question5 === "5"}
                            onChange = {this.handleChange}
                            style = {{margin : 10}}
                        />
                        <label htmlFor="texture_worst">No births</label>
                        <input 
                            type="radio"
                            name="question5"
                            id= "texture_worst"
                            value = "4"
                            checked = {this.state.question5 === "4"}
                            onChange = {this.handleChange}
                            style = {{margin : 10}}
                        />
                        <label htmlFor="texture_worst">less than 20</label>
                        <input 
                            type="radio"
                            name="question5"
                            id= "texture_worst"
                            value = "2"
                            checked = {this.state.question5 === "2"}
                            onChange = {this.handleChange}
                            style = {{margin : 10}}
                        />
                        <label htmlFor="texture_worst">20 to 24</label>
                        <input 
                            type="radio"
                            name="question5"
                            id= "texture_worst"
                            value = "0"
                            checked = {this.state.question5 === "0"}
                            onChange = {this.handleChange}
                            style = {{margin : 10}}
                        />
                        <label htmlFor="texture_worst">25 to 29</label>
                        <input 
                            type="radio"
                            name="question5"
                            id= "texture_worst"
                            value = "1"
                            checked = {this.state.question5 === "1"}
                            onChange = {this.handleChange}
                            style = {{margin : 10}}
                        />
                        <label htmlFor="texture_worst">less than 35</label>
                        <input 
                            type="radio"
                            name="question5"
                            id= "texture_worst"
                            value = "3"
                            checked = {this.state.question5 === "3"}
                            onChange = {this.handleChange}
                            style = {{margin : 10}}
                        />
                    </div>
                    
                    <h4 className = "grey-text text-darken-3">How many of your blood relatives have had breast cancer?</h4>

                        <label htmlFor="texture_worst">No relatives</label>
                        <input 
                            type="radio"
                            name="question6"
                            id= "texture_worst"
                            value = "1"
                            checked = {this.state.question6 === "1"}
                            onChange = {this.handleChange}
                            style = {{margin : 10}}
                        />
                        <label htmlFor="texture_worst">One</label>
                        <input 
                            type="radio"
                            name="question6"
                            id= "texture_worst"
                            value = "2"
                            checked = {this.state.question6 === "2"}
                            onChange = {this.handleChange}
                            style = {{margin : 10}}
                        />
                        <label htmlFor="texture_worst">Greater than one</label>
                        <input 
                            type="radio"
                            name="question6"
                            id= "texture_worst"
                            value = "0"
                            checked = {this.state.question6 === "0"}
                            onChange = {this.handleChange}
                            style = {{margin : 10}}
                        />

                        <h4 className = "grey-text text-darken-3">Have you ever had a breast biopsy?</h4>

                        <label htmlFor="texture_worst">Yes</label>
                        <input 
                            type="radio"
                            name="question7"
                            id= "texture_worst"
                            value = "1"
                            checked = {this.state.question7 === "1"}
                            onChange = {this.handleChange}
                            style = {{margin : 10}}
                        />
                        <label htmlFor="texture_worst">No</label>
                        <input 
                            type="radio"
                            name="question7"
                            id= "texture_worst"
                            value = "0"
                            checked = {this.state.question7 === "0"}
                            onChange = {this.handleChange}
                            style = {{margin : 10}}
                        />
                         <h4 className = "grey-text text-darken-3">If so, How many times?</h4>

                        <label htmlFor="texture_worst">One</label>
                        <input 
                            type="radio"
                            name="question8"
                            id= "texture_worst"
                            value = "1"
                            checked = {this.state.question8 === "1"}
                            onChange = {this.handleChange}
                            style = {{margin : 10}}
                        />
                        <label htmlFor="texture_worst">Greater than one</label>
                        <input 
                            type="radio"
                            name="question8"
                            id= "texture_worst"
                            value = "0"
                            checked = {this.state.question8=== "0"}
                            onChange = {this.handleChange}
                            style = {{margin : 10}}
                        />

                        <h4 className = "grey-text text-darken-3">Did any of them show a typical hyperplasia in the report ?</h4>

                        <label htmlFor="texture_worst">Yes</label>
                        <input 
                            type="radio"
                            name="question9"
                            id= "texture_worst"
                            value = "2"
                            checked = {this.state.question9 === "2"}
                            onChange = {this.handleChange}
                            style = {{margin : 10}}
                        />
                        <label htmlFor="texture_worst">No</label>
                        <input 
                            type="radio"
                            name="question9"
                            id= "texture_worst"
                            value = "1"
                            checked = {this.state.question9 === "1"}
                            onChange = {this.handleChange}
                            style = {{margin : 10}}
                        />
           




                    <h1 className="input-field " style = {{marginBottom : 100}}>
                    <h1 className="red-text center" style ={{margin : 50}}>
                            {   
                                riskResult ? <h1>Your result is  {riskResult}</h1> : null
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
        riskResult : state.riskResult ? state.riskResult.result : null
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp : (newUser) => dispatch(handleSignUp(newUser)),
        createRisk : (risk) => dispatch(handleCreateRisk(risk))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(RiskPage)
