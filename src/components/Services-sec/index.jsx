import './styles.css'

export default function Services(){
    return(
        <section className='services-sec'>
         <div className='services-title'>
            <img src="src/assets/poste-de-barbeiro.png" data-aos="flip-right"/>
            <h1>--Nossos Serviços--</h1>
            <img src="src/assets/poste-de-barbeiro.png" data-aos="flip-right"/>
         </div>
         <div className='services' >
          <div data-aos="zoom-in"  
        data-aos-duration="1000">
            <div>
              <img src="src\assets\barba.png" alt="" />
              <div className='service-type barba'>
                <p>Barba e sombrancelha</p>
              </div>
            </div>
            <div className='services-list cabelo' >
              <p>Corte Tesoura ------------------- R$25,00</p>
              <p>Alinhamento sombrancelha ---- R$25,00</p>
              <p>Alinhamento Barba ------------- R$25,00</p>

            </div>
          </div>
          <div data-aos="zoom-in"  
        data-aos-duration="1000">
            <div>
              <img src="src\assets\cabelo.png" alt="" />
              <div className='service-type cabelo'>
                <p>Cabelo</p>
              </div>
            </div>
            <div className='services-list barba'>
              <p>Corte Tesoura ------------------- R$25,00</p>
              <p>Corte Máquina ------------------ R$20,00</p>
              <p>Corte tesoura e máquina ------- R$35,00</p>
              <p>Reflexo ------------------------- R$45,00</p>
              <p>Desenho ------------------------ R$15,00</p>
              <p>Tingimento --------------------- R$10,00</p>
            </div>
          </div>
         </div>
      </section>
    )
      
}