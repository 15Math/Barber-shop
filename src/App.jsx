
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
      
        <div className='scheduling-area' data-aos="zoom-in-right"  >
          <div>
              <p>Tá afim de lançar aquela régua??!!</p>
              <a href="">Agende já</a>
          </div>
        </div>

        <div className='barber' data-aos="flip-right"  data-aos-duration="2000" >
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
            <img src="src/assets/poste-de-barbeiro.png" data-aos="flip-right"/>
            <h1>--Nossos Serviços--</h1>
            <img src="src/assets/poste-de-barbeiro.png" data-aos="flip-right"/>
         </div>
         <div className='services' >
          <div data-aos="fade-right" data-aos-duration="1000">
            <div>
              <img src="src\assets\barba.png" alt="" />
              <div className='service-type barba'>
                <p>Barba e sombrancelha</p>
              </div>
            </div>
            <div className='services-list' >
              <p>Corte Tesoura ------------------- R$25,00</p>
              <p>Corte Tesoura ------------------- R$25,00</p>
              <p>Corte Tesoura ------------------- R$25,00</p>
              <p>Corte Tesoura ------------------- R$25,00</p>
              <p>Corte Tesoura ------------------- R$25,00</p>
              <p>Corte Tesoura ------------------- R$25,00</p>
            </div>
          </div>
          <div data-aos="fade-left" data-aos-duration="1000">
            <div>
              <img src="src\assets\cabelo.png" alt="" />
              <div className='service-type cabelo'>
                <p>Cabelo</p>
              </div>
            </div>
            <div className='services-list'>
              <p>Corte Tesoura ------------------- R$25,00</p>
              <p>Corte Tesoura ------------------- R$25,00</p>
              <p>Corte Tesoura ------------------- R$25,00</p>
              <p>Corte Tesoura ------------------- R$25,00</p>
              <p>Corte Tesoura ------------------- R$25,00</p>
              <p>Corte Tesoura ------------------- R$25,00</p>
            </div>
          </div>
         </div>
      </section>
      <section className='clients-sec'>
        <div className='slogan'>
          <div>
            <div>
              <p>Os cortes mais brabos</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App            