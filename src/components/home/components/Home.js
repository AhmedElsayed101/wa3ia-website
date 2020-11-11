import React, {Component, Fragment} from "react";
import { connect } from "react-redux";
import { firestoreConnect, withFirebase } from 'react-redux-firebase'
import { compose } from 'redux'
// import firebase from '../../../config/fbConfig'
import HomeBody from "./HomeBody";
import Footer from "./Footer";

class Home extends Component {

    // componentDidMount() {
    //     console.log('userssssss', this.props.firestore)
    //     this.props.firestore.collection('users').doc('BOKtO8AFbiV2y24f3mXTgml4auA2').collection('risk').get()
    //     .then(querySnapshot => 
    //         {

    //         querySnapshot.forEach(doc => {                
    //             console.log(doc.id, " => ", doc.data())
    //         })
    //     }
    //     )
    // }
    render () {
        console.log('users', this.props.myUsers)
        return(
            <Fragment>
                {/* <Preloader/>  */}
                <HomeBody/>   
                <Footer/>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('state', state.firestore)
    return {
        auth : state.firebase.auth,
        // firebase : state.firebase,
        // firestore : state.firestore,
        users : state.firestore.ordered.myUsers
    }
}

const mapDispatchToProps = (dispatch, props) => {
    console.log('props', props)
    console.log('dis', dispatch)
    return(
        {
            // firebase : props.firebase,
            // firestore: props.firestore
        }
    )
    
}

export default compose(
    firestoreConnect([{
        collection : "users",
        // doc : "FF6BCZ1HheZDWflbLDlzv42ATx02",
        // // subcollections : [{collection : "risk"}],
        // storeAs : 'myUsers'
        // collectionGroup: 'risk' 
    }]),
    // withFirebase,
    connect(mapStateToProps),
)(Home)
