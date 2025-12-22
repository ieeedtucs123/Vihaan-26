import { useState } from 'react'
import Landing from './components/Landing.jsx'
import Landing2 from './components/Landing2.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <div>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </div> */}
    <div id='loader'>
      Loading screen
    </div>
    <div id='landing'>
      <Landing></Landing>
    </div>
    <div id='landing2'>
      <Landing2></Landing2>
    </div>
    </>
  )
}

export default App
