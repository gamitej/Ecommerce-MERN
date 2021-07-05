import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./user.css";

const Signup = () => {
  let history = useHistory();
  const [val, setVal] = useState({ name: "", username: "", password: "" });

  const api_user_add =
    "";

  // user add request
  const userAdd = ({ x }) => {
    fetch(api_user_add, {
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
    alert(json.message ,'😩');
  };

  // login is successfull
  const success = () => {
    alert('Signup Successfull 😊')
    history.push("/login");
  };

  // user input
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setVal({ ...val, [name]: value });
  };

  // final form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    let x = val;
    userAdd({ x });
  };
  return (
    <div className='main'>
      <div className="main_1">
        <form onSubmit={handleSubmit}>
          <h3 className='title'>Signup</h3>
          <label>
            Name:-
            <br />
            <input
              type="text"
              autoComplete="off"
              name="name"
              placeholder="Enter name"
              onChange={handleInput}
              value={val.name}
            />
          </label>
          <br />
          <br />
          <label>
            Username:-
            <br />
            <input
              type="text"
              autoComplete="off"
              name="username"
              placeholder="Enter  username"
              onChange={handleInput}
              value={val.username}
            />
          </label>
          <br />
          <br />
          <label>
            Password:-
            <br />
            <input
              type="password"
              autoComplete="off"
              name="password"
              placeholder="Enter password"
              onChange={handleInput}
              value={val.password}
            />
          </label>
          <br />
          <br />
          <Button variant="success" className="btnn" type="submit">
            Signup
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
