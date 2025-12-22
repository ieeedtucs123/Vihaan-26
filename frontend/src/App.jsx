import { useState } from 'react'
import Landing from './components/Landing.jsx'
<<<<<<< HEAD
import Intro from './components/Loader.jsx'
import Tracks from './components/Tracks.jsx'
=======
import Landing2 from './components/Landing2.jsx'
>>>>>>> main
import './App.css'

function App() {
 
   const [showIntro, setshowIntro] = useState(true);

  return (
    <>
     {showIntro && (
    <div id='loader'>
      <Intro onComplete={() => {
        console.log('Intro complete!');
        setshowIntro(false)}} />
    </div>
     )}
     {!showIntro && (
    <div id='landing'>
      <Landing></Landing>
    </div>
<<<<<<< HEAD
    
     )}
     <div id='tracks'>
      <Tracks></Tracks>
=======
    <div id='landing2'>
      <Landing2></Landing2>
>>>>>>> main
    </div>
    </>
  )
}

export default App
