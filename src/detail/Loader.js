import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <>
      <Spinner
        animation="border"
        style={{
          width: "4rem",
          height: "4rem"
        }}
      />
    </>
  );
};

export default Loader;
