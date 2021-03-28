import './Pages.css'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

import card1 from '../assets/cartão/card1.jpg'
import card2 from '../assets/cartão/card2.jpg'
import card3 from '../assets/cartão/card3.jpg'
import card4 from '../assets/cartão/card4.jpg'
import card5 from '../assets/cartão/card5.jpg'

function Cartão(){
    return(
        <div>
            <div className='header'>
                <div>ECommerce3D</div>
                <a href='/'>Página principal</a>
            </div>
            <div className='product'>
                <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} className='carousel'>
                    <img src={card1} alt='cartão'/>
                    <img src={card2} alt='cartão'/>
                    <img src={card3} alt='cartão'/>
                    <img src={card4} alt='cartão'/>
                    <img src={card5} alt='cartão'/>
                </Carousel>
                <div>
                    <h1><strong>Cartão chaveiro para interruptor de energia</strong></h1>
                </div>
            </div>
        </div>
    )
}

export default Cartão;