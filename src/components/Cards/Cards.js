import './Cards.css'
import { Link } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Cards(props){

    let arrayIMG = props.image

    return(
        <div>
            <div className='card'>
                <Link id='linkArea' to={`/${props.link}`}>

                <Carousel  showThumbs={false} autoPlay={true} infiniteLoop={true}>
                    { arrayIMG.map((item)=>{
                        return <img src={item} alt='img' id="img"/>
                    }) }
                </Carousel>
                <div className='title'>{props.title}</div>
                <div>R${props.price} cada unidade</div>
                <div className='text'>{props.text}</div>
                </Link>
            </div>
        </div>
        
    )
}

export default Cards;