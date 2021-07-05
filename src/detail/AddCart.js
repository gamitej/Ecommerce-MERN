import React, { useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import { Button, ListGroup } from "react-bootstrap";
import UserProd from "./UserProd";
import "./Admin.css";

const AddCart = () => {
  // array of product details..
  const [product, setProduct] = useState();
  const [prod, setProd] = useState([]);

  // user-product
  const userId = JSON.parse(localStorage.getItem("user_id"));
 
  const user_prod = ``;

  // fetching the user order product
  useEffect(() => {
    const call = () => {
      fetch(user_prod)
        .then((response) => response.json())
        .then((json) => {
          //console.log(json, "a");
          if (json.status === "Ok") success({ json });
        });
    };
    call();
  }, [localStorage.getItem("user_id")]);

  const success = ({ json }) => {
    if (json.data === null) {
      alert("cart empty");
    } else {
      setProd(json.data.cart.products);
    }
  };

  // total to be paid
  const totalPrice = () => {
    let s = 0;
    prod.map((p) => (s += p.price * p.quantity));
    return s;
  };


  // to make payment..
  const makePayment = (token) => {
    const body = {
      token,
      product,
    };
    const headers = {
      "Content-Type": "application/json",  
    };

    // calling payment api
    return fetch(
      ``,
      {
        method: "POST",
        headers,
        body: JSON.stringify(body),
      }
    )
      .then((response) => {
        console.log("RESPONSE", response);
        const { status } = response;
        console.log(status);
        if (status===400) alert(`Payment Successfull Of $${totalPrice()}`)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="cart">
      <div>
        {
          <>
            {prod.map((p, idx) => (
              <ListGroup className="my-2" key={idx} horizontal>
                {console.log(p.src)}
                <ListGroup.Item>
                  <img
                    src={p.src}
                    style={{
                      width: "2rem",
                      height: "2rem",
                    }}
                  />
                </ListGroup.Item>
                <ListGroup.Item>{p.name}</ListGroup.Item>
                <ListGroup.Item>${p.price}</ListGroup.Item>
                <ListGroup.Item>{p.quantity}</ListGroup.Item>
              </ListGroup>
            ))}
          </>
        }
      </div>
      <p>Total Amount:--{totalPrice()}</p>
      <StripeCheckout
        stripeKey=""
        token={makePayment}
        name="But Product"
        amount={totalPrice()*100}
      >
        <Button variant="success">PAY NOW 👈</Button>
      </StripeCheckout>
    </div>
  );
};

export default AddCart;
