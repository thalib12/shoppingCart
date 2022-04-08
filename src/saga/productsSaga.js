import axios from "axios"
import {all, takeEvery,takeLatest,call,put} from "redux-saga/effects"
import { FETCH_PRODUCT_SUCCESS } from "../actions/actionTypes"



const fetchUser = () => axios.get('https://fakestoreapi.com/products')

function* workGetUsersFetch(){
   try {
      const payload=yield call(fetchUser)
      yield put({type:FETCH_PRODUCT_SUCCESS,payload:payload.data})
   } catch (e) {
      console.log(e)
   }
   
}

function* productSaga(){
 yield takeLatest("GET_DATA",workGetUsersFetch)
}

export default productSaga