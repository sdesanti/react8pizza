import { Button, Col, Form } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import { useUser } from '../context/UsuarioContexto'

const Profile = () => {
  const { token, user, logout } = useUser(); 
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/login');  
    }
  }, [token, navigate]);

  const handleLogout = () => {
    logout();  
    navigate('/login');  
  };

  return (
    <div className="container-fluid profile">
      <div className="row vw-100 justify-content-center align-items-center">
        <div className="col-3 bg-primary p-5">
          <Form className="bg-light p-5">
            <Form.Label column="lg">Info</Form.Label>
            <Form.Group className="my-3" as={Col} md="12">
              <Form.Label>Usuario:</Form.Label>
              <Form.Control
                placeholder={user?.email || "Usuario desconocido"} 
                disabled
              />
            </Form.Group>

            <Button
              type="button"
              className="my-3"
              variant="dark"
              onClick={handleLogout} 
            >
              Cerrar Sesión
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
