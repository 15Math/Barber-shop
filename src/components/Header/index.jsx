
import { useState } from "react"
import "./styles.css"

export default function Header(){

   const [showClass, setShowClass] = useState(false);
  
   function toggleShowClass(){
    setShowClass(!showClass);
    console.log(showClass);
   }

    return(
        <header>
          <div>
            <div>
              <div>
                <div>

                  <div className='header-content' >
           
                      <div className={`div1 nav ${showClass ? "show" : ''}`} onClick={toggleShowClass}>
                        <a href="">Agendamento</a>
                        <a href="">Serviços</a>
                      </div>

                      <div className='logo'>
                      </div>

                      <div className={`div2 nav ${showClass ? "show" : ''}`} onClick={toggleShowClass}>
                        <a href="" >Contato</a>
                        <a href="">Clientes</a>
                      </div>

                      <div 
                      className="menu"
                      onClick={toggleShowClass}
                      >
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                      <span></span>
                  </div>

                </div>
              </div>
            </div> 
          </div>
        </header>
    )
}