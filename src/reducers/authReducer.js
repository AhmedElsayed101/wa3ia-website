import {LOGIN_ERROR,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    SIGN_UP_SUCCESS,
    SIGN_UP_ERROR
    

} from "../actions/authActions";
const initState = {

authError : null
}

const authReducer = (state = initState, action) => {

    switch(action.type) {
        case LOGIN_ERROR :
            console.log('login failed')

            return {
                ...state,
                authError: 'login failed'
            }
        case LOGIN_SUCCESS :

            console.log('login success')
            return {
                ...state,
                authError : null
            }
        case LOGOUT_SUCCESS:
            console.log('signout success')
            return state
        case SIGN_UP_SUCCESS:
            console.log(SIGN_UP_SUCCESS)
            return{
                ...state,
                authError: null
            }
        case SIGN_UP_ERROR:
            console.log(SIGN_UP_ERROR)
            return{
                ...state,
                authError: action.err.message
            }
        default :
            return state
    }
}


export default authReducer