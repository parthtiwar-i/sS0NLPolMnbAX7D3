import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router basename='/sS0NLPolMnbAX7D3/'>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/bmi' element={<BMICalculator/>} ></Route>
      </Routes>
    </Router>
  )
}

export default App
