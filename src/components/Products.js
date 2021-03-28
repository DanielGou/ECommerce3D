import './style.css'
import Card from './Cards/Cards'

import card1 from '../assets/cartão/card1.jpg'
import card2 from '../assets/cartão/card2.jpg'
import card3 from '../assets/cartão/card3.jpg'
import card4 from '../assets/cartão/card4.jpg'
import card5 from '../assets/cartão/card5.jpg'

function Products(props){
    return(
        <div className='products'>
            <div id='title'>Produtos</div>
            <div>
                <Card 
                    image={[card1,card2, card3,card4, card5]}
                    title='Cartão chaveiro interruptor de energia'
                    price='2,50'
                    text='text'
                    link='cartão'
                />
            </div>
        </div>
    )
}

export default Products;