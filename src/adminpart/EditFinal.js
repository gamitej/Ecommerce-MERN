import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./Add.css";

const EditFinal = ({ match }) => {
  const [prod, setProd] = useState([]);
  const [val, setVal] = useState([]);
  let history = useHistory();
  const Back = () => {
    history.push("/admin");
  };

  const apiID = ``;

  useEffect(() => {
    fetch(apiID)
      .then((response) => response.json())
      .then((json) => {
        //console.log(json.data.data);
        setProd(json.data.data);
      });
  }, [match.params.id]);

  // admin
  const editProduct = ({ x }) => {
    fetch(
      ``,
      {
        method: "PATCH",
        body: JSON.stringify(x),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        let a = json.status;
        console.log(json);
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
    alert("Product Updated");
    history.push("/edit");
  };

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setVal({ ...val, [name]: value });
    //console.log(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(val);
    let x = val;
    editProduct({ x });
  };
  return (
    <>
      <Button onClick={Back}>Back 👈</Button>
      <div className="add_prod">
        {prod.map((p) => (
          <form onSubmit={handleSubmit}>
            <h3>Edit product</h3>
            <h3>{p.name}</h3>
            <label>
              Name Of Product:-
              <br />
              <input
                type="text"
                autoComplete="off"
                name="name"
                placeholder="Enter your name"
                onChange={handleInput}
                defaultValue={p.name}
              />
            </label>
            <br />
            <br />
            <label>
              Brand Of Product:-
              <br />
              <input
                type="text"
                autoComplete="off"
                name="brand"
                placeholder="Enter brand"
                onChange={handleInput}
                defaultValue={p.brand}
              />
            </label>
            <br />
            <br />
            <label>
              Detail About Product:-
              <br />
              <input
                type="text"
                autoComplete="off"
                name="description"
                placeholder="Enter description"
                onChange={handleInput}
                defaultValue={p.description}
              />
              {/* <textarea onChange={handleInput}
                defaultValue={p.description}>

              </textarea> */}
            </label>
            <br />
            <br />
            <label>
              Price (in Number):-
              <br />
              <input
                type="text"
                autoComplete="off"
                name="price"
                placeholder="Enter price"
                onChange={handleInput}
                defaultValue={p.price}
              />
            </label>
            <br />
            <br />
            <label>
              Number Of Products:-
              <br />
              <input
                type="text"
                autoComplete="off"
                name="countInStock"
                placeholder="Enter count of product"
                onChange={handleInput}
                defaultValue={p.countInStock}
              />
            </label>
            <br />
            <br />
            <label>
              Type Of Product :-
              <br />
              <input
                type="text"
                autoComplete="off"
                name="category"
                placeholder="Enter categories"
                onChange={handleInput}
                defaultValue={p.category}
              />
            </label>
            <br />
            <br />
            <label>
              Url Of Image:-
              <br />
              <input
                type="text"
                autoComplete="off"
                name="src"
                placeholder="Enter source"
                onChange={handleInput}
                defaultValue={p.src}
              />
            </label>
            <br />
            <br />
            <Button variant="success" className="btnn" type="submit">
              UPDATE
            </Button>
          </form>
        ))}
      </div>
    </>
  );
};

export default EditFinal;
