import { useState } from 'react'

import './App.css'
import Login from './Pages/Login'
import Header from './Pages/Header'
import Footer from './Pages/Footer'
import Content from './Pages/Content'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    < Content/>
    < Footer/>
    </>
  )
}

export default App
