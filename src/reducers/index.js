import { combineReducers } from "redux";

import authReducer from "./authReducer";
import predictReducer from "./predictReducer";
import diagnosisReducer from "./diagnosisReducer";
import riskReducer from "./riskReducer";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import diagnosisResultReducer from "./diagnosisResultReducer";
import riskResultReducer from "./riskResultReducer";
import { loadingBarReducer } from "react-redux-loading";


const rootReducer = combineReducers({
    auth: authReducer,
    prediction : predictReducer,
    diagnosis : diagnosisReducer,
    diagnosisResult : diagnosisResultReducer,
    riskResult : riskResultReducer,
    loadingBar : loadingBarReducer,
    risk : riskReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer