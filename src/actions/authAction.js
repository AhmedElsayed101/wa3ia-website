export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'
export const SIGN_UP_ERROR = 'SIGN_UP_ERROR'


export const signIn = (creds) => {
    return {
        type : LOGIN_SUCCESS,
        creds
    }
}

const signInError = (err) => {
    return {
        type : LOGIN_ERROR,
        err
    }
}


export const handleSignIn = (creds) => {

    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase()

        firebase.auth().signInWithEmailAndPassword(
            creds.email,
            creds.password
        ).then(() => {
            dispatch(signIn(creds))
        }).catch((err) => {
            dispatch(signInError(err))
        })
    }
}

const signOut = () => {
    return {
        type: LOGOUT_SUCCESS,
    }
}

export const handleSignOut = () => {
    return (dispatch, getState, {getFirebase}) => {

        const firebase = getFirebase()

        firebase.auth().signOut()
            .then(() => {
                dispatch(signOut())
            })
    }
}


// const signUp = (newUser) => {
//     return {
//         type : SIGN_UP_SUCCESS,
//         newUser
//     }
// }

const signUpSuccess = (newUser) => {
    return {
        type : SIGN_UP_SUCCESS,
        newUser
    }
}
const signUpError = (err) => {
    return {
        type : SIGN_UP_ERROR,
        err
    }
}



export const handleSignUp = (newUser) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {

        const firebase = getFirebase()
        const firestore = getFirestore()

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((res)=> {
            firestore.collection('users').doc(res.user.uid).set({
                firstName : newUser.firstName,
                lastName : newUser.lastName,
                initials : newUser.firstName[0] + newUser.lastName[0],   
            })
            
        }).then(() => {
            firebase.auth().currentUser.sendEmailVerification()
        }).then(() => {
            dispatch(signUpSuccess(newUser))
        }).catch((err) => {
            dispatch(signUpError(err))
        })

    }
}
