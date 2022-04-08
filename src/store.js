
import { applyMiddleware, combineReducers, createStore } from "redux"
import createSagaMiddleware from "@redux-saga/core"
import thunk from "redux-thunk"
import { userReducer } from "./reducers/userReducer"
import productReducer from "./reducers/productReducer"
import { rootSaga } from "./saga/rootSaga"
import productSaga from "./saga/productsSaga"
import { cartReducer } from "./reducers/cartReducer"


const appReducer = combineReducers({
    products: productReducer,
    user: userReducer,
    cart:cartReducer
})

const sagaMiddleware = createSagaMiddleware()
const store = createStore(appReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(productSaga)

export default store