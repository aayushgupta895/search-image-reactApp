import { useState, useEffect} from 'react'
import './App.css'
import {  Routes, Route } from 'react-router-dom'
import ShowLargeImg from './components/ShowLargeImg'
import Home from './pages/Home'
import { ContextProvider } from './hooks/ContextProvider'

function App() {

  
  const [ind, setInd] = useState(0) 
  const [largeImg, setLargeImg] = useState([])


  return (
    <>
      <ContextProvider>
        <Routes>
          <Route  exact path='/' element={<Home setInd={setInd} setLargeImg={setLargeImg}/>}/>
          <Route exact path='/large-image' element={<ShowLargeImg largeImgPath={largeImg[ind]}/>}/>
        </Routes>
      </ContextProvider>
      
      
    </>
  )
}

export default App
