import React from 'react'

const checkLogin = () => {
 const user=JSON.parse(localStorage.getItem("user"))
 console.log("user founf",user);
 if(user!=null) return true
 else return false
}

export default checkLogin
