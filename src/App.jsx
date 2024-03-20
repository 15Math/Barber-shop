
import './App.css'

function App() {

  return (
    <>

      <header>
        <div className='header'>
          <div>
            <div>
              <div>
                <div>
                  <div className='header-content'>
           
                      <div className='nav'>
                        <a href="">Agendamento</a>
                        <a href="">Serviços</a>
                      </div>

                      <div className='logo'>
                      </div>

                      <div className='nav'>
                        <a href="">Contato</a>
                        <a href="">Clientes</a>
                      </div>
                  
                  </div>
                </div>
              </div>
            </div> 
          </div>
        </div>
      </header>
      <section className='scheduling-sec'>
      
        <div className='scheduling-area'>
          <div>
              <p>Tá afim de lançar aquela régua??!!</p>
              <a href="">Agende já</a>
          </div>
        </div>

        <div className='barber'>
          <div className='red'>
          </div>
          <div className='blue'>
          </div>
          <img src="src\assets\adult-barber-trimming-clients-hair-barbershop.jpeg" alt=""/>
        </div>
        
      </section>

      <div className='division'>
        <div>
        </div>
      </div>

      <section className='services-sec'>
         <div className='services-title'>
            <img src="src/assets/poste-de-barbeiro.png" />
            <h1>--Nossos Serviços--</h1>
            <img src="src/assets/poste-de-barbeiro.png" />
         </div>
      </section>
    </>
  )
}

export default App            