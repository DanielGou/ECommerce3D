import '../App.css';

import Header from '../components/Header'
import Products from '../components/Products'
import Contact from '../components/Contact'

import image3d from '../assets/3d.jpg' 


function Home(){
    return(
           <div className="App">
              <Header/>
              <img src={image3d} alt='homeImg' id='homeIMG'/>
              <Products/>
              <Contact/>
            </div> 
    )
}

export default Home;