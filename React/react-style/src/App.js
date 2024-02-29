import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

let objcolor = {
  color: "red",
};

function App() {
  return (
    <div className="App">
      <h1 style={{ color: "red" }}>Chirag</h1>
      <h4 className="ravi">Ravi</h4>
      <h3 style={objcolor}>Sunil</h3>
      <div>
        <Container>
          <Row>
            <Col lg={3} className="border bg-info">
              1 of 2
            </Col>
            <Col lg={9} className="border bg-danger">
              2 of 2
            </Col>
          </Row>
          <Row>
            <Col lg={4} className="border bg-warning">
              1 of 4
            </Col>
            <Col lg={8} className="border bg-warning">
              5 of 12
            </Col>
          </Row>
        </Container>

        <div className="container-fluid">
          <div className="row gap-3 justify-content-center">
            <div className="col-xl-3 col-md-5  ">
              <img
                src="https://www.w3schools.com/bootstrap5/sanfran.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="col-xl-3 col-md-5  ">
              <img
                src="https://www.w3schools.com/bootstrap5/sanfran.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="col-xl-3 col-md-5  ">
              <img
                src="https://www.w3schools.com/bootstrap5/sanfran.jpg"
                alt=""
                className="img-fluid"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;