import { React, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData, GET_USERS_FETCH } from './Actions'


function Counter() {

  useEffect(() => {
    dispatch({
      type: GET_USERS_FETCH
    })
  }, [])

  const value = useSelector((state) => { return state.users })
  const value2 = useSelector((state) => { return state.status })
  console.log("Value", value, value2);
  const dispatch = useDispatch()

  return (
    <div style={{ margin: "10% 40%", padding: "30px 30px", border: "1px solid black" }}>
      {
        value.map(item =>
          <h3>{item.name}</h3>)
      }
    </div>
  )
}

export default Counter