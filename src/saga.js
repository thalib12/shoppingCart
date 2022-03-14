import {takeEvery,call,put} from "redux-saga/effects"
import { GET_USERS_FETCH,GET_USERS_SUCCESS } from "./Actions"


function* mySaga(){
 yield takeEvery(GET_USERS_FETCH,workGetUsersFetch)
}

function* workGetUsersFetch(){
   const users=yield call(usersFetch)
   yield put({type: GET_USERS_SUCCESS,users})
}

function usersFetch(){
   return fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json())
}

export default mySaga