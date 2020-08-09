import axios from "axios";
import { showLoading, hideLoading } from "react-redux-loading";


export const LOAD_RISK = 'LOAD_RISK'
export const CREATE_RISK = 'CREATE_RISK'
export const RISK_RESULT = 'RISK_RESULT'


function loadRisk (RiskList) {
    return {
        type : LOAD_RISK,
        RiskList
    }
}

export function handleLoadRisk () {

    return (dispatch, getState, {getFirebase, getFirestore}) => {

        // const firebase = getFirebase()
        const firestore = getFirestore()

        const authorId = getState().firebase.auth.uid

        let riskList = {}
        firestore.collection("users").doc(`${authorId}`).collection("risk").get()
        .then(querySnapshot => {

            querySnapshot.forEach(doc => {
                console.log(doc.id, " => ", doc.data());
                riskList[doc.id] = doc.data()
                // console.log('riskList', riskList)
            }).then(() => {
                console.log('riskList', riskList)
                dispatch(loadRisk(riskList))
            }) 
        });

    }

}

function createRisk (risk) {

    return {
        type : CREATE_RISK,
        risk 
    }
}

function riskResult (result) {

    return {
        type : RISK_RESULT,
        result 
    }
}

export function handleCreateRisk (risk) {
    return (dispatch, getState, {getFirebase, getFirestore}) => {

        // const firebase = getFirebase()
        const firestore = getFirestore()

        const authorId = getState().firebase.auth.uid

        let risk_result = ''
        const URL = 'https://wa3ia.herokuapp.com/api/risk'
        const request = risk
        // let response = ''

        console.log('risk', risk)

        dispatch(showLoading())


        axios
            .post(URL, request)
            .then((res) => {
                risk_result = res.data
                console.log('result', risk_result)
                console.log('risk', risk)
            })
            .catch((err) => {
                console.log('risk-res', err)
            })
            .then(() => {
                firestore.collection('users').doc(`${authorId}`).collection('risk').add({
                    ...risk,
                    ...risk_result
                })
            })
            .then(() => {
                dispatch(createRisk({
                    ...risk,
                    ...risk_result
                }))
            }) .then(() => {
                dispatch(riskResult(risk_result))
                dispatch(hideLoading())
            }).catch((err)=> {
                console.log('err', err)
            })
    }
}



