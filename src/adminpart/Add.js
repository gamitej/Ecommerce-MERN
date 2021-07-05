import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./Add.css";

const Add = () => {
  let history = useHistory();
  const [val, setVal] = useState({
    name: "",
    brand: "",
    description: "",
    price: "",
    countInStock: "",
    category: "",
    src: ""
  });
  const Back = () => {
    history.push("/admin");
  };
  const add_prod_api =
    "";
  // admin login request
  const addProduct = ({ x }) => {
    fetch(add_prod_api, {
      method: "POST",
      body: JSON.stringify(x),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        let a = json.status;
        if (a === "Ok") success();
        else fail({ json });
      });
  };

  // login is failed
  const fail = ({ json }) => {
    alert(json.message);
  };

  // Product Added
  const success = () => {
    alert("Product Added");

    // to reset the form
    setVal({
      name: "",
      brand: "",
      description: "",
      price: "",
      countInStock: "",
      category: "",
      src: ""
    });
    //console.log(y);
  };
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    //console.log(name, value);
    setVal({ ...val, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(val);
    let x = val;
    addProduct({ x });
  };

  return (
    <div>
      <Button onClick={Back}>Back 👈</Button>
      <div className="add_prod">
        <form onSubmit={handleSubmit}>
          <h3>add products</h3>
          <label>
            Name:-
            <br />
            <input
              type="text"
              autoComplete="off"
              name="name"
              placeholder="Enter your name"
              onChange={handleInput}
              value={val.name}
            />
          </label>
          <br />
          <br />
          <label>
            Brand:-
            <br />
            <input
              type="text"
              autoComplete="off"
              name="brand"
              placeholder="Enter brand"
              onChange={handleInput}
              value={val.brand}
            />
          </label>
          <br />
          <br />
          <label>
            Description:-
            <br />
            <input
              type="text"
              autoComplete="off"
              name="description"
              placeholder="Enter description"
              onChange={handleInput}
              value={val.description}
            />
          </label>
          <br />
          <br />
          <label>
            Price:-
            <br />
            <input
              type="text"
              autoComplete="off"
              name="price"
              placeholder="Enter price"
              onChange={handleInput}
              value={val.price}
            />
          </label>
          <br />
          <br />
          <label>
            Count Of Product:-
            <br />
            <input
              type="text"
              autoComplete="off"
              name="countInStock"
              placeholder="Enter count of product"
              onChange={handleInput}
              value={val.countInStock}
            />
          </label>
          <br />
          <br />
          <label>
            Categories:-
            <br />
            <input
              type="text"
              autoComplete="off"
              name="category"
              placeholder="Enter categories"
              onChange={handleInput}
              value={val.category}
            />
          </label>
          <br />
          <br />
          <label>
            Source:-
            <br />
            <input
              type="text"
              autoComplete="off"
              name="src"
              placeholder="Enter source"
              onChange={handleInput}
              value={val.src}
            />
          </label>
          <br />
          <br />
          <Button variant="success" className="btnn" type="submit">
            ADD
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Add;
