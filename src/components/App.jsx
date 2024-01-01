import React from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Home'
import BMICalculator from './BMICalculator'
function App() {


  return (
    //basename='/sS0NLPolMnbAX7D3/'
    <Router >
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/bmi' element={<BMICalculator/>} ></Route>
      </Routes>
    </Router>
  )
}

export default App
