import { useEffect } from 'react'
import './App.css'

//components
import DetailseNewPage from './components/templates/DetailseNewPage'
import DiscountDetailse from './components/templates/DiscountDetailse'
import HomePage from './components/templates/HomePage'
import Regester from './components/templates/Regester'
import AllShopping from './components/templates/AllShopping'

//routers
import { Routes,Route } from "react-router-dom"



function App() {

  useEffect(()=>{
    document.title="فروشگاه کفش زنانه"
  },[])

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/regester' element={<Regester/>}/>
        <Route path='/NewDetailse/:id' element={<DetailseNewPage/>}/>
        <Route path='/DetailseNewPage/:id' element={<DiscountDetailse/>}/>
        <Route path='/AllShopping' element={<AllShopping/>}/>
      </Routes>
    </>
  )
}

export default App
