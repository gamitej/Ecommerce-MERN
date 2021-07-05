import React, { useEffect, useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import "./Products.css";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import Alertt from "./Alertt";

const Product = () => {
  const [prodArray, setProdArray] = useState([]);
  const [show, setShow] = useState(true);

  // product fetch api..
  const api_prod_fetch =
    "";

  useEffect(() => {
    const call = () => {
      fetch(api_prod_fetch)
        .then((response) => response.json())
        .then((json) => {
          setProdArray(json.data.data);
          if (json.status === "Ok") success();
        });
    };
    call();
  }, [prodArray]);

  //loader is dissable..
  const success = () => {
    setShow(false);
  };

  return (
    <>
      <div className={show ? "main-slider-1" : "main-slider"}>
        {localStorage.getItem("name") ? <Alertt /> : ""}
        {/* this div is for just giving marginTop */}
        <div
          style={{
            height: "2rem",
          }}
        ></div>

        {/* this div is for images slider show */}
        <div className="imgss shadow p-3 mb-5 bg-white rounded">
          {/* <img
            src="/images/shop.jpg"
            className="im shadow p-3 mb-5 bg-white rounded"
          /> */}
        </div>

        <div className={show ? "show_white" : "show_prod"}>

          <div>
            <h3>Products</h3>
          </div>

          {show ? (
            <Loader />
          ) : (
            <div
              style={{
                width: "80%",
                margin: "auto",
              }}
            >
              <Row lg={5}>
                {prodArray.map((p) => (
                  <Col className="col-md-6 col-sm-6 col-lg-4  col-xl-3  py-2">
                    <Card
                      key={p._id}
                      style={{ width: "15rem" }}
                      className="shadow p-3 mb-5 bg-white rounded"
                    >
                      <Card.Img
                        varianAccordionCollapset="top"
                        src={p.src === "xyz" ? "./images/phone.jpg" : p.src}
                      />
                      <Card.Body>
                        <Card.Title>{p.name}</Card.Title>
                        <Card.Title>${p.price}</Card.Title>
                        <Link to={`/product/${p._id}`}>
                          <Button
                            variant="info"
                            style={{
                              padding: ".5rem 1rem",
                            }}
                          >
                            View 👈🏻
                          </Button>
                        </Link>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Product;
