
import { applyMiddleware, combineReducers, createStore } from "redux"
import createSagaMiddleware from "@redux-saga/core"
import thunk from "redux-thunk"
import { reducer } from "./reducer"
import mySaga from "./saga"
import { userReducer } from "./userReducer"
import { productReducer } from "./productReducer"

// const sagaMiddleware=createSagaMiddleware()




// const store=createStore(reducer,applyMiddleware(sagaMiddleware))
// sagaMiddleware.run(mySaga)
const appReducer = combineReducers({
    products: productReducer,
    user: userReducer
})
const store = createStore(appReducer, applyMiddleware(thunk))
console.log("Storee......", store);
export default store