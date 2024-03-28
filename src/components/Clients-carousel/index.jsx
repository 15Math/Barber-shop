import './styles.css'
import Carousel from 'react-elastic-carousel'
import Item from "./Item";

export default function ClientsCarousel(){

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 768, itemsToShow: 2 },
        { width: 1200, itemsToShow: 4 },
      ];
        
    return(
        <Carousel 
        
        breakPoints = {breakPoints}
        disableArrowsOnEnd={false}
        
        >
            <Item  data-aos="zoom-in"  
        data-aos-duration="2000"><img src="https://miro.medium.com/v2/resize:fit:540/0*lwKKwswH-5tEeWnz.jpg" alt="" /></Item>
            <Item data-aos="zoom-in"  
        data-aos-duration="2000"><img src="https://i.pinimg.com/originals/1e/95/9d/1e959d6f59d4ca0af37daf1008c9901a.jpg" alt="" /></Item>
            <Item data-aos="zoom-in"  
        data-aos-duration="2000"><img src="https://www.sospedro.com.br/wp-content/uploads/2023/02/Corte-americano-cabelo-crespo-7.jpg" alt="" /></Item>
            <Item data-aos="zoom-in"  
        data-aos-duration="2000"><img src="https://i.pinimg.com/736x/e8/9e/d5/e89ed589146e9a68e6de6996257d105a.jpg" alt="" /></Item>
            <Item data-aos="zoom-in"  
        data-aos-duration="2000"><img src="https://cdn.eutotal.com/imagens/corte-do-jaca4.jpg" alt="" /></Item>
            <Item data-aos="zoom-in"  
        data-aos-duration="2000"><img src="https://cdn.eutotal.com/imagens/corte-do-jaca5.jpg" alt="" /></Item>
            <Item data-aos="zoom-in"  
        data-aos-duration="2000"><img src="https://cdn.eutotal.com/imagens/corte-do-jaca8.jpg" alt="" /></Item>
            <Item data-aos="zoom-in"  
        data-aos-duration="2000"><img src="https://www.sospedro.com.br/wp-content/uploads/2023/02/Design-sem-nome.jpg" alt="" /></Item>
            <Item data-aos="zoom-in"  
        data-aos-duration="2000"><img src="https://i.pinimg.com/736x/01/02/ee/0102ee87d095bddc66fe4cca9b6822d4.jpg" alt="" /></Item>
        </Carousel>
    )
}
