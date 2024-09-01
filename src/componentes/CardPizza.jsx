import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from "react-bootstrap";

const CardPizza = ({ name, price, ingredients, img }) => {
  const styleCard = { width: '25%', height: '100%', margin: '30px 0px' };
  const styleCardBody = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center'
  };
  return (
    <div className='d-flex flex-row justify-content-center'>
      <Card style={styleCard}>
        <img src={img} alt={name} className="pizza-image" />
        <div className="card-body" style={styleCardBody}>
          <h2 className="pizza-name">{name}</h2>
          <p className="pizza-price">${price}</p>
          <ul className="pizza-ingredients">
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <div className="d-flex flex-column align-items-center">
            <Button className='bg-dark mb-2'>Añadir</Button>
            <Button className='text-dark bg-white'>Ver más</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CardPizza;