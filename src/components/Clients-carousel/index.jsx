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
        data-aos-duration="2000"><img src="https://cortesdecabelo2020.com/wp-content/uploads/2022/06/corte-do-jaca.jpg" alt="" /></Item>
            <Item data-aos="zoom-in"  
        data-aos-duration="2000"><img src="https://i.pinimg.com/736x/98/7f/0b/987f0be8a0c17cf587e7c5c30d056a22.jpg" alt="" /></Item>
            <Item data-aos="zoom-in"  
        data-aos-duration="2000"><img src="https://osegredo.com.br/wp-content/uploads/2023/07/4-Corte-do-momento-veja-inspiracoes-de-corte-americano-para-voce-se-jogar.jpg.webp" alt="" /></Item>
            <Item data-aos="zoom-in"  
        data-aos-duration="2000"><img src="https://i.pinimg.com/736x/50/bb/70/50bb70774d7d5c19a9bfeffbc5353928.jpg" alt="" /></Item>
            <Item data-aos="zoom-in"  
        data-aos-duration="2000"><img src="https://st4allthings4p4ci.blob.core.windows.net/allthingshair/allthingshair/wp-content/uploads/sites/2/2022/04/29171633/corte-americano-barba-flat-top-afro-crespo-alto-819x1024.jpg" alt="" /></Item>
            <Item data-aos="zoom-in"  
        data-aos-duration="2000"><img src="https://cdn.eutotal.com/imagens/corte-do-jaca5.jpg" alt="" /></Item>
            <Item data-aos="zoom-in"  
        data-aos-duration="2000"><img src="https://cdn.eutotal.com/imagens/corte-do-jaca8.jpg" alt="" /></Item>
            <Item data-aos="zoom-in"  
        data-aos-duration="2000"><img src="https://portalzoe.com.br/wp-content/uploads/2022/11/e2e56bc4e3193bcff5005e1b16472583.jpg" alt="" /></Item>
            <Item data-aos="zoom-in"  
        data-aos-duration="2000"><img src="https://i.pinimg.com/736x/01/02/ee/0102ee87d095bddc66fe4cca9b6822d4.jpg" alt="" /></Item>
        </Carousel>
    )
}
