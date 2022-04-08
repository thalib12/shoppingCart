import { React, useEffect, useState } from 'react'
import { Navbar, Nav, Container, Button, Modal, Card, Col, Row, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsRequest } from '../actions/action';
import { getData } from '../productsapi';
import {useNavigate} from 'react-router-dom'
import { selectProducts } from '../selectors';
import "./style.css"
import checkLogin from '../checkLogin';

function Home() {
  const [lgShow, setLgShow] = useState(false);
  const [pdname, setPdname] = useState("")
  const [pdimg, setPdimg] = useState("")
  const [pdprice, setPdprice] = useState("")
  const [pdrating, setPdrating] = useState("")
  const dispatch = useDispatch()
  const [cart,setCart]=useState([])
  useEffect(() => {
    dispatch(fetchProductsRequest())
  }, [])

 
const navigate=useNavigate()

  const data = useSelector((state) => {
    console.log("Statet ", state)
    return state
  })

//   const condd=checkLogin()

 console.log("get datttta",data)

  const products = selectProducts(data)
  // const products = []
  // const titles=selectProducts(data).map(item=>item.title)
  // const price=selectProducts(data).map(item=>item.price)
  // console.log("Titles",titles,price);


  console.table(products)

  const addItems = () => {
    const item = { title: pdname, image: pdimg, price: pdprice, rating: { rate: pdrating } }
    console.log("New Item got", item);
    dispatch({
      type: "ADD_PRD",
      payload: item
    })
    setLgShow(false)
    alert("New product added succesfully")
  }

  const deleteItem = (item) => {
    dispatch({
      type: "DELETE_PRD",
      payload: item.title
    })
  }
  function truncate(input) {
    if (input.length > 35) {
      return input.substring(0, 35) + '...';
    }
    return input;
  };

  const logout=()=>{
    localStorage.clear()
    navigate("/login")
  }
   console.log("Cart items..",cart)
  return (
    <div className='maindiv'>
      <>
        <Navbar bg="dark" variant="dark" fixed="top" >
          <Container>
            <Navbar.Brand href="#home">Shopping Cart</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home" onClick={logout}>Logout</Nav.Link>
              <Nav.Link onClick={() => setLgShow(true)} >Add Items</Nav.Link>
              <Nav.Link onClick={()=>navigate("/cart")}  >Cart ({data.cart.cart.length})</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Modal

          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              ADD ITEMS
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div style={{ margin: "30px 40px" }}>

              <Form.Control className="mb-3" type="text" placeholder="Image link" onChange={(e) => setPdimg(e.target.value)} />
              <Form.Control className="mb-3" type="text" placeholder="Enter Product name" onChange={(e) => setPdname(e.target.value)} />
              <Form.Control className="mb-3" type="text" placeholder="Enter Product Price" onChange={(e) => setPdprice(e.target.value)} />
              <Form.Control className="mb-3" type="text" placeholder="Enter Product Rating" onChange={(e) => setPdrating(e.target.value)} />

              <div className="d-grid gap-2">

                <Button variant="secondary" size="lg" onClick={addItems}>
                  Add New Product
                </Button>
              </div>
            </div>

          </Modal.Body>
        </Modal>

      </>


      <Row style={{ marginTop: "50px" }}>
        {products.length > 0 && products.map((item) => (
          <Col key={item.id} style={{ marginTop: "40px" }}>
            <Card className='mainbox' style={{ width: '15rem', height: "400px" }}>
              <button className='cross' onClick={() => deleteItem(item)}>X</button>
              <Card.Img className='img' style={{ height: "200px", padding: "30px" }} variant="top" src={item.image} />
              <Card.Body>
                {/* <Card.Title>{item.title}</Card.Title> */}
                <Card.Text style={{ textAlign: "center", fontWeight: "bold" }}>
                  {truncate(item.title)}
                </Card.Text>
                <div style={{ marginLeft: "40px", position: "absolute", bottom: "10px" }}>
                  <Card.Text style={{ textAlign: "center" }}>
                    Price : {item.price} $
                  </Card.Text>
                  <Card.Text style={(item.rating.rate >= 3) ? { textAlign: "center", color: "green", fontWeight: "bold", fontFamily: "sans-serif" } : { fontWeight: "bold", color: "red", textAlign: "center" }}>
                    Rating : {item.rating.rate} ★
                  </Card.Text>
                  <Button variant="dark" onClick={()=>dispatch({type:"ADD_CART",payload:item})}>Add to cart 🛒</Button>

                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      )


    </div>
  )
}

export default Home