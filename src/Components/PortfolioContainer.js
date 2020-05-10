import React, { Component } from "react";
import NavTabs from "./NavTabs";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

class PortfolioContainer extends Component {
  state = {
    currentPage: "About",
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    let result = "";
    switch (this.state.currentPage) {
      case "About":
        result = <About />;
        break;
      case "Portfolio":
        result = <Portfolio />;
        break;
      case "Contact":
        result = <Contact />;
        break;
      default:
        result = <About />;
        break;
    }
    return result;
  };

  render() {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>
    );
  }
}

export default PortfolioContainer;
