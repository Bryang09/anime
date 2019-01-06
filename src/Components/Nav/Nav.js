import React, { Component } from "react";

import NavBtn from "./NavBtn/NavBtn";
import NavContent from "./NavContent/NavContent";

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
        <NavBtn onWidth={this.onWidth} width={this.state.full} />
        <NavContent width={this.state.full} />
      </div>
    );
  }
}

export default Nav;
