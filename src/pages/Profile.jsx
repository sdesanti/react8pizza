import { Button, Col, Form } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import { useUser } from '../context/UsuarioContexto'

const Profile = () => {
  const { token } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);
  
  return (
    <div>
      <div className="container-fluid profile">
      <div className="row vw-100 justify-content-center align-items-center">
        <div className="col-3 bg-primary p-5">
          <Form className="bg-light p-5">
            <Form.Label column="lg">Info</Form.Label>
            <Form.Group className="my-3" as={Col} md="12">
              <Form.Label>Usuario:</Form.Label>
                <Form.Control
                  placeholder="john.bonachon@mail.com"
                  disabled
                />
            </Form.Group>

            <Button type="submit" className="my-3" variant="dark">
              <Link to="/" className="text-white ms-3 text-decoration-none">
                Cerrar Sesión
              </Link>
            </Button>
          </Form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Profile
