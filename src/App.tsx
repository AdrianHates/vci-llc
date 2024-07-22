import './App.css'
import Contact from './components/app/contact'
import Dedication from './components/app/dedication'
import Inicio from './components/app/inicio'
import Navbar from './components/app/navbar'
import Portfolio from './components/app/portfolio'
import Proyections from './components/app/proyections'

function App() {

  return (
    <div className='bg-quinuary font-montserrat'>
      <Navbar logo={'logo.svg'} />
      <Inicio />
      <Dedication />
      <Proyections />
      <Portfolio />
      <Contact />
    </div>
  )
}

export default App