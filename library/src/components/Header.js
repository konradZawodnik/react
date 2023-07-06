import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  state = {
    bookstoreName: "Black Books",
    clicked: true,
    textColor: "white",
    backgroundColor: "black",
  };

  handleClick = () => {
    const { clicked } = this.state;
    if (clicked) {
      this.setState({
        bookstoreName: "White Books",
        textColor: "black",
        backgroundColor: "white",
      });
    } else {
      this.setState({
        bookstoreName: "Black Books",
        textColor: "white",
        backgroundColor: "black",
      });
    }
    this.setState({
      clicked: !clicked,
    });
  };

  render() {
    const { textColor, backgroundColor, bookstoreName } = this.state;
    let headerCss = {
      color: textColor,
      backgroundColor,
    };

    return (
      <div className="row header" style={headerCss} onClick={this.handleClick}>
        <center>
          <h1>{bookstoreName}</h1>
        </center>
        <Link to="/admin">
          <button className="btn btn-info goToAdmin">
            Administrator Panel
          </button>
        </Link>
      </div>
    );
  }
}

export default Header;
