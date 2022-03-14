import { React, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function Login() {

  const store = useSelector((state) => { return state.user })
  console.log("Storegot", store);

  const [name, setName] = useState("")
  const [password, setPassword] = useState("")



  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleSubmit = () => {
    console.log('userdattta', name, password);
    const user = { name, password }
    if (store.username == name && store.password == password) {
      navigate("/home")
    }
    else {
      alert("Invalid login datas")
    }


  }
  return (
    <div>
      <div style={{ width: "40%", margin: "10% 30%", padding: "20px", borderRadius: "20px", boxShadow: "8px 8px 10px 5px" }}>
        <h2 style={{ textAlign: "center" }}>LOGIN</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username :</Form.Label>
            <Form.Control onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter username" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password :</Form.Label>
            <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
          </Form.Group>


          <Button onClick={handleSubmit} variant="success" style={{ width: "100%" }}>
            Login
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default Login