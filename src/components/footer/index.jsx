import './styles.css'
import Map from '../Map/index.jsx'

export default function Footer(){
    return(
        <footer>
           <Map/>
           <div className='contact'>
               <h1>Contato</h1>
               <div>
                <p>Rio de Janeiro - RJ</p>
                <p>Rua Lorangeli,323 - Abolição</p>
               </div>
               <div className='remote-contact'>
                    <div>
                        <img src="src\assets\email.png" alt="" />
                        <p>Jorje2319@gmail.com</p>
                    </div>
                    <div>
                        <img src="src\assets\whatsapp.png" alt="" />
                        <p>21 9233-32893</p>
                    </div>
               </div>
               <div>
                    <h2>Horário de funcionamento</h2>
                    <p>Segunda a Sexta - 8h às 20h</p>
               </div>
               <a href="">Agendamento online</a>
           </div>

        </footer>
    )
    
}