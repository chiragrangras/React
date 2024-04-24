import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function MenProduct() {
  return (
    <div className="d-flex gap-5 p-5">
      <Card style={{ width: "25rem" }}>
        <Card.Img variant="top" />
        <img
          src="https://cdn.shopify.com/s/files/1/0619/0235/6702/files/T-PURPLE-01-1_b9a8fae2-9f29-49e2-8f26-c2b75f21a4a0_360x493.jpg?v=1711371184"
          data-sizes="auto"
          data-aspectratio="0.75"
          data-parent-fit="contain"
          alt=""
        ></img>
        <Card.Body>
          <Card.Title>
            <a href="#" className="link-dark text-decoration-none">
              Purple T-Shirt for Men
            </a>
          </Card.Title>
          <p className="price">Rs.349.00</p>
          <div className="d-flex my-3 gap-2">
            <Button className="btn btn-light border border-2">Small</Button>
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
          src="https://cdn.shopify.com/s/files/1/0619/0235/6702/files/T-GREEN-01-1_0a7475f0-ccfd-4cba-8ff3-e7283422e832_360x493.jpg?v=1711371175"
          data-sizes="auto"
          data-aspectratio="0.75"
          data-parent-fit="contain"
          alt=""
        ></img>
        <Card.Body>
          <Card.Title>
            <a href="#" className="link-dark text-decoration-none">
              Green T-Shirt for Men
            </a>
          </Card.Title>
          <p className="price">Rs.349.00</p>
          <div>
            <Button className="btn btn-light border border-2 mx-2 my-2">Small</Button>
            <Button className="btn btn-light border border-2 mx-2 my-2">Medium</Button>
            <Button className="btn btn-light border border-2 mx-2 my-2">Large</Button>
            <Button className="btn btn-light border border-2 mx-2 my-2">X-Large</Button>
            <Button className="btn btn-light border border-2 mx-2 my-2">XX-Large</Button>
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
          src="https://cdn.shopify.com/s/files/1/0619/0235/6702/files/T-FEROZI-01-2_64c08b90-1b0a-489c-b279-b5534067607d_360x493.jpg?v=1711371166"
          data-sizes="auto"
          data-aspectratio="0.75"
          data-parent-fit="contain"
          alt=""
        ></img>
        <Card.Body>
          <Card.Title>
            <a href="#" className="link-dark text-decoration-none">
              Ferozi T-Shirt for Men
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
  );
}

export default MenProduct;
