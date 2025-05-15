import { useState } from 'react'
import {Routes, Route} from "react-router-dom"
import Books from './components/Books'
import SingleBook from './components/SingleBook'
import Login from './components/Login'
import Register from './components/Register'
function App() {
  const [token, setToken] = useState(null)

  return (
    <>
      <Routes>
        <Route path="/" element={<Books />}/>
        <Route path="/singlebook/:id" element={<SingleBook/>} ></Route>
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path="/Register" element={<Register></Register>}></Route>
      </Routes>
    </>
  )
}

export default App
