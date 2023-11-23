import logo from '../src/img/logo.jpg';
import trasporte from '../src/img/trasporte.jpg';
import ambiente from '../src/img/ambiente.jpg';
import footer from '../src/img/footer.jpeg';
function Footer(){
return(
    <footer>
        <div className="divfooter">
            <img className="imgfooter" src={logo}/>
            <p>Emblema sus Productos</p>
        </div>
        <div className="divfooter">
            <img className="imgfooter" src={trasporte}/>
            <p>trasporte a domicilio</p>
        </div>
        <div className="divfooter">
            <img className="imgfooter" src={ambiente}/>
            <p>Cuidemos el medio ambiente</p>
        </div>
        <img id="imgfooter" src={footer}/>
    </footer>
)
}

export default Footer;

