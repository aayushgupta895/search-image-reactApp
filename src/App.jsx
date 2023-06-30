import { useState, useEffect} from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ShowLargeImg from './components/showLargeImg'
import Home from './pages/Home'
import { ContextProvider } from './hooks/ContextProvider'

function App() {

  
  const [ind, setInd] = useState(0) 
  const [largeImg, setLargeImg] = useState([])
  // const [largeImgArr, setLargeImgArr] = useState([]) 
  
  const apiKey = import.meta.env.VITE_API_KEY

  // const [imageUrl, setImageUrl] = useState('')
  
  

  return (
    <>
      <ContextProvider>
        <Routes>
          <Route  path='/' element={<Home setInd={setInd} setLargeImg={setLargeImg}/>}/>
          <Route exact path='/large-image' element={<ShowLargeImg largeImgPath={largeImg[ind]}/>}/>
        </Routes>
      </ContextProvider>
      
      
    </>
  )
}

export default App
