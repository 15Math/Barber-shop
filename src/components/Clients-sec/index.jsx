import './styles.css'
import ClientsCarousel from '../Clients-carousel'

export default function Clients(){
    return(
        <section className='clients-sec'>
        <div className='slogan'>
          <div>
            <div>
              <p>Os cortes mais brabos</p>
            </div>
          </div>
        </div>
        <ClientsCarousel/>
      </section>
    )
}