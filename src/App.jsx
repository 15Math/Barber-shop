import Header from './components/Header'
import Scheduling from './components/Scheduling'
import Services from './components/Services'
import Clients from './components/Clients'

import './App.css'

function App() {
  return (
    <>

      <Header/>
      <Scheduling/>
      <div className='division'>
        <div>
        </div>
      </div>
      <Services/>
      <Clients/>
      
    </>
  )
}

export default App            