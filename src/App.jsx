import Header from './components/Header'
import Scheduling from './components/Scheduling-sec'
import Services from './components/Services-sec'
import Clients from './components/Clients-sec'
import Footer from './components/footer'

import './App.css'

function App() {
  return (
    <>

      <Header/>
      <Scheduling/>
      <div className='division-1'>
        <div>
        </div>
      </div>
      <Services/>
      <Clients/>
      <div className='division-2'>
      </div>
      <Footer/>
    </>
  )
}

export default App            