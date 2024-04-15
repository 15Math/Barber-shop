import './styles.css'
import barber from '/assets/barber.jpeg'

export default function Scheduling(){
    return(
            <section className='scheduling-sec' id='scheduling'>
        
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
                    <img src={barber} alt=""/>
                </div>
                
            </section>
    )
}