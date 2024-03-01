import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col, Container, Row } from "react-bootstrap";

let objcolor = {
  color: "red",
};

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col lg={3} className='border border-danger'>1 of 2</Col>
          <Col lg={9} className='border border-danger'>2 of 2</Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
      <Row>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <h1 style={{ color: "red" }}>Chirag</h1>
      <h4 className="ravi">Ravi</h4>
      <h3 style={objcolor}>Sunil</h3>
      <div>
        <div className="container-fluid">
          <div className="row gap-3 justify-content-center">
            <div className="col-xl-3 col-md-5">
              <img
                src="https://www.w3schools.com/bootstrap5/sanfran.jpg"
                alt=""
                className="img-fluid"
              ></img>
            </div>
            <div className="col-xl-3 col-md-5">
              <img
                src="https://www.w3schools.com/bootstrap5/sanfran.jpg"
                alt=""
                className="img-fluid"
              ></img>
            </div>
            <div className="col-xl-3 col-md-5">
              <img
                src="https://www.w3schools.com/bootstrap5/sanfran.jpg"
                alt=""
                className="img-fluid"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
