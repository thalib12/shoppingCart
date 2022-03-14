const initialState = {
    products: []
}

export const productReducer = (prevState = initialState, action) => {
    console.log("Actiooon", action)
    switch (action.type) {

        case "GET_DATA":
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
            let newData=prevState.products.filter(item=>item.title!=action.payload)
            return {
            ...prevState,
            products:newData
            }    
        default:
            return {
                ...prevState
            }
    }

}