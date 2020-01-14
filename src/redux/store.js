import { applyMiddleware, createStore, combineReducers, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase'
import { reduxFirestore, firestoreReducer } from 'redux-firestore'
import firebase from 'firebase/app'
import 'firebase/firestore'

/**
 * reducers
 */
import { selectBranchReducer } from './ducks/branchSelected'

// firebase config file
import firebaseConfig from '../firebase/firebaseConfigDev'

export const configStore = (initialState, history) => {

	firebase.initializeApp(firebaseConfig)

	// config react-redux
	const rrConfig = {
	userProfile: 'users',
	useFirestoreForProfile: true
	}

	// create the enhancer with compose for redux and firestore
	const createStoreWithFirestore = compose(
		reactReduxFirebase(firebase, rrConfig),
		reduxFirestore(firebase)
	)(createStore)

	// reducers
	const rootReducer = combineReducers({
		firebase: firebaseReducer,
		firestore: firestoreReducer,
		branchSelected: selectBranchReducer
    })

    const middlewares = [routerMiddleware(history)]

	const store = createStoreWithFirestore(rootReducer,
		initialState, 
		composeWithDevTools(reactReduxFirebase(firebase), applyMiddleware(...middlewares)))
  
	return store
}