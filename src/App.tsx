import './App.css'
import Discount from './components/module/Discount'
import DetailseNewPage from './components/templates/DetailseNewPage'
import DiscountDetailse from './components/templates/DiscountDetailse'
import HomePage from './components/templates/HomePage'

import { Routes,Route } from "react-router-dom"

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/NewDetailse/:id' element={<DetailseNewPage/>}/>
        <Route path='/DetailseNewPage/:id' element={<DiscountDetailse/>}/>
      </Routes>
    </>
  )
}

export default App
