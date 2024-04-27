import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Footer from "./Footer";
import Header from "./Header";

function WomenProduct() {
  return (
    <>
    <Header/>
    <div className="d-flex gap-5 p-5">
      <Card style={{ width: "25rem" }}>
        <Card.Img variant="top" />
        <img
          src="https://cdn.shopify.com/s/files/1/0619/0235/6702/files/T_PURPLE_001_1_360x493.jpg?v=1711782450"
          data-sizes="auto"
          data-aspectratio="0.75"
          data-parent-fit="contain"
          alt=""
        ></img>
        <Card.Body>
          <Card.Title>
            <a href="#" className="link-dark text-decoration-none">
              Purple T-Shirt for Women
            </a>
          </Card.Title>
          <p className="price">Rs.349.00</p>
          <div className="d-flex my-3 gap-2">
            <Button className="btn btn-light border border-2">Small</Button>
            <Button className="btn btn-light border border-2">Large</Button>
            <Button className="btn btn-light border border-2">X-Large</Button>
            <Button className="btn btn-light border border-2">XX-Large</Button>
          </div>
        </Card.Body>
        <Card.Body>
          <div className="box-purple"></div>
          <Button variant="primary">Add Cart</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "25rem" }}>
        <Card.Img variant="top" />
        <img
          src="https://cdn.shopify.com/s/files/1/0619/0235/6702/files/T_GREEN_001_1_360x493.jpg?v=1711782434"
          data-sizes="auto"
          data-aspectratio="0.75"
          data-parent-fit="contain"
          alt=""
        ></img>
        <Card.Body>
          <Card.Title>
            <a href="#" className="link-dark text-decoration-none">
              Green T-Shirt for Women
            </a>
          </Card.Title>
          <p className="price">Rs.349.00</p>
          <div>
            <Button className="btn btn-light border border-2 mx-2 my-2">
              Small
            </Button>
            <Button className="btn btn-light border border-2 mx-2 my-2">
              Medium
            </Button>
            <Button className="btn btn-light border border-2 mx-2 my-2">
              Large
            </Button>
            <Button className="btn btn-light border border-2 mx-2 my-2">
              X-Large
            </Button>
            <Button className="btn btn-light border border-2 mx-2 my-2">
              XX-Large
            </Button>
          </div>
        </Card.Body>
        <Card.Body>
          <div className="box-green"></div>
          <Button variant="primary">Add Cart</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "25rem" }}>
        <Card.Img variant="top" />
        <img
          src="https://cdn.shopify.com/s/files/1/0619/0235/6702/files/T_FEROZI_001_1_360x493.jpg?v=1711782417"
          data-sizes="auto"
          data-aspectratio="0.75"
          data-parent-fit="contain"
          alt=""
        ></img>
        <Card.Body>
          <Card.Title>
            <a href="#" className="link-dark text-decoration-none">
              Ferozi T-Shirt for Women
            </a>
          </Card.Title>
          <p className="price">Rs.349.00</p>
          <div className="d-flex my-3 gap-3">
            <Button className="btn btn-light border border-2">Medium</Button>
            <Button className="btn btn-light border border-2">Large</Button>
          </div>
        </Card.Body>
        <Card.Body>
          <div className="box-Ferozi"></div>
          <Button variant="primary">Add Cart</Button>
        </Card.Body>
      </Card>
    </div>
    <Footer/>
    </>
  );
}
export default WomenProduct;
