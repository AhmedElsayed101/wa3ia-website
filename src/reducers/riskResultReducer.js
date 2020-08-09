import {RISK_RESULT } from "../actions/riskAction";

const initState = null

const riskResultReducer = (state = initState, action) => {

    switch(action.type) {

        case RISK_RESULT :
            const {result} = action
            console.log('result', result)

            return {
                
                ...result
            }
            
        default:
            return state
    }
}

export default riskResultReducer