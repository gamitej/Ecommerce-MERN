import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { Button, Card, ButtonGroup } from "react-bootstrap";
import "./ProductDetail.css";
import Loader from "./Loader";

const ProductDetails = ({ match }) => {
  let prods = [];
  const [count, setCount] = useState(1);
  const [prod, setProd] = useState([]);
  const [show, setShow] = useState(true);
  let history = useHistory();

  // api using id of product
  const apiID = ``;

  useEffect(() => {
    const call = () => {
      fetch(apiID)
        .then((response) => response.json())
        .then((json) => {
          setProd(json.data.data);
          if (json.status === "Ok") success();
        });
    };
    call();
  }, [match.params.id]);

  // hide the loader when successfull login
  const success = () => {
    setShow(false);
  };

  // back button
  const Back = () => {
    history.push("/");
  };

  // give alert if not logined in
  const Call = () => {
    alert("You are not logged-in 😞 ");
    history.push("/login");
  };

  // post to product
  const add_cart_api =
    "";
  // admin login request
  const addCart = ({ x }) => {
    fetch(add_cart_api, {
      method: "POST",
      body: JSON.stringify(x),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        let a = json.status;
        // if (a === "Ok") success();
        // else fail({ json });
      });
  };

  // adding product which user is purchasing
  const checkout = (productId, price, name,src) => {
    const userId = JSON.parse(localStorage.getItem("user_id"));
    let quantity = count;
    let x = { productId, userId, name, price, quantity ,src};
    addCart({ x });
    alert("Product Add To Cart 👍");
  };

  const incCount = () => {
    setCount(count + 1);
  };

  const decCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className={show ? "ind_whites" : "inds"}>
      <Button onClick={Back}>Back 👈</Button>
      <div className={show ? "ind_white" : "ind"}>
        {show ? (
          <Loader />
        ) : (
          <>
            {prod.map((p) => (
              <>
                <div>
                  <h3 className="prd-1">{p.name}</h3>
                </div>
                <div>
                  <Card
                    key={p._id}
                    className="crd shadow p-3 mb-5 bg-white rounded"
                  >
                    <Card.Img
                      varianAccordionCollapset="top"
                      src={p.src === "xyz" ? "./images/phone.jpg" : p.src}
                    />
                    <Card.Body>
                      <Card.Title>{p.description}</Card.Title>
                      <Card.Title>
                        <h3> Price :-${p.price}</h3>
                      </Card.Title>
                    </Card.Body>
                    {localStorage.getItem("user") ? (
                      <ButtonGroup>
                        <Button variant="danger" onClick={decCount}>
                          -
                        </Button>
                        <Button variant="success" onClick={incCount}>
                          +
                        </Button>
                      </ButtonGroup>
                    ) : (
                      ""
                    )}
                    {localStorage.getItem("user") ? (
                      <Button onClick={() => checkout(p._id, p.price, p.name,p.src)}>
                        ADD TO CART {count}
                      </Button>
                    ) : localStorage.getItem("admin") ? (
                      ""
                    ) : (
                      <Button onClick={Call}>ADD TO CART</Button>
                    )}
                  </Card>
                </div>
              </>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
