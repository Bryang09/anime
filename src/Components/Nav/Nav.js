import React, { Component } from "react";

import NavBtn from "./NavBtn/NavBtn";
import NavContent from "./NavContent/NavContent";

import "./Nav.scss";

class Nav extends Component {
  state = {
    full: false
  };

  onWidth = () => {
    this.setState({ full: !this.state.full });
  };
  render() {
    return (
      <div className="Nav">
        <NavBtn
          onWidth={this.onWidth}
          width={this.state.full}
          onNav={this.props.onNav}
        />
        <NavContent width={this.state.full} nav={this.props.nav} />
      </div>
    );
  }
}

export default Nav;
