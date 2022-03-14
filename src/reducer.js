import { GET_USERS_FETCH, GET_USERS_SUCCESS } from "./Actions";

export const reducer=(previousState={users:[],status:""},action)=>{
    switch(action.type){

       case GET_USERS_SUCCESS:
           return{
               ...previousState,
               users:action.users,
               status:"Success"
           }
        case GET_USERS_FETCH:
            return{
                ...previousState,
                status:"fetching"
            }
        default:
            return{
                ...previousState,
                
            }
    }
}