import React, { lazy } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import checkLogin from "./checkLogin";
import Home from "./components/Home";
import Login from "./components/Login";
import Registration from "./components/Registration";
import PrivateRouter from "./PrivateRouter";
import Cart from "./reducers/Cart";


function App() {
  return (
    <Router>
     
      <Routes>
        <Route path={"/"} element={<Registration />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={'/'} element={<PrivateRouter />}>
          <Route path={'/home'} element={<Home />} />

        </Route>
       <Route path={"/cart"} element={<Cart/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
