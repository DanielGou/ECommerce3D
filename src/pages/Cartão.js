import './Pages.css'
import { Link } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel'
import {FaWhatsapp} from 'react-icons/fa'
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
                <Link id='linkHome' to={`/`}>Página principal</Link>
            </div>
            <div className='product'>
                <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} className='carousel'>
                    <img src={card1} alt='cartão'/>
                    <img src={card2} alt='cartão'/>
                    <img src={card3} alt='cartão'/>
                    <img src={card4} alt='cartão'/>
                    <img src={card5} alt='cartão'/>
                </Carousel>
                <div className='info'>
                    <h1><strong>Cartão chaveiro para interruptor de energia</strong></h1>
                    <div><strong>R$2,50</strong> cada unidade</div>
                    <div className='description'><strong>Descrição:</strong> Cartão chaveiro para interruptores saga systems ou para interruptores com acionamento mecânico. </div>
                    <a className='btnWhatsapp' href='https://wa.me/5548996035040'>
                <FaWhatsapp/>
                    <div>Mande uma mensagem</div>
                </a>
                </div>
            </div>
        </div>
    )
}

export default Cartão;