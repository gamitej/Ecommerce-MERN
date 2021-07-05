import React, { useState } from "react";
import { Alert } from "react-bootstrap";

const Alertt = () => {
  const [show, setShow] = useState(true);

  const Remove = () => {
    setShow(false);
    localStorage.removeItem("name");
  };

  const userName = JSON.parse(localStorage.getItem("user"));

  if (show) {
    return (
      <Alert
        variant="success"
        onClose={Remove}
        dismissible
        style={{
          textAlign: "center",
        }}
      >
        <p>Welcome {userName} 😊</p>
      </Alert>
    );
  }
  return "";
};

export default Alertt;
