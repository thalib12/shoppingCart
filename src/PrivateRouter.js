import React, { Component } from 'react'
import {Navigate, Outlet, Route } from 'react-router-dom'
import checkLogin from './checkLogin'
import Home from './components/Home'
import Login from './components/Login'

const  PrivateRouter=(props) =>{
	

    const auth=checkLogin()
  

    return auth?<Outlet />: <Navigate to="/login"/> 
  }
export default PrivateRouter