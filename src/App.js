
import './App.css';
import logo from '../src/img/logo.jpg';
import facebook from '../src/img/facebook.png';
import instagram from '../src/img/instagram.png';
import twitter from '../src/img/twitter.png';
import fondo from '../src/img/fondo.jpg'

function App() {
  return (
    <>
    <div id="divlogo">
      <img  src={logo} />
      </div>
      <div id="divsocial">
        <img class="social" src={facebook} data-social="face" alt="" />
        <img class="social" src={instagram} data-social="instagram" alt="" />
        <img class="social" src={twitter} data-social="twtter" alt="" />
      </div>
      <img id="imgheader" src={fondo} alt="Diseño" />
      <div id='nav'>
        <a href="#">home</a>
        <a href="#">Productos</a>
        <a href="#">Ofertas</a>
        <a href="#">Sedes</a>
        <a href="#">Contactanos</a>



      </div>
      </>    
  );
}

export default App;
