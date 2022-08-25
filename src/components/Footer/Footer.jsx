import { Container, Row, Col } from "react-bootstrap";
import MailchimpForm from "../Mailchimp/MailchimpForm.jsx";
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <p>Renato Boucas</p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer