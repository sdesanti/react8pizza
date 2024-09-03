import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import PizzaTrozo from "../assets/img/trozo.png";


const Notfound = () => {
  return (
    <>
      <div className="notFound">
          <h3>Pizzería Mamma Mia!</h3>
          <h6>Error 404 - ¡OJO! Metiste mal el dedo. Escribe nuevamente la dirección en tu navegador </h6>
          <Button variant="dark" className="m-3 " type="submit">
            <Image src={PizzaTrozo} />
            <Link to="/" className="text-white ms-3 text-decoration-none">
              Volver al inicio
            </Link>
          </Button>
        </div>
    </>
  )
}

export default Notfound
