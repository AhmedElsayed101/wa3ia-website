import { CREATE_DIAGNOSIS, LOAD_DIAGNOSIS } from "../actions/diagnosisAction";

const initState = {}

const diagnosisReducer = (state = initState, action) => {

    switch(action.type) {

        case LOAD_DIAGNOSIS:
            const {diagnosisList} = action
            return {
                ...state,
                ...diagnosisList
            }
        case CREATE_DIAGNOSIS:
            console.log(action)
            const {diagnosis} = action
            return {
                ...state,
                diagnosis
            }
            
        default:
            return state
    }
}

export default diagnosisReducer