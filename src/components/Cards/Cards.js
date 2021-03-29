import './Cards.css'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Cards(props){

    let arrayIMG = props.image

    return(
        <div>
            <div className='card'>
                <a id='linkArea' href={`/produtos/${props.link}`}>

                <Carousel  showThumbs={false} autoPlay={true} infiniteLoop={true}>
                    { arrayIMG.map((item)=>{
                        return <img src={item} alt='img' id="img"/>
                    }) }
                </Carousel>
                <div className='title'>{props.title}</div>
                <div>R${props.price} cada unidade</div>
                <div className='text'>{props.text}</div>
                </a>
            </div>
        </div>
        
    )
}

export default Cards;