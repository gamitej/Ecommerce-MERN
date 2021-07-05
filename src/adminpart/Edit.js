import React, { useEffect, useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Loader from "../detail/Loader";

const Edit = () => {
  const [prodArray, setProdArray] = useState([]);
  const [show, setShow] = useState(true);

  let history = useHistory();
  const api_prod_fetch =
    "";

  useEffect(() => {
    fetch(api_prod_fetch)
      .then((response) => response.json())
      .then((json) => {
        setProdArray(json.data.data);
        if (json.status === "Ok") success();
      });
  }, [prodArray]);

  const success = () => {
    setShow(false);
  };

  const Back = () => {
    history.push("/admin");
  };

  return (
    <>
      {/* <Button onClick={Back} className={show ? 'btn-n':'btn-y'}>Back 👈</Button> */}
      <div className={show ? "show_white" : "btn-y show_prod"}>
        <div>
          <h3> Products To Edit</h3>
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
                      <Link to={`/edit/${p._id}`}>
                        <Button
                          variant="warning"
                          style={{
                            padding: ".5rem 1rem",
                          }}
                        >
                          Edit
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
    </>
  );
};

export default Edit;
