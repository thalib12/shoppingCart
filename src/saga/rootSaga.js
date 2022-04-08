import {all, fork} from "redux-saga/effects"
import productSaga from "./productsSaga"

export function* rootSaga() {
    yield all([fork(productSaga)])
}