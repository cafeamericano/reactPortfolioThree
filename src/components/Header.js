import React, { Component } from "react";

const headerStyle = {
  background: "#e8b6a2",
  color: "black",
  fontFamily: "monoton",
  fontSize: "50px",
  padding: "10px"
};

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark text-center">
        <span className="navbar-brand mb-0 h1">
          <i className="fab fa-react"></i>
          <span> Portfolio</span>
        </span>
      </nav>
    );
  }
}

export default Header;
