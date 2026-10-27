import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Ambientes from './components/AMBIENTES/Ambientes'
import Cuentadante from './components/CUENTADANTE/Cuentadantes'
import Facilitador from './components/FACILITADOR/Facilitador'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Ambientes/> */}
     {/* <Cuentadante/> */}
     <Facilitador/>

    </>
  )
}

export default App
