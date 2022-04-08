export const cartReducer=(state={cart:[]},action)=>{
    switch(action.type){
        case "ADD_CART":return{
            ...state,
            cart:[...state.cart,action.payload]
        }
        default:return{
            ...state
        }
    }
}