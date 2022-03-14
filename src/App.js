import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Counter from "./Counter";
import Fileupload from "./Fileupload";
import Home from "./Home";
import Login from "./Login";
import Registration from "./Registration";


function App() {
  return (
    <React.Fragment >
      <Router>
        <Routes>
        
        <Route path={"/"} element={<Registration/>}/>
          <Route path={"/login"} element={<Login/>}/>
          <Route path={"/home"} element={<Home/>}/>
        </Routes>
      </Router>
    
    </React.Fragment>
  );
}

export default App;
