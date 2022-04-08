
const initialState = {
    username: "",
    password: ""
}
export const userReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case "register":
            return {
                ...prevState,
                username: action.payload.name,
                password: action.payload.password

            }
        default: return {
            ...prevState
        }
    }
}