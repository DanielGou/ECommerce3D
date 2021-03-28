import './style.css'
import {FaWhatsapp} from 'react-icons/fa'

function Contact(){
    return(
        <div className='contact'>
            <div id='title'>Contato</div>
            <div>
                Se você quer imprimir um modelo específico, converse comigo e envie o modelo
            </div>
            <a className='btnWhatsapp' href='https://wa.me/5548996035040'>
                <FaWhatsapp/>
                <div>Mande uma mensagem</div>
            </a>
        </div>
    )
}

export default Contact;
