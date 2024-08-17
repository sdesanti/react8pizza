import 'bootstrap/dist/css/bootstrap.min.css';
import pizzaPP from '../assets/img/pizzaPP.jpg';


const Header = () => {
  return (
    <div>
        <div className="header-container">
            <img src={pizzaPP} alt="Pizza" className="img-fluid" />
            <div>
            <h1>Pizzería Mamma Mia</h1>
            <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
            </div>
        </div>
    </div>
  )
}

export default Header;
