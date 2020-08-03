import axios from "axios";

const LOAD_DIAGNOSIS = 'LOAD_DIAGNOSIS'
const CREATE_DIAGNOSIS = 'CREATE_DIAGNOSIS'


function loadDiagnosis (diagnosisList) {
    return {
        type : LOAD_DIAGNOSIS,
        diagnosisList
    }
}

export function handleLoadDiagnosis () {

    return (dispatch, getState, {getFirebase, getFirestore}) => {

        // const firebase = getFirebase()
        const firestore = getFirestore()

        const authorId = getState().firebase.auth.uid

        let diagnosisList = {}
        firestore.collection("users").doc(`${authorId}`).collection("diagnosis").get()
        .then(querySnapshot => {

            querySnapshot.forEach(doc => {
                console.log(doc.id, " => ", doc.data());
                diagnosisList[doc.id] = doc.data()
                // console.log('diagnosisList', diagnosisList)
            }).then(() => {
                console.log('diagnosisList', diagnosisList)
                dispatch(loadDiagnosis(diagnosisList))
            }) 
        });

    }

}

function createDiagnosis (diagnosis) {

    return {
        type : CREATE_DIAGNOSIS,
        diagnosis 
    }
}

export function handleCreateDiagnosis (diagnosis) {
    return (dispatch, getState, {getFirebase, getFirestore}) => {

        // const firebase = getFirebase()
        const firestore = getFirestore()

        const authorId = getState().firebase.auth.uid

        let diagnosis_result = ''
        const URL = 'https://wa3ia.herokuapp.com/diagnosis'
        const request = diagnosis
        // let response = ''


        axios
            .post(URL, request)
            .then((res) => {
                diagnosis_result = res.data
            })
            .catch((err) => {
                console.log('diagnosis-res', err)
            })
            .then(() => {
                firestore.collection('users').doc(`${authorId}`).collection('diagnosis').add({
                    ...diagnosis,
                    diagnosis_result
                })
            })
            .then(() => {
                dispatch(createDiagnosis({
                    ...diagnosis,
                    diagnosis_result
                }))
            })
    }
}



