import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function Registration() {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleSubmit = () => {
    console.log('userdattta', name, password);
    const user = { name, password }
    dispatch({
      type: "register",
      payload: user
    })
    navigate("/login")

  }

  return (

      <div style={{ width: "40%", margin: "10% 30%", padding: "20px", border: "1px solid black", borderRadius: "6px" }}>
        <h2 style={{ textAlign: "center" }}>REGISTER</h2>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" onChange={(e) => setName(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>

        <Button variant="primary" onClick={handleSubmit} style={{ width: "100%" }}>
          Register
        </Button>


      </div>

  )
}

export default Registration