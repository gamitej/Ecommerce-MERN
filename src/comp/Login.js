import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./user.css";

const Login = () => {
  let history = useHistory();
  const [val, setVal] = useState({ username: "", password: "" });
  const [isCheck, setIsCheck] = useState(false);
  const api_user =
    "";
  const api_admin =
    "";

  // user login request
  const userLog = ({ x }) => {
    fetch(api_user, {
      method: "POST",
      body: JSON.stringify(x),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json.data.userId[0]._id);
        let a = json.status;
        if (a === "Ok") success({ json });
        else fail({ json });
      });
  };

  // admin login request
  const adminLog = ({ x }) => {
    fetch(api_admin, {
      method: "POST",
      body: JSON.stringify(x),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        let a = json.status;
        if (a === "Ok") success({ json });
        else fail({ json });
      });
  };

  // login is failed
  const fail = ({ json }) => {
    alert(json.message);
  };

  // login is successfull
  const success = ({ json }) => {
    if (isCheck) {
      console.log("admin");
      localStorage.setItem("admin", JSON.stringify(val.username));
    } else {
      console.log("user");
      localStorage.setItem("user", JSON.stringify(val.username));
      let x = json.data.userId[0]._id;
      localStorage.setItem("user_id", JSON.stringify(x));
    }
    localStorage.setItem("name", JSON.stringify(val.username));
   
    history.push("/");
    //console.log(y);
  };

  // getting values from the user
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    //console.log(name, value);
    setVal({ ...val, [name]: value });
  };

  // checking whether user or admin
  const handleInputCheck = () => {
    setIsCheck(!isCheck);
  };

  // final submittion of form
  const handleSubmit = (e) => {
    e.preventDefault();
    let x = val;
    if (isCheck) {
      adminLog({ x });
    } else {
      userLog({ x });
    }
  };

  return (
    <div className="main">
      <div className="main_1">
        <form onSubmit={handleSubmit}>
          <h3 className="title">Signin</h3>
          <label>
            Username:-
            <br />
            <input
              type="text"
              autoComplete="off"
              name="username"
              placeholder="Enter username"
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
          <label>
            <span id="spn">*For Admin Only</span>
            <br />
            <input
              type="checkbox"
              id="chk"
              value="admin"
              name="check"
              onChange={handleInputCheck}
              checked={isCheck}
            />
          </label>
          <br />
          <br />
          <Button variant="success" className="btnn" type="submit">
            signin
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
