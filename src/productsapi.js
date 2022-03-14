export const getData = (dispatch) => {
    fetch("https://fakestoreapi.com/products").then(res => res.json()).then(data => {
        console.log("Api data", data)
        dispatch({
            type: "GET_DATA",
            payload: data
        })
    }).catch((e)=>console.log("errrorr",e))

}