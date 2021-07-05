import React, { useState } from "react";
import "./Head.css";
import { Navbar, Nav } from "react-bootstrap";
import { HiHome } from "react-icons/hi";
import { LinkContainer } from "react-router-bootstrap";
import { FiLogIn } from "react-icons/fi";
import { AiTwotoneShop } from "react-icons/ai";
import { FaCartPlus } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { ImUserTie } from "react-icons/im";
import { CgDetailsMore } from "react-icons/cg";
import { useHistory } from "react-router-dom";
import { RiLoginCircleLine } from "react-icons/ri";
import { BiLogOut } from "react-icons/bi";

const Head = () => {
  let history = useHistory();
  const [a, setA] = useState(false);

  // checking whether user is logged in or not...
  const show = () => {
    const loggedInUser = localStorage.getItem("user");
    const loggedInAdmin = localStorage.getItem("admin");
    if (loggedInUser) {
      setA(true);
    } else {
      if (loggedInAdmin) {
        setA(true);
      }
    }
  };
  setInterval(show, 500);

  // getting the user name..
  const userName = JSON.parse(localStorage.getItem("user"));

  // to clear the localstorage when user is logouted...
  const Logout = () => {
    localStorage.clear();
    setA(false);
    history.push("/login");
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <LinkContainer to="/">
          <Navbar.Brand>
            <AiTwotoneShop className="icon" />
            PROSHOP
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <LinkContainer to="/">
              <Nav.Link>
                <HiHome className="icon" />
                Home
              </Nav.Link>
            </LinkContainer>
            {localStorage.getItem("user") ? (
              <>
                <Nav.Link>
                  <FiUser className="icon" />
                  {userName}
                </Nav.Link>
                <LinkContainer to="/addtocart">
                  <Nav.Link>
                    <FaCartPlus className="icon" />
                    Cart
                  </Nav.Link>
                </LinkContainer>
                <Nav.Link onClick={Logout}>
                  <BiLogOut className="icon" />
                  Logout
                </Nav.Link>
              </>
            ) : localStorage.getItem("admin") ? (
              <>
                <LinkContainer to="/admin">
                  <Nav.Link>
                    <ImUserTie className="icon" />
                    Admin
                  </Nav.Link>
                </LinkContainer>
                {/* <LinkContainer to="/checkorders">
                  <Nav.Link>
                    <CgDetailsMore className="icon" />
                    Check Orders
                  </Nav.Link>
                </LinkContainer> */}
                <Nav.Link onClick={Logout}>
                  <BiLogOut className="icon" />
                  Logout
                </Nav.Link>
              </>
            ) : (
              <>
                <LinkContainer to="/login">
                  <Nav.Link>
                    <FiLogIn className="icon" />
                    Login
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/signup">
                  <Nav.Link>
                    <RiLoginCircleLine className="icon" />
                    Sign-Up
                  </Nav.Link>
                </LinkContainer>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    </>
  );
};

export default Head;
