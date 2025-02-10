import { useState, useEffect } from "react";
import React from "react";
import { Container, Row, Col, Button, Modal, Card } from "react-bootstrap";
import axios from "axios";
import ProjectInfo from "../Components/ProjectInfo/ProjectInfo";
import "bootstrap/dist/css/bootstrap.min.css";

const FetchData = () => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [search, setSearch] = useState("")
  const projectDescription =
    "This is a simple counter project where you can increment, decrement, and reset the count.";

  // Fetch data from API
  const ProductAPI = async () => {
    const ProductAPIResult = await axios.get("https://fakestoreapi.com/products");
    setData(ProductAPIResult.data);
  };

  useEffect(() => {
    ProductAPI();
  }, []);

  const viewHandler = (product) => {
    setSelectedProduct(product);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setSelectedProduct(null);
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <ProjectInfo
              projectName="Fetch Data from API"
              projectDescription={projectDescription}
            />
          </Col>
        </Row>

        {/* Search Bar with Filters */}
        <Row className="mt-5">
          <Col xs={12} className="d-flex flex-wrap justify-content-center align-items-center gap-3 mb-5">
            <input
              type="search"
              placeholder="Search Product"
              className="form-control flex-grow-1"
              value={search}
              style={{ minWidth: "200px" }}
            />
            <Button variant="outline-primary" className="bg-dark">Low Price</Button>
            <Button variant="outline-primary" className="bg-dark">High Price</Button>
            <Button variant="outline-primary" className="bg-dark">Low Rating</Button>
            <Button variant="outline-primary" className="bg-dark">High Rating</Button>
          </Col>
        </Row>

        {/* Product Cards */}
        <Row>
          <Col>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "15px",
                justifyContent: "center",
              }}
            >
              {data.length > 0 ? (
                data.map((product) => (
                  <Card style={{ width: "18rem" }} key={product.id}>
                    <Card.Img variant="top" src={product.image} />
                    <Card.Body>
                      <Card.Title>{product.title}</Card.Title>
                      <Card.Text>${product.price}</Card.Text>
                      <Button variant="primary" onClick={() => viewHandler(product)}>
                        View Details
                      </Button>
                    </Card.Body>
                  </Card>
                ))
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </Col>
        </Row>
      </Container>

      {/* Modal for Product Details */}
      {selectedProduct && (
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedProduct.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.title}
              style={{ width: "100%", marginBottom: "10px" }}
            />
            <p>
              <strong>Price:</strong> ${selectedProduct.price}
            </p>
            <p>
              <strong>Description:</strong> {selectedProduct.description}
            </p>
            <p>
              <strong>Category:</strong> {selectedProduct.category}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default FetchData;



//new componet bana kar data props k threw send kar k
// jaha api call ho rhi he use me api data  set kar k usi component me individual data ko show karwa kar 
// Model ka use kar k
//compare fxn
//filter
  //lazy-loading    