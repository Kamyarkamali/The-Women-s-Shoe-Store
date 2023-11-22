import './App.css'
import DetailseNewPage from './components/templates/DetailseNewPage'
import HomePage from './components/templates/HomePage'

import { Routes,Route } from "react-router-dom"

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/NewDetailse/:id' element={<DetailseNewPage/>}/>
      </Routes>
    </>
  )
}

export default App
