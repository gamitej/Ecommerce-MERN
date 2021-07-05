import React from "react";
import "./Admin.css";
import { Link } from "react-router-dom";
import { IoMdAddCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { RiEdit2Fill } from "react-icons/ri";

const Admin = () => {
  return (
    <>
      <div className="ad">
        <div className="sect">
          <div className="section-div">
            <img src="/images/rooney.jpeg" className="img-1" />
            <p>Name: Pradum Raj</p>
            <Link to="/add" style={{ textDecoration: "none" }}>
              <div className="section sec-1">
                <IoMdAddCircle
                  style={{
                    marginBottom: ".2rem",
                    marginRight: ".5rem",
                    fontSize: "1.2rem",
                  }}
                />
                Add Product
              </div>
            </Link>
            <Link to="/edit" style={{ textDecoration: "none" }}>
              <div className="section sec-2">
                <RiEdit2Fill
                  style={{
                    marginBottom: ".2rem",
                    marginRight: ".5rem",
                    fontSize: "1.2rem",
                  }}
                />
                Edit Product
              </div>
            </Link>
            <Link to="/delete" style={{ textDecoration: "none" }}>
              <div className="section sec-3">
                <MdDelete
                  style={{
                    marginBottom: ".2rem",
                    marginRight: ".5rem",
                    fontSize: "1.2rem",
                  }}
                />
                Delete Product
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
