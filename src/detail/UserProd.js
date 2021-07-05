import React, { useState, useEffect } from "react";
import { ListGroup } from "react-bootstrap";

const UserProd = () => {
  const [prod, setProd] = useState([]);
  console.log(prod);
  const userId = JSON.parse(localStorage.getItem("user_id"));
  // user-product
  const user_prod = ``;

  useEffect(() => {
    const call = () => {
      fetch(user_prod)
        .then((response) => response.json())
        .then((json) => {
          console.log(json, "a");
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

  const price = () => {
    let s = 0;
    prod.map((p) => (s += p.price * p.quantity));
   
  };

  return (
    <div>
      {
        <>
          {prod.map((p, idx) => (
            <ListGroup className="my-2" key={idx} horizontal>
             { console.log(p.src)}
               <ListGroup.Item><img src={p.src} style={{
               width:'2rem',height:'2rem'
               }}/></ListGroup.Item>
              <ListGroup.Item>{p.name}</ListGroup.Item>
              <ListGroup.Item>${p.price}</ListGroup.Item>
              <ListGroup.Item>{p.quantity}</ListGroup.Item>
              <br />
              {price()}
            </ListGroup>
          ))}
        </>
      }
    </div>
  );
};

export default UserProd;
