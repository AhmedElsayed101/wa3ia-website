import axios from "axios";

const LOAD_RISK = 'LOAD_RISK'
const CREATE_RISK = 'CREATE_RISK'


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

export function handleCreateRisk (risk) {
    return (dispatch, getState, {getFirebase, getFirestore}) => {

        // const firebase = getFirebase()
        const firestore = getFirestore()

        const authorId = getState().firebase.auth.uid

        let risk_result = ''
        const URL = 'https://wa3ia.herokuapp.com/risk'
        const request = risk
        // let response = ''


        axios
            .post(URL, request)
            .then((res) => {
                risk_result = res.data
            })
            .catch((err) => {
                console.log('risk-res', err)
            })
            .then(() => {
                firestore.collection('users').doc(`${authorId}`).collection('risk').add({
                    ...risk,
                    risk_result
                })
            })
            .then(() => {
                dispatch(createRisk({
                    ...risk,
                    risk_result
                }))
            })
    }
}



