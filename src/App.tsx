import './App.css'
import Dedication from './components/app/dedication'
import Inicio from './components/app/inicio'
import Navbar from './components/app/navbar'

function App() {

  return (
    <div className='bg-quinuary font-montserrat'>
      <Navbar logo={'logo.svg'} />
      <Inicio />
      <Dedication />
    </div>
  )
}

export default App