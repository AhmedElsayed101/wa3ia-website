import {DIAGNOSIS_RESULT } from "../actions/diagnosisAction";

const initState = null

const diagnosisResultReducer = (state = initState, action) => {

    switch(action.type) {

        case DIAGNOSIS_RESULT :
            const {result} = action
            console.log('result', result)

            return {
                
                ...result
            }
            
        default:
            return state
    }
}

export default diagnosisResultReducer