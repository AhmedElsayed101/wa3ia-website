import axios from "axios";

const LOAD_PREDICTION = 'LOAD_PREDICTION'
const CREATE_PREDICTION = 'CREATE_PREDICTION'


function loadPrediction (predictionList) {
    return {
        type : LOAD_PREDICTION,
        predictionList
    }
}

export function handleLoadPrediction() {

    return (dispatch, getState, {getFirebase, getFirestore}) => {

        // const firebase = getFirebase()
        const firestore = getFirestore()

        const authorId = getState().firebase.auth.uid

        let predictionList = {}
        firestore.collection("users").doc(`${authorId}`).collection("prediction").get()
        .then(querySnapshot => {

            querySnapshot.forEach(doc => {
                console.log(doc.id, " => ", doc.data());
                predictionList[doc.id] = doc.data()
                // console.log('predictionList', predictionList)
            }).then(() => {
                console.log('predictionList', predictionList)
                dispatch(loadPrediction(predictionList))
            }) 
        });

    }

}

function createPrediction (prediction) {

    return {
        type : CREATE_PREDICTION,
        prediction 
    }
}

export function handleCreatePrediction (prediction) {
    return (dispatch, getState, {getFirebase, getFirestore}) => {

        // const firebase = getFirebase()
        const firestore = getFirestore()

        const authorId = getState().firebase.auth.uid

        let prediction_result = ''
        const URL = 'https://wa3ia.herokuapp.com/prediction'
        const request = prediction
        // let response = ''


        axios
            .post(URL, request)
            .then((res) => {
                prediction_result = res.data
            })
            .catch((err) => {
                console.log('prediction-res', err)
            })
            .then(() => {
                firestore.collection('users').doc(`${authorId}`).collection('prediction').add({
                    ...prediction,
                    prediction_result
                })
            })
            .then(() => {
                dispatch(createPrediction({
                    ...prediction,
                    prediction_result
                }))
            })
    }
}


