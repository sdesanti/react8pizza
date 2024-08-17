import Header from './Header';
import CardPizza from './CardPizza';
import pizzaE from '../assets/img/pizzaE.jpg';
import pizzaN from '../assets/img/pizzaN.jpg';
import pizzaP from '../assets/img/pizzaP.jpg';
import eyes from '../assets/img/eyes.png';


const Home = () => {
  return (
    <>
        <div className='principal-container'>
            <Header></Header>
        </div>

        <div className="pizza-list">
          <CardPizza
            name="Napolitana"
            price={5950}
            ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
            img={pizzaN}
            e={eyes}
          />
          <CardPizza
            name="Española"
            price={6950}
            ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
            img={pizzaE}
            e={eyes}
          />
          <CardPizza
            name="Pepperoni"
            price={6950}
            ingredients={["mozzarella", "pepperoni", "orégano"]}
            img={pizzaP}
            e={eyes}
          />
      </div>

    </>

   
    )
}

export default Home;
