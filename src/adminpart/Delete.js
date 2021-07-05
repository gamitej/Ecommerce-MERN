import React, { useEffect, useState } from "react";
import {
  Card,
  Button,
  Row,
  Col,
  ButtonGroup,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import Loader from "../detail/Loader";
import { useHistory } from "react-router-dom";

const Product = () => {
  const [prodArray, setProdArray] = useState([]);
  const [show, setShow] = useState(true);
  let history = useHistory();

  // product fetch api
  const api_prod_fetch =
    "";

  // making call ti the api
  useEffect(() => {
    fetch(api_prod_fetch)
      .then((response) => response.json())
      .then((json) => {
        setProdArray(json.data.data);
        if (json.status === "Ok") success();
      });
  }, [prodArray]);

  // success full login and hidding the loader
  const success = () => {
    setShow(false);
  };

  // deleting the product
  const delRequest = (val) => {
    fetch(
      ``,
      {
        method: "DELETE",
      }
    );
  };

  // back button
  const Back = () => {
    history.push("/admin");
  };

  return (
    <>
      {/* <Button onClick={Back}>Back 👈</Button> */}
      <div className={show ? "show_white" : "btn-y show_prod"}>
        <div>
          <h3>Products To Delete</h3>
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
                      <ButtonGroup>
                        <DropdownButton
                          as={ButtonGroup}
                          title="Delete"
                          id="bg-nested-dropdown"
                          variant="danger"
                        >
                          <Dropdown.Item
                            eventKey="1"
                            onClick={() => delRequest(p._id)}
                            variant="danger"
                            style={{
                              padding: ".5rem 1rem",
                            }}
                          >
                            YES
                          </Dropdown.Item>
                          <Dropdown.Item eventKey="2">NO</Dropdown.Item>
                        </DropdownButton>
                      </ButtonGroup>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        )}
      </div>
    </>
  );
};

export default Product;
