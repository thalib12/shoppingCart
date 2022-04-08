
import { FETCH_PRODUCT_SUCCESS } from "../actions/actionTypes"

const initialState = {
    products: []
}

export default (prevState = initialState, action) => {
    switch (action.type) {

        case "GET_DATA":
            return {
                ...prevState,
            }

        case FETCH_PRODUCT_SUCCESS:
            return {
                ...prevState,
                products: action.payload
            }

        case "ADD_PRD":
            prevState.products.push(action.payload)
            return {
                ...prevState

            }
        case "DELETE_PRD":
            
            return {
                ...prevState,
                products: prevState.products.filter(item => item.title != action.payload)
            }
        default:
            return {
                ...prevState
            }
    }

}