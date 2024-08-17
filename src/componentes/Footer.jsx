
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <Container expand="lg" className="bg-dark">
          <Row className="text-white">
            <Col>
            <p>© 2021 - Pizzería Mamma Mia! - Todos los derechos reservados</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  )
}

export default Footer
